import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { NavigationBar } from "./Navigation";
import "./index.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		{/* <h1>Hi from react</h1> */}
		<NavigationBar />
		<App />
	</StrictMode>,
);
