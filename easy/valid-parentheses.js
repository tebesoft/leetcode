/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 
More examples
"()"
"()[]{}"
"(]"
"(("
"){"

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

class Stack {
  constructor () {
    this.top = null
    this.length = 0
  }

  push(e) {
    var node=new newNode(e)
    node.next=this.top
    this.top=node
      this.length++
  }

  pop() {
    const temp=this.top
    if (!temp) {
        return undefined
    }
    this.top=this.top.next
    this.length--
    return temp.data
  }
}
  
class newNode {
  constructor (data, next) 
  {
    this.data = data
    this.next = null
  }
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    if (s.length < 2) {
        return false;
    }
    
    const brackets = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    
    const stack = new Stack()
    
    for (let ch of s) {
        if (ch == '{' || ch == '[' || ch == '(') {
            stack.push(ch);
        } else {
            const openBraket = stack.pop();
            if (brackets[ch] != openBraket) {
                return false;
            }
        }
    }
    
    if (stack.length) {
        return false;
    }
    return true;
};