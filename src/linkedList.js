export class Node {
  constructor(key, value, next = null) {
    this.key = key;
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
        nodeList.push([currentNode.key, currentNode.value]);
        currentNode = currentNode.next;
      }
      nodeList.push([currentNode.key, currentNode.value]);
      return nodeList;
    }
    throw new Error("List is empty!");
  }

  getKeys() {
    let keyList = [];
    let currentNode = this.head;
    if (currentNode) {
      while (currentNode.next) {
        keyList.push(currentNode.key);
        currentNode = currentNode.next;
      }
      keyList.push(currentNode.key);
      return keyList;
    }
    throw new Error("List is empty!");
  }

  getValue(key) {
    let currentNode = this.head;
    if (currentNode) {
      if (currentNode.key == key) {
        return currentNode.value;
      }
      while (currentNode.next) {
        currentNode = currentNode.next;
        if (currentNode.key == key) {
          return currentNode.value;
        }
      }
    }
    throw new Error(`no value found for specified key: [${key}]`);
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
    throw new Error("List is empty!");
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
      throw new Error("Value not found.");
    }
  }

  clear() {
    this.head = null;
  }
}
