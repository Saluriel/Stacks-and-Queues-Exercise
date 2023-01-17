/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let newNode = new Node(val);

    // if there isn't anything in the stack, make the new value the first and last node
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    }
    // if there is something in the stack already, set the new node as the tail
    else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size += 1;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (!this.first) {
      throw new Error("Stack is empty!")
    }

    let originalFirst = this.first.val;
    this.first = this.first.next;
    this.size -= 1;

    if (this.length < 2) {
      this.last = this.first;
    }

    return originalFirst;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val;

  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    if (!this.first) {
      return true;
    }
    else {
      return false;
    }

  }
}

module.exports = Stack;
