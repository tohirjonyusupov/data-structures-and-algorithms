class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  shift() {
    this.length--;
    this.head = this.head.next;
  }

  pop() {
    this.length--;
    let current = this.head;
    while (current.next && current.next != this.tail) {
      current = current.next;
    }
    current.next = null;
    this.tail = current;
  }

  unshift(value) {
    this.length++;
    const new_node = new Node(value);
    if (this.head == null) {
      this.head = new_node;
      this.tail = new_node;
    } else {
      new_node.next = this.head;
      this.head = new_node;
    }
  }
  push(value) {
    this.length++;
    const new_node = new Node(value);
    if (this.head == null) {
      this.head = new_node;
      this.tail = new_node;
    } else {
      this.tail.next = new_node;
      this.tail = new_node;
    }
  }

  traverse() {
    let list = [];
    let current = this.head;
    while (current) {
      list.push(current.value);
      current = current.next;
    }
    return list;
  }

  insert(index, value) {
    this.length++;
    if (index == 0) {
      this.unshift(value);
    }
    if (index >= this.length + 1) {
      return;
    }
    const new_node = new Node(value);
    let current = this.head;
    while (index - 1 > 0) {
      current = current.next;
      index--;
    }
    new_node.next = current.next;
    current.next = new_node;
  }

  deleteByIndex(index) {
    this.length--;
    if (index === 0) {
      this.shift();
      return;
    }
    if (index >= this.length) return;
    let current = this.head;
    while (index - 1 > 0 && current.next) {
      current = current.next;
      index--;
    }
    current.next && (current.next = current.next.next);
    current.next === this.tail && (this.tail = current)
  }

  search(value) {
    let current = this.head;
    let counter = 0;
    while (current) {
      if (current.value === value) return counter;
      current = current.next;
      counter++;
    }
    return -1;
  }
}

const linkedlist = new LinkedList();
linkedlist.push(10);
linkedlist.push(20);
linkedlist.push(30);
linkedlist.push(30);
console.log(linkedlist.traverse());
console.log(linkedlist.search(50));
console.log(linkedlist.length);
linkedlist.pop();
console.log(linkedlist.length);
