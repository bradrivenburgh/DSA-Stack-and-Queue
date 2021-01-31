const {Stack, peek, isEmpty, display, is_palindrome} = require('./Stack');

function main() {
  const starTrek = new Stack();
  
  const characters = ['Kirk', 'Spock', 'McCoy', 'Scotty'];
  characters.forEach(character => starTrek.push(character));
  
  // Remove McCoy from stack
  let currNode = starTrek.top;
  while (currNode.next !== null) {
    if (currNode.data === 'McCoy') {
      starTrek.pop();
      return starTrek;
    } 
    starTrek.pop();
    currNode = currNode.next;
  }

  return starTrek;
}

const stack = main();

//console.log(stack);
//console.log(peek(stack))
//console.log(isEmpty(stack))
//display(stack);
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));