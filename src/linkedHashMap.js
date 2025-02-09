import { Node, LinkedList } from "./linkedList";

//LinkedHasMap class with various methods
//set, get, removeKey, clearList
//various LinkedList methods also available..
//getList, hasKey, getKeys, getValue, getValues,
//removeByKey, clear

export class LinkedHashMap {
  constructor(capacity = 8, loadFactor = 0.75) {
    this.capacity = capacity;
    this.loadFactor = loadFactor;
    this.buckets = [];
    if (capacity <= 0) {
      throw new Error("Invalid capacity value. Must be greater than 0");
    }
    this.populateBuckets();
  }

  populateBuckets() {
    for (let i = 0; i < this.capacity; i++) {
      this.buckets[i] = new LinkedList();
    }
  }

  hash(key) {
    let hashCode = 0;

    for (let i = 0; i < key.length; i++) {
      hashCode = hashCode + key.charCodeAt(i) * 31;
    }

    return hashCode % this.capacity;
  }

  set(key, value) {
    let node = new Node(key, value);
    let index = this.buckets.at(this.hash(key));
    if (index.hasKey(key)) {
      index.removeByKey(key);
      index.appendNode(node);
    } else {
      index.appendNode(node);
    }
    if (this.checkCapacity()) {
      this.addBuckets();
    }
    return 1;
  }

  checkCapacity() {
    let load = 0;
    this.buckets.forEach((bucket) => {
      if (bucket.head) {
        load++;
      }
    });
    return load / this.capacity > this.loadFactor ? 1 : 0;
  }

  addBuckets() {
    //temporarily store all existing node key value pairs
    let temp = [];
    this.buckets.forEach((bucket) => {
      if (bucket.head) {
        temp = temp.concat(bucket.getList());
      }
    });
    //update bucket size
    this.capacity = this.capacity * 2;
    this.buckets = [];
    this.populateBuckets();
    //repopulate buckets with new hash
    temp.forEach((node) => {
      this.set(node[0], node[1]);
    });
    return 1;
  }

  get(key) {
    return this.buckets.at(this.hash(key)).getValue(key);
  }

  removeKey(key) {
    if (typeof key == "string") {
      this.buckets.at(this.hash(key)).removeByKey(key);
      console.log(`List at index ${this.hash(key)} has been removed.`);
      return 1;
    }

    throw new Error('Input must be of type: "string"');
  }

  clearList(input) {
    if (typeof input == "string") {
      const index = this.hash(input);
      this.buckets[index] = new LinkedList();
      console.log(`List at index ${this.hash(input)} has been removed.`);
      return 1;
    }
    if (typeof input == "number") {
      if (input >= 0 && input < this.buckets.length) {
        this.buckets[input] = new LinkedList();
        console.log(`List at index ${input} has been removed.`);
        return 1;
      }
      throw new Error(
        `number input must be between "0-${this.buckets.length - 1}"`,
      );
    }
    throw new Error('Input must be of type: "string" or "integer"');
  }
}
