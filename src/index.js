import { LinkedHashMap } from "./linkedHashMap";
// import { LinkedList, Node } from "./linkedList";
import "./styles.css";
//import { function name } from "./jsFile";
//import odinImage from "./odin.png";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

let map = new LinkedHashMap();

map.set("feline", "cat");
map.set("canine", "dog");
map.set("canine", "wolf");
map.set("rodent", "mouse");
map.set("mammal", "bat");
map.set("mammal", "cow");
map.set("reptile", "lizard");
map.set("bird", "seagull");
map.set("bird", "eagle");
map.set("insect", "beetle");
map.set("hubba", "bubba");
map.set("robot", "wall-e");
map.set("wild", "animal");

console.log(map);

// let node0 = new Node("1", "dog");
// let node1 = new Node("2", "cat");
// let node2 = new Node("3", "hamster");
// let node3 = new Node("4", "monkey");
// let node4 = new Node("5", "dog");

// let list = new LinkedList(node0);

// list.appendNode(node1);
// list.appendNode(node2);
// list.appendNode(node3);
// list.appendNode(node4);

// console.log(list.getList());

// list.removeByKey("3");
// // list.removeByIndex(3);

// console.log(list.getList());
