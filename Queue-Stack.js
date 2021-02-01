const { Stack } = require('./Stack');

class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  enqueue(data) {
    while (this.second.top !== null) {
      this.first.push(this.second.pop());
    }
    this.first.push(data);
  }

  dequeue() {
    if (this.first.top === null && this.second.top === null) {
      console.log('The queue is empty');
      return null;
    }

    while (this.first.top !== null) {
      this.second.push(this.first.pop());
    }
    return this.second.pop();
  }
}

const starTrekQ = new Queue();
starTrekQ.enqueue('Kirk');
starTrekQ.enqueue('Spock');
starTrekQ.enqueue('Uhura');
starTrekQ.enqueue('Sulu');
starTrekQ.enqueue('Checkov');

console.log(starTrekQ);
console.log(starTrekQ.dequeue());  // Kirk