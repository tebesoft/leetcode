/**
 * @param {string} s
 * @return {number}
 * 
 */
 var romanToInt = function(s) {
  const symbols = {
      "I": 1,
      "IV": 4,
      "V": 5,
      "IX": 9,
      "X": 10,
      "XL": 40,
      "L": 50,
      "XC": 90,
      "C": 100,
      "CD": 400,
      "D": 500,
      "CM": 900,
      "M": 1000,
      
  }
  
  let i = 0, j = 1;

  while(i < s.length) {

    const firstCh = s[i];
    const secondCh = s[j];

    const chPair = symbols[firstCh + secondCh];

    if (chPair) {
      sum += chPair;
      i += 2;
      j += 2;
    } else {
        sum += symbols[firstCh];
        i += 1
        j += 1
    }
  }
  
  // let romans = s.split('').reverse();
  // let sum = 0;
  
  
  // while (romans.length) {
  //     const firstCh = romans.pop();
  //     const secondCh = romans.pop();
  //     const chPair = symbols[firstCh + secondCh];
  //     if (chPair) {
  //         sum += chPair;
          
  //     } else {
  //         sum += symbols[firstCh];
  //         if (secondCh) {
  //             romans.push(secondCh);
  //         }
  //     }
  // }
  
  return sum;
};