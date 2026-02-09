class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// a14 = new Node(14)
// a13 = new Node(13)
// a12 = new Node(12)
// a11 = new Node(11)
// a10 = new Node(10)
// a9 = new Node(9)
// a8 = new Node(8, a14)
// a7 = new Node(7, a13)
// a6 = new Node(6, a11, a12)
// a5 = new Node(5, null, a10)
// a4 = new Node(4, a8, a9)
// a3 = new Node(3, a6, a7)
// a2 = new Node(2, a4, a5)
// a1 = new Node(1, a2, a3)

a8 = new Node(8)
a7 = new Node(7)
a6 = new Node(6)
a5 = new Node(5, null, a8)
a4 = new Node(4)
a3 = new Node(3, a6, a7)
a2 = new Node(2, a4, a5)
a1 = new Node(1, a2, a3)

// function inorder_traversal(root) {
//   let res = []
//   let stuck = []
//   while (root || stuck.length > 0) {
//     while (root) {
//       stuck.push(root)
//       root = root.left
//     }
//     root = stuck.pop()
//     res.push(root.value)
//     root = root.right
//   }
//   console.log(res);
// }
// inorder_traversal(a1)

// console.log(a1.value);


// function inorder_traversal(root){
//   if(root === null){
//     return 0
//   }
  
//   let a = inorder_traversal(root.left)
//   console.log(root.value);
//   let b = inorder_traversal(root.right)
//   return root.value
// }

// inorder_traversal(a1)



// let root = a1
// let stack = []
// let res = []
// let step = 0
// while (stack.length > 0 || root != null) {
//   while (root != null) {
//     res.push(root.value)
//     stack.push(root)

//     root = root.left
//     step++
//   }
//   root = stack.pop()  
//   root = root.right
// }

// console.log(res);


// v = []
// function preorder_traversel(root) {
//   if(root === null){
//     return
//   }
//   v.push(root.value)
//   preorder_traversel(root.left)
//   preorder_traversel(root.right)
// }

// preorder_traversel(a1)
// console.log(v);





function level_order_travelsal(root){
  res = []
  queue = [root]
  while (queue.length > 0) {
    root = queue.shift()
    res.push(root.value)
    if(root.left){
      queue.push(root.left)
    }
    if(root.right){
      queue.push(root.right)
    }
  }
  console.log(res);
}



function add_to_tree(root, value){
  res = []
  queue = [root]
  new_node = new Node(value)
  while (queue.length > 0) {
    root = queue.shift()
    res.push(root.value)
    if(root.left){
      queue.push(root.left)
    }
    else {
      root.left = new_node
      return root
    }
    if(root.right){
      queue.push(root.right)
    }
    else {
      root.right = new_node
      return root
    }
  }
}

add_to_tree(a1, 9)
level_order_travelsal(a1)