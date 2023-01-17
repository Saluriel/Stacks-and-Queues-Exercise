/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let newNode = new Node(val);

    // if the queue is empty, make the new Node the first and last thing in the queue
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;

    }
    // if there's already a head, set the new node as the tail
    else {
      this.last.next = newNode;
      this.last = newNode;
    }
    // add 1 to the size of the queue when you add something
    this.size += 1;

  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    // throw an error if the queue is empty, if there isn't a first node the queue is empty
    if (!this.first) {
      throw new Error("Nothing in the queue")
    }

    // get the original value of the start of the queue
    let originalFirst = this.first.val;
    // console.log(originalFirst)

    // set the new first to the next node in the queue
    this.first = this.first.next
    // decrement size
    this.size -= 1;

    if (this.size < 2) {
      this.last = this.first;
    }

    return originalFirst;

  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if (!this.first) {
      return true;
    }
    else {
      return false;
    }

  }
}

module.exports = Queue;
