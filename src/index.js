import { Node, LinkedList } from "./linkedList";
import "./styles.css";
//import { function name } from "./jsFile";
//import odinImage from "./odin.png";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

const node1 = new Node("dog");
const node2 = new Node("cat");
const node3 = new Node("whale");

const list = new LinkedList(node1);
list.appendNode(node2);
list.prependNode(node3);
console.log(list.getList());
console.log(list.getValues());
list.clear();
console.log(list.getList());
