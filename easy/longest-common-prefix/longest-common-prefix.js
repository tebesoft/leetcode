/**
 * @param {string[]} strs
 * @return {string}
 * 
 * Write a function to find the longest common prefix string amongst an array of strings.
 */
 var longestCommonPrefix = function(strs) {
  let prefix = strs.pop();
  
  while (strs.length) {
      const word = strs.pop();
      let newPrefix = '';
      
      for (let i=0; i < prefix.length; i++) {
          if (word[i] == prefix[i]) {
              newPrefix += prefix[i];
          } else {
              break;
          }
      }
      prefix = newPrefix;
  }
  return prefix;
};