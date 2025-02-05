import { Node, LinkedList } from "./linkedList";

export class LinkedHashMap {
  constructor(capacity = 8, loadFactor = 0.7) {
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
    this.buckets.at(this.hash(key)).appendNode(node);
    return 1;
  }

  get(key) {
    return this.buckets.at(this.hash(key)).getValue(key);
  }
}
