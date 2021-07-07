const mergeSortedArrays = function (array1, array2) {
   if (!array1.length) return array2;
   if (!array2.length) return array1;

   const len1 = array1.length;
   const len2 = array2.length;

   const merged = [];
   for (let i = 0, j = 0; i < len1 || j < len2; ) {
      if (!array1[i]) {
         merged.push(...array2.slice(j));
         break;
      }
      if (!array2[j]) {
         merged.push(...array1.slice(j));
         break;
      }
      if (array1[i] <= array2[j]) {
         merged.push(array1[i]);
         i++;
         continue;
      } else {
         merged.push(array2[j]);
         j++;
      }
   }
   console.log(merged);
};
// mergeSortedArrays([1, 4, 6, 12], [2, 5, 7]);

// O(n)
function firstRecurringChar(array) {
   const mySet = new Set();

   for (elem of array) {
      if (mySet.has(elem)) return elem;
      mySet.add(elem);
   }
}
// O(2n) = O(n)
function firstNonRecurringChar(str) {
   const map = {};
   let firstNonRecurring = null;

   for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (!map[char]) map[char] = 1;
      else map[char] += 1;
   }

   for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (map[char] === 1) return char;
   }
   return firstNonRecurring;
}

// console.log(firstNonRecurringChar('BFGAECBCDA'));

function mostRecurringChar(array) {
   const map = {};
   const answer = { elem: null, count: 0 };

   const elementInMap = elem => Boolean(map[elem]);
   const onElementInMap = elem => {
      map[elem] += 1;
      if (map[elem] > answer.count) {
         answer.elem = elem;
         answer.count = map[elem];
      }
   };

   for (elem of array) {
      if (!elementInMap(elem)) map[elem] = 1;
      else onElementInMap(elem);
   }
   return answer;
}
// console.log('mostRecurringChar', mostRecurringChar([2, 4, 6, 6, 3, 3, 6, 3]));

// My version
function haveCommonElem(array1, array2) {
   if (!array1.length || !array2.length) return false;

   const map = {};
   const longerArray = array1.length > array2.length ? array1 : array2;

   for (let i = 0; i < longerArray.length && array1[i] && array2[i]; i++) {
      const [elem1, elem2] = [array1[i], array2[i]];
      console.log(elem1, elem2);

      if (map[elem1] === 2 || map[elem2] === 1) return true;

      map[elem1] = 1;
      map[elem2] = 2;
   }
   // const mySet = new Set();
   // for (elem of array1) mySet.add(elem);

   // for (elem of array2) {
   //    if (mySet.has(elem)) return true;
   //    mySet.add(elem);
   // }
   // return false;
}
// console.log(haveCommonElem([6, 1, 4], [5, 3, 6]));

// my version
function hasPairWithSum(array, sum) {
   if (array.some(elem => typeof elem !== 'number')) return;
   const complements = new Set();

   array.forEach(elem => {
      complements.add(sum - elem);
   });
   return array.some(elem => complements.has(elem));
}
// console.log(hasPairWithSum([2, 4, 6, 2, 0], 6));

function getPairsWithSum(array, sum) {
   const pairsArray = [];
   const arrayUnique = Array.from(new Set(array));
   const map = {};

   for (elem of arrayUnique) {
      if (!map[elem]) map[elem] = sum - elem;
      if (map[sum - elem]) pairsArray.push(new Set([elem, sum - elem]));
   }
   return pairsArray;
}

// console.log(getPairsWithSum([4, 5], 7));

function mode(array) {
   const map = {};
   let highestFreq = 1;

   array.forEach(elem => {
      if (!map[elem]) map[elem] = 1;
      else if (++map[elem] > highestFreq) highestFreq = map[elem];
   });
   return new Set(array.filter(elem => map[elem] === highestFreq)); // 0(n)
}
// console.log(mode([2, 3, 5, 6, 2, 2, 4, 4, 4, 5, 6]));

function isBalanced(str) {
   const stack = [];
   const isEmpty = () => !stack.length;
   const isOpening = char => char === '[';
   const isClosing = char => char === ']';

   for (bracket of str) {
      if (isOpening(bracket)) stack.push(bracket);
      else if (isEmpty()) return false;
      else stack.pop();
   }

   return isEmpty();
}
console.log(isBalanced('][]'));
