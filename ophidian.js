const { Queue, isEmpty, size } = require('./Queue');

function bank(queue) {
  console.log('OSCAR THE TELLER: Ok, first customer, get up here. I\'ve got my lunch break soon so hurry up!');

  while (!isEmpty(queue)) {
    let customer = queue.dequeue();
    if (Math.random() < .25) {
      console.log(`Come with your paperwork in order next time, ${customer}. Back of the line!`)
      queue.enqueue(customer);
    } else {
      console.log(`Thanks for being prepared, ${customer}.  Now scram.`)
    }
  }
  console.log('Everyone has been served, FINALLY!  Now lunch...HEY!  Who ate my sandwich?!?!  It was clearly labeled, OSCAR. For crying out loud.')
}

const tellerLine = new Queue();

['Brad', 'Amanda', 'Karoline', 'Jake', 'Joe', 'Danielle', 'Valerie', 'Robert']
  .forEach(customer => tellerLine.enqueue(customer));

console.log(bank(tellerLine));