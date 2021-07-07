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
