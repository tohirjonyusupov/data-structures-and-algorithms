class Node {
  constructor() {
    this.children = {}
    this.end = false
  }
}

class Trie {
  constructor() {
    this.root = new Node()
  }

  add(val) {
    let current = this.root
    for (let i = 0; i < val.length; i++) {
      
      if(!Object.keys(current.children).includes(val[i])){
        current.children[val[i]] = new Node()
      } 
      current = current.children[val[i]]
      
    }
    current.end = true
  }

  search(val) {
    let current = this.root
    for (let i = 0; i < val.length; i++) {
      if(!Object.keys(current.children).includes(val[i])){
        return false
      } 
      current = current.children[val[i]]
    }
    if(current.end){
      return true
    }
    return false
  }

  delete(val) {
    let current = this.root
    let stack = []
    for (let i = 0; i < val.length; i++) {
      if(!Object.keys(current.children).includes(val[i])){
        return false
      }

      current = current.children[val[i]]


    }
  }
}

let trie = new Trie()

trie.add('for')
trie.add('forward')
trie.add('forvard')

console.log(trie.search('for'));
console.log(trie.search('forvard'));


let str = 'pixel_12.7'
console.log(str.split('_')[-1]);
