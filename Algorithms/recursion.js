const factorial = number => (number === 1 ? 1 : number * factorial(number - 1));
// console.log(factorial(5));

const fibb = n => (n < 2 ? 1 : fibb(n - 1) + fibb(n - 2));
// console.log(fibb(27));

function reverseStr(str) {
   const array = [];
   for (let i = str.length - 1; i >= 0; i--) array.push(str[i]);
   return array.join('');
}
// console.log(reverseStr('Hi bro'));

// Not working yet bro
function reverseStrRecur(str, i) {
   const lastChar = str[i];
   if (i >= 0) return lastChar;

   return lastChar + reverseStrRecur(str, str.length - 1);
}

// console.log(reverseStrRecur('Hi bro'));
