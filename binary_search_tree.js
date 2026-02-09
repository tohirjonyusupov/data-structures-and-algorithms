class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

a55 = new Node(55);
a60 = new Node(60, a55, null);
a35 = new Node(35);
a19 = new Node(19);
a14 = new Node(14);
a20 = new Node(20, a19, null);
a13 = new Node(13, null, a14);
a50 = new Node(50, a35, a60);
a15 = new Node(15, a13, a20);
a30 = new Node(30, a15, a50);

// function binary_search_tree(root, target) {
//   while (root != null){
//     if(target > root.value){

//     }else {

//     }
//   }
// }

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

function add_binary_search_tree(root, new_value) {
  new_node = new Node(new_value);
  while (true) {
    if (new_value > root.value) {
      root = root.right;
    } else if (new_value < root.value) {
      root = root.left;
    } else if (root.left == null) {
      root.left = new_node;
      return;
    } else if (root.right == null) {
      root.right = new_node;
      return;
    } else {
      return;
    }
  }
}

add_binary_search_tree(a30, 28)
level_order_travelsal(a30)