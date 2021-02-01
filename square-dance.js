const { Queue, isEmpty, size } = require('./Queue');

function squareDance(menQ, womenQ) {
  let gender, spares;
  
  while(!isEmpty(menQ) && !isEmpty(womenQ)) {
    const male = menQ.dequeue();
    const female = womenQ.dequeue();
    console.log(`The female dancer is ${female}, and the male dancer is ${male}.`);
  }

  if (isEmpty(menQ)) {
    gender = 'female';
    spares = womenQ;
  }

  if (isEmpty(womenQ)) {
    gender = 'male';
    spares = menQ;
  }

  console.log(`There are ${size(spares)} ${gender} dancers waiting to dance`);
  return spares;
}

const men = new Queue();
const women = new Queue();

[ 'Frank', 'John', 'Sherlock', 'David', 'Christopher'].forEach(male => {
  men.enqueue(male);
});
[ 'Jane', 'Madonna', 'Beyonce' ].forEach(female => {
  women.enqueue(female);
});

// Female dancer is Jane, and the male dancer is Frank
// Female dancer is Madonna, and the male dancer is John
// Female dancer is Beyonce, and the male dancer is Sherlock
// There are 2 male dancers waiting to dance
console.log(squareDance(men, women)); 