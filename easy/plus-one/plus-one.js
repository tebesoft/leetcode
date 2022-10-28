/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
  const lastIdx = digits.length-1
  let num = digits[lastIdx] + 1;
  let carry = num >= 10 ? num / 10 : 0
  digits[lastIdx] = num % 10
  
  if (carry == 0) return digits
  
  for (let i=digits.length-2; i >= 0; i--) {
      num = digits[i] + carry;
      carry = num >= 10 ? num / 10 : 0
      digits[i] = num % 10
  }
  if (carry > 0) {
      digits.push(digits[0])
      digits[0] = carry
  } 
  return digits
};