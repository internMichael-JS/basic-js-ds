const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}
class Queue {
  list = null;

  getUnderlyingList() {
    return this.list;
  }

  enqueue(value) {
    if (this.list === null) {
      this.list = new ListNode(value);
    } else {
      let item = this.list;
      while (item.next) {
        item = item.next;
      }
      item.next = new ListNode(value);
    }
  }

  dequeue() {
    let el = this.list.value;
    this.list = this.list.next;
    return el;

  }
}

module.exports = {
  Queue
};
