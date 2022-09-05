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

   getTop = () => this.top.data;

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
      values.forEach(value => this.push(value));
   }

   pop() {
      if (this.isEmpty()) return;
      // If one element left
      if (this.top == this.bottom) this.top = this.bottom = null;
      else {
         let itr = this.bottom;
         const nodeToPop = this.top;

         while (itr.next != this.top) itr = itr.next;
         this.top = itr;
         this.top.next = null;

         return nodeToPop;
      }

      this._reduceLength();
   }
   // To reorder from L1 -> L2 -> L3 -> L(n-1) -> ... -> L(n)
   // into L1 -> L(n) -> L2 -> L(n-2) -> L3 -> L(n-3) -> ...
   reOrder() {
      const middleIndex =
         this.length % 2 == 0 ? this.length / 2 : Math.floor(this.length / 2);

      let middleNode = this.bottom;

      for (let i = 1; i <= middleIndex; i++) middleNode = middleNode.next;
      // console.log('middleNode: ', middleNode);
      let itr = this.bottom;

      while (this.top != middleNode) {
         let nextNode = itr.next;
         let lastNode = this.pop();

         lastNode.next = nextNode;
         itr.next = lastNode;
         itr = nextNode;
      }
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
// stack.push(2).push(4).push(1).push(3).push(5)
stack.pushMany(2, 9, 17, 4, 1, 6);
console.log(stack);
// console.log(stack.pop());
stack.reOrder();
stack.print();
