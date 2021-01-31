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

module.exports = {
  Stack,
  peek,
  isEmpty,
  display,
  is_palindrome
};