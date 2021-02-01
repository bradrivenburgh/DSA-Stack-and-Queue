const _Node = require('./_Node');

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    
    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

function peek(stack) {
  return stack.top;
}

function isEmpty(stack) {
  return stack.top === null;
}

function display(stack) {
  let currNode = stack.top;

  while (currNode.next !== null) {
    console.log(currNode);
    currNode = currNode.next;
  }
  console.log(currNode)
}

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let stack = new Stack;
  let length = s.length;
  let mid = Math.floor(length / 2);
  let isOdd = length % 2;
  let index;

  // Push first half of string on to stack
  for (index = 0; index < mid; index++) {
    stack.push(s[index])
  }

  // If the length is odd, ignore center char
  // by advancing index
  if (isOdd) {
    index++;
  }

  // Compare each char of second half of string with the 
  // popped characters.  If different, string is not a 
  // palindrome.
  while (index < length) {
    let char = stack.pop();
    if (char !== s[index]) {
      return false;
    }
    index++;
  }
  // It's a palindrome
  return true;
}

// Version 1
// function balancedParens(string) {
//   const stack = new Stack();

//   let index = 0;

//   // iterate through string
//   for (let element of string) {

//     if (element === "(") {  // push index of opening parens
//       stack.push(index);  // 
//     } else {
//       if (element === ")") {
//         if (isEmpty(stack)) {  // if no opening parens, error
//           console.log(
//             `Character at index ${index} is an invalid closing parentheses`
//           );
//           return false;
//         } else {
//           stack.pop();
//         }
//       }
//     }
//     index++; // Advance to next char in string
//   }

//   if (!isEmpty(stack)) { // If there is already and opening parens
//     console.log(
//       `Extra opening parens added; already opening parens at index ${stack.pop()}`
//     );
//     return false;
//   } else {
//     console.log("The parentheses are balanced");
//     return true;
//   }
// }

// Version 2 Recognize 3 paris brackets: (), [], {}
function balancedParens(string) {
  const parensStack = new Stack();
  const bracketStack = new Stack();
  const braceStack = new Stack();

  let index = 0;

  // iterate through string
  for (let element of string) {

    if (element === "(") {  // push index of opening parens
      parensStack.push(index);  // 
    } else {
      if (element === ")") {
        if (isEmpty(parensStack)) {  // if no opening parens, error
          console.log(
            `Character at index ${index} is an invalid closing parentheses`
          );
          return false;
        } else {
          parensStack.pop();
        }
      }
    }
    index++; // Advance to next char in string
  }

  if (!isEmpty(parensStack)) { // If there is already and opening parens
    console.log(
      `Extra opening parens added; already opening parens at index ${parensStack.pop()}`
    );
    return false;
  } else {
    console.log("The parentheses are balanced");
    return true;
  }
}



module.exports = {
  Stack,
  peek,
  isEmpty,
  display,
  is_palindrome,
  balancedParens,
};