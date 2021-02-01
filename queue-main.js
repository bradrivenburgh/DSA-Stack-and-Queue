//  const { QueueDbl, peek, isEmpty, display } = require('./Queue-dbl');
const { Queue, peek, isEmpty, display, size } = require('./Queue');

const starTrekQ = new Queue();
starTrekQ.enqueue('Kirk');
starTrekQ.enqueue('Spock');
starTrekQ.enqueue('Uhura');
starTrekQ.enqueue('Sulu');
starTrekQ.enqueue('Checkov');
starTrekQ.dequeue();
starTrekQ.dequeue();


console.log(peek(starTrekQ));
console.log(isEmpty(starTrekQ));
console.log(display(starTrekQ));  // Uhura is first
console.log(size(starTrekQ));

// const starTrekQDbl = new QueueDbl();

// starTrekQDbl.enqueue('Kirk');
// starTrekQDbl.enqueue('Spock');
// starTrekQDbl.enqueue('Uhura');
// starTrekQDbl.enqueue('Sulu');
// starTrekQDbl.enqueue('Checkov');

// //console.log(peek(starTrekQDbl));
// //console.log(isEmpty(starTrekQDbl));
// //display(starTrekQDbl);
// console.log(peek(starTrekQDbl)); // Uhura
