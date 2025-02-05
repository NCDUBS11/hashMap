import { LinkedHashMap } from "./linkedHashMap";
import "./styles.css";
//import { function name } from "./jsFile";
//import odinImage from "./odin.png";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

let map = new LinkedHashMap();

map.set("feline", "cat");
map.set("canine", "dog");
map.set("rodent", "mouse");

console.log(map);
