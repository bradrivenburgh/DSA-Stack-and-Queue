const { Queue, peek, isEmpty, display } = require('./Queue');

const starTrekQ = new Queue();
starTrekQ.enqueue('Kirk');
starTrekQ.enqueue('Spock');
starTrekQ.enqueue('Uhura');
starTrekQ.enqueue('Sulu');
starTrekQ.enqueue('Checkov');


console.log(peek(starTrekQ));
console.log(isEmpty(starTrekQ));
console.log(display(starTrekQ));