const arr = ['spoon'];

const findSpoon = function () {
   const t0 = window.performance.now();
   const spoon = arr.find(item => item === 'spoon');
   const t1 = window.performance.now();

   console.log(`Took ${t1 - t0} to find`);
   return spoon;
};
// console.log("Spoon: ", findSpoon());

const isHavingCommon1 = function (array1, array2) {
   return array1.some(elem1 => array2.includes(elem1)); // 0(n*n)
};

const isHavingCommon2 = function (array1, array2) {   // 0(a + b)
   const map = {};
   const existsCommon = false;

   array1.forEach(elem => {
      if (!map[elem]) map[elem] = true;
   });
   array2.forEach(elem => {
      if (map[elem]) existsCommon = true;
   });
   return existsCommon;
};
// console.log('isHavingCommon2: ', isHavingCommon2([1, 2, 3], [4, 4, 5]));

const hasPairsWithSum = function (array, sum) {
   const set = new Set();
   for (let elem of array) {
      if (set.has(elem)) return true;
      set.add(sum - elem);
   }
   return false;
};
// console.log(hasPairsWithSum([1, 4, 2, 6], 5));
