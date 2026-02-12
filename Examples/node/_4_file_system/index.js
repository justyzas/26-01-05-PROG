// const fs = require("fs");
// const path = require("path");
import fs from "fs";
import path from "path";

// ============================================================
// Node.js File System (fs) Tutorial — Sync & Async
// ===========================================================
// Current Working directory
const CWD = process.cwd();
const FILE = path.join(CWD, "demo.txt");
const COPY = path.join(CWD, "copy.txt");
const DIR = path.join(CWD, "test-dir");
const RENAMED = path.join(CWD, "renamed.txt");

// ------------------------------------------------------------
// 1. WRITING FILES
// ------------------------------------------------------------

// --- Sync ---
fs.writeFileSync(FILE, "Hello from writeFileSync!\n", "utf-8");
console.log("1a) writeFileSync — file created");

// --- Async (callback) ---
fs.writeFile(FILE, "Overwritten by writeFile async!\n", "utf-8", (err) => {
	if (err) throw err;
	console.log("1b) writeFile  — file overwritten asynchronously");
});

// ------------------------------------------------------------
// 2. READING FILES
// ------------------------------------------------------------

// --- Sync ---
const contentSync = fs.readFileSync(FILE, "utf-8");
console.log("2a) readFileSync:", contentSync.trim());

// --- Async (callback) ---
fs.readFile(FILE, "utf-8", (err, data) => {
	if (err) throw err;
	console.log("2b) readFile:    ", data.trim());
});

// ------------------------------------------------------------
// 3. APPENDING TO FILES
// ------------------------------------------------------------

// --- Sync ---
fs.appendFileSync(FILE, "Appended line (sync)\n", "utf-8");
console.log("3a) appendFileSync — line appended");

// --- Async (callback) ---
fs.appendFile(FILE, "Appended line (async)\n", "utf-8", (err) => {
	if (err) throw err;
	console.log("3b) appendFile  — line appended asynchronously");
});

// ------------------------------------------------------------
// 4. CHECKING IF FILE/DIR EXISTS
// ------------------------------------------------------------

// --- Sync ---
const exists = fs.existsSync(FILE);
console.log("4a) existsSync:", exists); // true

// --- Async (use fs.access instead of deprecated fs.exists) ---
fs.access(FILE, fs.constants.F_OK, (err) => {
	console.log("4b) access:", err ? "does NOT exist" : "exists");
});

// ------------------------------------------------------------
// 5. FILE INFORMATION (stat)
// ------------------------------------------------------------

// --- Sync ---
const stats = fs.statSync(FILE);
console.log(
	"5a) statSync — size:",
	stats.size,
	"bytes, isFile:",
	stats.isFile(),
);

// --- Async (callback) ---
fs.stat(FILE, (err, stats) => {
	if (err) throw err;
	console.log(
		"5b) stat     — size:",
		stats.size,
		"bytes, isDir:",
		stats.isDirectory(),
	);
});

// ------------------------------------------------------------
// 6. RENAMING / MOVING FILES
// ------------------------------------------------------------

// Create a temp file to rename
fs.writeFileSync(RENAMED, "I will be renamed\n");

// --- Sync ---
const renamedDest = path.join(CWD, "renamed-sync.txt");
fs.renameSync(RENAMED, renamedDest);
console.log("6a) renameSync — file renamed");

// --- Async (callback) ---
fs.rename(renamedDest, RENAMED, (err) => {
	if (err) throw err;
	console.log("6b) rename     — file renamed back asynchronously");

	// cleanup
	fs.unlinkSync(RENAMED);
});

// ------------------------------------------------------------
// 7. COPYING FILES
// ------------------------------------------------------------

// --- Sync ---
fs.copyFileSync(FILE, COPY);
console.log("7a) copyFileSync — file copied");

// --- Async (callback) ---
fs.copyFile(FILE, COPY, (err) => {
	if (err) throw err;
	console.log("7b) copyFile     — file copied asynchronously");
});

// ------------------------------------------------------------
// 8. DELETING FILES (unlink)
// ------------------------------------------------------------

// Create a throwaway file to delete
fs.writeFileSync(path.join(CWD, "delete-me.txt"), "bye");

// --- Sync ---
fs.unlinkSync(path.join(CWD, "delete-me.txt"));
console.log("8a) unlinkSync — file deleted");

// --- Async (callback) ---
fs.writeFileSync(path.join(CWD, "delete-me.txt"), "bye again");
fs.unlink(path.join(CWD, "delete-me.txt"), (err) => {
	if (err) throw err;
	console.log("8b) unlink     — file deleted asynchronously");
});

// ------------------------------------------------------------
// 9. DIRECTORIES — create, read, remove
// ------------------------------------------------------------

// --- Sync ---
if (!fs.existsSync(DIR)) fs.mkdirSync(DIR);
console.log("9a) mkdirSync    — directory created");

const entries = fs.readdirSync(CWD);
console.log("9b) readdirSync  —", entries.length, "entries in cwd");

fs.rmdirSync(DIR);
console.log("9c) rmdirSync    — directory removed");

// --- Async (callback) ---
fs.mkdir(DIR, (err) => {
	if (err) throw err;
	console.log("9d) mkdir        — directory created asynchronously");

	fs.readdir(CWD, (err, files) => {
		if (err) throw err;
		console.log("9e) readdir      —", files.length, "entries");

		fs.rmdir(DIR, (err) => {
			if (err) throw err;
			console.log("9f) rmdir        — directory removed asynchronously");
		});
	});
});

// ------------------------------------------------------------
// 10. WATCHING FILES FOR CHANGES
// ------------------------------------------------------------

// fs.watch is async-only (event-based)
const watcher = fs.watch(FILE, (eventType, filename) => {
	console.log("10) watch — event:", eventType, "on", filename);
});

// Trigger a change after 500ms, then stop watching
setTimeout(() => {
	fs.appendFileSync(FILE, "trigger watch event\n");
	watcher.close();
	console.log("10) watcher closed");

	// --- Final cleanup ---
	fs.unlinkSync(FILE);
	fs.unlinkSync(COPY);
	console.log("\nCleanup done. Tutorial finished!");
}, 500);
