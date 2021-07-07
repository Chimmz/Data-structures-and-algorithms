function bubbleSort(array) {
   const len = array.length;
   for (let i = 0; i < len / 2; ++i) {
      for (let j = 0; j < len; ++j) {
         let [curr, next] = [array[j], array[j + 1]];
         if (curr > next) [array[j], array[j + 1]] = [next, curr];
      }
   }
   return array;
}

function insertionSort(array) {
   for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {}
   }
}

function mergeSort(array) {
   if (array.length === 1) return array;
   const middle = Math.ceil((array.length - 1) / 2);
   const left = array.slice(0, middle);
   const right = array.slice(middle);

   return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
   const result = [];
   let [leftIndex, rightIndex] = [0, 0];
   while (leftIndex < left.length && rightIndex < right.length) {
      let [leftItem, rightItem] = [left[leftIndex], right[rightIndex]];
      if (leftItem <= rightItem) {
         result.push(leftItem);
         ++leftIndex;
      } else {
         result.push(rightItem);
         ++rightIndex;
      }
   }
   return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

const array = [4, 2, 7, 5, 6];
// console.log(array);
// console.log(bubbleSort(array));
// console.log(selectionSort(array));
console.log(mergeSort(array));
