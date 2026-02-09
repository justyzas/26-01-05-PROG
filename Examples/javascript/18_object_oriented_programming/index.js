// import "./theory.js";
import { Rectangle } from "./classes.js";

const rect1 = new Rectangle(4, 6, "cm");
rect1.unit = "mm";

console.log(rect1.areaString);
console.log(rect1.widthInMeters);
