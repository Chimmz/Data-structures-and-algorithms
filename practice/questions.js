const findMinAndMaxSums = arr => {
   arr = [1, 3, 5, 7, 8];
   const [min, max] = [Math.min(...arr), Math.max(...arr)];
   const rest = arr.filter((elem, i, arr) => ![min, max].includes(elem));

   const addNums = nums => nums.reduce((acc, elem, i, arr) => acc + elem, 0);

   const minSum = addNums([...rest, min]);
   const maxSum = addNums([...rest, max]);

   console.log(`minSum: ${minSum}, maxSum = ${maxSum}`);
};

const isPalindromicNumber = number => {
   const str = `${number}`;

   for (let i = 0, j = str.length - 1; i <= j; i++, j--)
      if (str[i] !== str[j]) return false;

   return true;
};
// console.log(isPalindromicNumber(111));
// console.log('Hey bro');

nums = [2, 3, 4, 5];

const rotate = (arr, k) => {
   for (let i = 1; i <= k; i++) {
      arr.unshift(nums.pop());
   }
   const result = arr;
   return result;
};

console.log(rotate(nums, 3));
