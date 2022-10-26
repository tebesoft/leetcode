
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