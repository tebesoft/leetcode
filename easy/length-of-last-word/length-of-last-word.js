/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
      return s.trimEnd().split(' ').slice(-1)[0].length
  };

var lengthOfLastWord = function(s) {
  let j = s.length-1
  let result = ''

  while (j >= 0) {
    if (s[j] == ' ' && result.length > 0) break;
    else if (s[j] != ' ') result = s[j] + result
    j--
  }
  return result.length
}

