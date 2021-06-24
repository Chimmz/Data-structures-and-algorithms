function Node(value) {
   this.data = value;
   this.next = null;
}

class Stack {
   constructor() {
      this.top = null;
      this.bottom = null;
      this.length = 0;
   }

   getTopElement = () => this.top.data;

   isEmpty = () => !this.top && !this.bottom && !this.length;

   push(value) {
      const newNode = new Node(value);
      if (!this.top) this.top = this.bottom = newNode;
      else {
         this.top.next = newNode;
         this.top = newNode;
      }

      this._increaseLength();
      return this.print();
   }

   pushMany(...values) {
      values.forEach(value => {
         this.push(value);
      });
   }

   pop() {
      // If stack is empty
      if (this.isEmpty()) return;
      // If one element left
      if (this.top == this.bottom) this.top = this.bottom = null;
      else {
         let itr = this.bottom;
         while (itr.next != this.top) itr = itr.next;

         this.top = itr;
         this.top.next = null;
      }

      this._reduceLength();
      return this.print();
   }

   _increaseLength() {
      this.length++;
   }
   _reduceLength() {
      this.length--;
   }

   print() {
      let itr = this.bottom;
      const array = [];

      while (itr) {
         array.push(itr.data);
         itr = itr.next;
      }
      console.log(array);
      return this;
   }
}

const stack = new Stack();
stack.push(3).push(12).push(25).pop().pop().pop();
stack.pushMany(1, 4);

console.log(stack.getTopElement());
console.log(stack);
