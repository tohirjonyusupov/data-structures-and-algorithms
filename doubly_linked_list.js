class Node {
  constructor(value, next=null, prev=null){
    this.value = value
    this.next = next,
    this.prev = prev
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  append(value) {
    const new_node = new Node(value)
    if(this.head == null){
      this.head = new_node
      this.tail = new_node
    }else {
      this.tail.next = new_node
      new_node.prev = this.tail
      this.tail = new_node
    }
  }

  prepend(value){
    const new_node = new Node(value)
    if(this.head == null){
      this.head = new_node
      this.tail = new_node
    }else {
      new_node.next = this.head
      this.head.prev = new_node
      this.head = new_node
    }
  }

  insert(value, index) {
    const new_node = new Node(value)
    let current = this.head
    while(index - 1 > 0){
      current = current.next
      index--
    }
    let temp = current.next
    new_node.next = temp
    new_node.prev = current
    current.next = new_node
    temp.prev = new_node
  }

  search(value) {
    let current = this.head
    let index = 0
    while (current != null){
      if(current.value == value){
        return index
      }
      index++
      current = current.next
    }
    return -1
  }

  traverse(){
    const list = []
    let current = this.tail
    while (current != null){
      list.push(current.value)
      current = current.prev
    }
    return list
  }
}

const dll = new DoublyLinkedList()

dll.append(10)
dll.append(20)
dll.append(30)

console.log(dll.traverse());

dll.insert(25, 1)
console.log(dll.traverse());
console.log(dll.search(20));