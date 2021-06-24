function Node(value) {
   this.data = value;
   this.next = null;
}

class Queue {
   constructor() {
      this.front = null;
      this.back = null;
      this.length = 0;
   }

   enqueue(value) {
      const newNode = new Node(value);
      if (this.isEmpty()) this.front = this.back = newNode;
      else {
         newNode.next = this.back;
         this.back = newNode;
      }
      this._increaseLength();
      return this.print();
   }

   dequeue() {
      console.log('In dequeue');
      if (this.isEmpty()) return this.print();
      if (this.front == this.back) this.front = this.back = null;
      else {
         let itr = this.back;
         while (itr.next != this.front) itr = itr.next;
         this.front = itr;
         this.front.next = null;
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

   isEmpty = () => !this.front && !this.back && !this.length;

   print() {
      let itr = this.back;
      const array = [];

      while (itr) {
         array.push(itr.data);
         itr = itr.next;
      }
      console.log(array);
      return this;
   }
}

const queue = new Queue();
queue.enqueue(5).enqueue(8).enqueue(18).dequeue().dequeue().dequeue().dequeue();

console.log(queue);
