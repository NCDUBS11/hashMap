export class Node {
  constructor(key, value, next = null, prev = null) {
    this.key = key;
    this.value = value;
    this.prev = prev;
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
      node.prev = currentNode;
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

  hasKey(key) {
    let currentNode = this.head;
    if (currentNode) {
      if (currentNode.key == key) {
        return 1;
      }
      while (currentNode.next) {
        currentNode = currentNode.next;
        if (currentNode.key == key) {
          return 1;
        }
      }
    }
    return 0;
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

  removeByKey(key) {
    let currentNode = this.head;
    if (currentNode) {
      if (currentNode.key == key && currentNode.next != null) {
        this.head = currentNode.next;
        this.head.prev = null;
        return 1;
      }
      if (currentNode.key == key && currentNode.next == null) {
        this.clear();
        return 1;
      }
      while (currentNode.next) {
        currentNode = currentNode.next;
        if (currentNode.key == key && currentNode.next != null) {
          currentNode.prev.next = currentNode.next;
          currentNode.next.prev = currentNode.prev;
          return 1;
        }
        if (currentNode.key == key && currentNode.next == null) {
          currentNode.prev.next = null;
          return 1;
        }
      }
    }
    throw new Error(`Key (${key}) not found.`);
  }

  removeByIndex(index) {
    let currentNode = this.head;
    let listLength = this.getList().length;
    if (index < 0 || index > listLength - 1 || typeof index != "number") {
      throw new Error(
        `Invalid index. Must be a number between '0' and '${listLength - 1}'`,
      );
    }
    if (currentNode) {
      if (index == 0) {
        this.head = currentNode.next;
        this.head.prev = null;
        return 1;
      }
      for (let i = 1; i <= index; i++) {
        currentNode = currentNode.next;
      }
      currentNode.prev.next = currentNode.next;
      currentNode.next.prev = currentNode.prev;
      return 1;
    }
  }

  clear() {
    this.head = null;
    return 1;
  }
}
