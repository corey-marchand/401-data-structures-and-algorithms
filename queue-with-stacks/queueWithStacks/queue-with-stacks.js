class PsuedoQueue {
  constructor(){
    this.stack1 = [];
    this.stack2 = [];
  }
  enqueue(value){
    this.stack1.push(value);
  }
  dequeue(){
    if(this.stack1.length === 0){
      return 'stack empty';
    } while (this.stack1.length > 0) {
      let popStack = this.stack1.pop();
      this.stack2.push(popStack);
    }
    const final = this.stack2.pop();

    while(this.stack2.length > 0){
      let popStack = this.stack2.pop();
      this.stack1.push(popStack);
    }
    return final;
  }
}
module.exports = PsuedoQueue;
