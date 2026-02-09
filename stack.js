// class Stack {
//   constructor(){
//     this.array = []
//   }

//   push(element) {
//     this.array.push(element)
//   }

//   pop() {
//     if(this.array.length !== 0) {
//       this.array.pop()
//     }
//   }

//   size() {
//     return this.array.length
//   }

//   peek() {
//     return this.array[this.array.length - 1]
//   }

//   is_empty() {
//     return this.array.length === 0
//   }
// }

// let stack = new Stack()

// stack.push(1)
// stack.push(2)
// stack.push(3)
// console.log(stack);

// stack.pop()
// console.log(stack);


// console.log(stack.size());

// console.log(stack.peek());

// stack.pop()
// stack.pop()
// stack.pop()
// console.log(stack.is_empty());


function isValid(s) {
  let stack = []
  let chars = {
    "(": ")",
    "[": "]",
    "{": "}",
  }


  for (let i in s) {
    // "()[]{}"
    for (const key in chars) {
      if(s[i] == chars[`${key}`]){
        stack.push(s[i])
      } else {
        let lastElement = stack.pop()
        if (chars[`${lastElement}`] != s[i]) {
          return false
        }
      }
    }
  }

  return stack.length == 0
}