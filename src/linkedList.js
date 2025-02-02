export class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

export class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  setHead(node) {
    this.head = node;
    return 1;
  }

  appendNode(node) {
    if (this.head) {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
      return 1;
    }
    this.head = node;
    return 1;
  }

  prependNode(node) {
    if (this.head) {
      node.next = this.head;
      this.head = node;
      return 1;
    }
    this.head = node;
    return 1;
  }

  getList() {
    let nodeList = [];
    let currentNode = this.head;
    if (currentNode) {
      while (currentNode.next) {
        nodeList.push(currentNode);
        currentNode = currentNode.next;
      }
      nodeList.push(currentNode);
      return nodeList;
    }
    console.log("List is empty!");
    return 0;
  }

  getValues() {
    let valueList = [];
    let currentNode = this.head;
    if (currentNode) {
      while (currentNode.next) {
        valueList.push(currentNode.value);
        currentNode = currentNode.next;
      }
      valueList.push(currentNode.value);
      return valueList;
    }
    console.log("List is empty!");
    return 0;
  }

  getValueIndex(value) {
    let index = 0;
    let currentNode = this.head;
    if (currentNode.value == value) {
      return index;
    } else {
      index++;
      while (currentNode.next) {
        currentNode = currentNode.next;
        if (currentNode.value == value) {
          return index;
        }
        index++;
      }
      console.log("Value not found.");
      return 0;
    }
  }

  clear() {
    this.head = null;
  }
}
