class MyQueue {
  constructor() {
    this.items = []
    this.index = 0
  }

  push(item) {
    this.items.push(item)
  }

  pop() {
    if(this.items) {
      let item = this.peek
      this.index += 1
      return item

    }
  }

  peek() {
    return this.items[this.index]
  }

  empty() {
    return this.items.length == this.index
  }
}