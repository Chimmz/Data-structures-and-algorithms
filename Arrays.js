let arr = [1, 4, 2];
arr.push(5); // 0(1)
arr.pop(); // 0(1)
arr.unshift(7); // 0(n)
arr.splice(1, 1); // 0(n)

class MyArray {
   constructor() {
      this.len = 0;
      this.nums = [];
   }
   addEnd(...chars) {
      this.nums.push(...chars);
      return this;
   }
   addStart(n) {
      this.nums.unshift(n);
      return this;
   }
   getLen() {
      return this.nums.length;
   }
   printArr() {
      console.log(this.nums);
   }
}

arr = new MyArray();
arr.addEnd(3, 4, 5, 1);
// arr.printArr();

// Reversing a string
const reverse = str => [...str].reverse().join('');
// console.log(reverse('hello'));

// Merging sorted arrays into one
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

function elementWithHighestCount(array) {
   const map = {};
   const answer = { elem: null, count: 0 };

   const elementFoundInMap = elem => Boolean(map[elem]);

   const onElementFoundInMap = elem => {
      map[elem] += 1;
      if (map[elem] > answer.count) {
         answer.elem = elem;
         answer.count = map[elem];
      }
   };

   for (elem of array) {
      if (elementFoundInMap(elem)) {
         onElementFoundInMap(elem);
         continue;
      }
      map[elem] = 1;
   }
   return answer;
}
// console.log(elementWithHighestCount([2, 4, 62, 6, 3, 3, 3, 6, 3]));

// My version
function hasCommonElem(array1, array2) {
   const mySet = new Set();
   for (elem of array1) mySet.add(elem);

   for (elem of array2) {
      if (mySet.has(elem)) return true;
      mySet.add(elem);
   }
   return false;
}
// console.log(hasCommonElem([6, 1, 4], [5, 3, 6]));

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

console.log(getPairsWithSum([4, 5], 7));
