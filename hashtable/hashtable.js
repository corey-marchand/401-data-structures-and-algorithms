class HashTable {
  constructor(size){
    this.data = new Array(size);
  }
  hash(key){ // 0(1)
    let hash = 0;
    for(let i = 0; i < key.length; i++){
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  add(key, value){// o(1)
    let info = this.hash(key);
    if(!this.data[info]){
      this.data[info] = [];
    }
    this.data[info].push([key, value]);
    return this.data;
  }
  get(key){ // o(1) without collisions
    let info = this.hash(key);
    const currentBucket = this.data[info];
    if(currentBucket){
      for(let i = 0; i < currentBucket.length; i++){
        if(currentBucket[i][0] === key){
          return currentBucket[i][1];
        }
      }
    }
    return null;
  }
  contains(key){
    let info = this.hash(key);
    const currentBucket = this.data[info];
    if(!currentBucket){
      return 'error';
    }
    if(currentBucket){
      for(let i = 0;i < currentBucket.length; i++){
        if(currentBucket[i][0] === key){
          return true;
        }
        if(currentBucket[i][0] !== key){
          return null;
        }
      }
    }
  }
}

module.exports = HashTable;
