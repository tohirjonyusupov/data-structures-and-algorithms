class HashTable {
  constructor(size){
    this.size = size
    this.buckets = Array.from({length: this.size}, (_, i) => i)
  }

  // sizeOfArray(size){
  //   for (let i = 0; i < size; i++) {
  //     this.buckets.push([])
  //   }
  // }

  hashKey(key){
    return this.hash(key)
  }

  insert(key, value){

  }
}