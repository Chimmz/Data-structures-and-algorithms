function Node(value) {
   this.data = value;
   this.next = null;
}

class LinkedList {
   constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
   }

   _hasOnlyOneElement = () => this.head === this.tail;
   _increaseLength() {
      this.length++;
   }
   _reduceLength() {
      this.length--;
   }
   _getNodeAt(index) {
      let node = this.head;
      for (let i = 1; i <= index; i++) node = node.next;
      return node;
   }

   isEmpty = () => !this.head && !this.length;

   append(value) {
      const newNode = new Node(value);
      if (this.isEmpty()) {
         this.head = this.tail = newNode;
      } else {
         this.tail.next = newNode;
         this.tail = newNode;
      }
      this._increaseLength();
      return this._print();
   }

   prepend(value) {
      const newNode = new Node(value);
      if (this.isEmpty()) {
         this.head = this.tail = newNode;
      } else {
         newNode.next = this.head;
         this.head = newNode;
      }
      this._increaseLength();
      return this._print();
   }

   pop() {
      if (this.isEmpty()) return this._print();
      if (this._hasOnlyOneElement()) this.head = this.tail = null;
      else {
         let itr = this.head;
         while (itr.next != this.tail) itr = itr.next;

         this.tail = itr;
         this.tail.next = null;
      }
      this._reduceLength();
      return this._print();
   }

   popHead() {
      if (this.isEmpty()) return this._print();
      if (this._hasOnlyOneElement()) this.head = this.tail = null;
      else this.head = this.head.next;

      this._reduceLength();
      return this._print();
   }

   insert(index, value) {
      if (index < 0) return this._print();
      if (index === 0) return this.prepend(value);
      if (index >= this.length) return this.append(value);

      const newNode = new Node(value);
      const node = this._getNodeAt(index - 1);
      const nextNode = node.next;

      node.next = newNode;
      newNode.next = nextNode;

      this._increaseLength();
      return this._print();
   }

   remove(index) {
      if (index < 0) return this._print();
      if (index >= this.length) return this.pop();

      const node = this._getNodeAt(index - 1);
      const nextNode = node.next;
      node.next = nextNode.next;

      this._reduceLength();
      return this._print();
   }

   reverse() {
      let first = null;
      let second = this.head;

      while (second) {
         const third = second.next;
         second.next = first;
         [first, second] = [second, third];
      }
      [this.head, this.tail] = [this.tail, this.head];

      return this._print();
   }

   _print() {
      const array = [];
      let itr = this.head;

      while (itr != null) {
         array.push(itr.data);
         itr = itr.next;
      }
      console.log(array);
      return this;
   }
}

const list = new LinkedList();

list
   .append(4)
   .append(8)
   .append(30)
   .insert(2, 27)
   // .remove(1)
   .reverse()
   .insert(0, 51);

console.log('\n', list);
