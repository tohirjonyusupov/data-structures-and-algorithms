class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

a8 = new Node(8)
a7 = new Node(7)
a6 = new Node(6)
a5 = new Node(5, null, a8)
a4 = new Node(4)
a3 = new Node(3, a6, a7)
a2 = new Node(2, a4, a5)
a1 = new Node(1, a2, a3)

let visited = []
function inorder_traversal(root){
  if(root === null){
    return 0
  }
  
  inorder_traversal(root.left)
  visited.push(root.value)
  inorder_traversal(root.right)
  return root.value
}

// inorder_traversal(a1)
// console.log(visited);

function preorder_traversel(root) {
  if(root === null){
    return
  }
  visited.push(root.value)
  preorder_traversel(root.left)
  preorder_traversel(root.right)
}

// preorder_traversel(a1)
// console.log(visited);

function postorder_traversel(root) {
  if(root === null){
    return
  }
  postorder_traversel(root.left)
  postorder_traversel(root.right)
  visited.push(root.value)
}

// postorder_traversel(a1)
// console.log(visited);












function count_nodes(root) {
  if(root === null){
    return 0
  }

  let left = count_nodes(root.left)
  let right = count_nodes(root.right)
  return Math.max(left, right) + 1
}

// console.log(count_nodes(a1));









// a55 = new Node(55);
// a60 = new Node(60, a55, null);
// a35 = new Node(35);
// a19 = new Node(19);
// a14 = new Node(14);
// a20 = new Node(20, a19, null);
// a13 = new Node(13, null, a14);
// a50 = new Node(50, a35, a60);
// a15 = new Node(15, a13, a20);
// a30 = new Node(30, a15, a50);

function inorder_traversal(root){
  if(root === null){
    return 0
  }
  
  let a = inorder_traversal(root.left)
  console.log(root.value);
  let b = inorder_traversal(root.right)
  return root.value
}

function BST_add_node(root, value){
  if(root.value > value){
    if(root.left === null){
      root.left = new Node(value)
      return
    } else {
      BST_add_node(root.left, value)
    }
  } else {
    if(root.right === null){
      root.right = new Node(value)
      return
    } else {
      BST_add_node(root.right, value)
    }
  }
}

// BST_add_node(a30, 25)
// inorder_traversal(a30)

function BT_max(root){
  if(root === null){
    return 0
  }

  let left = BT_max(root.left)
  let right = BT_max(root.right)
  return Math.max(Math.max(left, right), root.value)
}















function BT_min(root, parent_val) {
  if(root === null){
    return parent_val
  }

  let left = BT_min(root.left, root.value)
  let right = BT_min(root.right, root.value)
  console.log(left + ' <- ' + root.value + ' -> ' + right);
  return Math.min(left, right, root.value)
}



function print_path(root, array) {
  if(root === null){
    return array
  }
  array.push(root.value)
  let new_arr_left = [...array]
  let new_arr_right = [...array]
  
  let left = print_path(root.left, new_arr_left)
  let right = print_path(root.right, new_arr_right)
    return left.length > right.length ? left : right
}

console.log(print_path(a1, []));










