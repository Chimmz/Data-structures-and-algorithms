class Node {
   constructor(value) {
      this.data = value;
      this.next = null
   }
}

class LinkedList {
   constructor(data) {
      this.head = { data, next: null }
      this.tail = this.head;
      this.length = 1;
      this.print()
   }

   getNodeAt(index) {
      let node = this.head;
      for (let i = 1; i <= index; i++) node = node.next;
      return node;
   }

   destroyNode(node) {
      node.next = null;
      delete node.next;
   }

   prepend(value) {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
   }

   append(value) {
      const newNode = new Node(value);
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this.print();
   }

   insert(index, value) {
      if (index >= this.length) return this.append(value);

      const node = this.getNodeAt(index - 1);
      const successorNode = node.next;

      const newNode = new Node(value);
      node.next = newNode;
      newNode.next = successorNode;

      this.length++;
      return this.print();
   }

   remove(index) {
      if (index < 0) return;
      const node = this.getNodeAt(index - 1);
      const unWantedNode = node.next;
      const nodeAfterIndex = unWantedNode.next;

      this.destroyNode(unWantedNode);
      node.next = nodeAfterIndex

      this.length--;
      return this.print();
   }

   reverse() {
      if (!this.head.next) return this.head;
      
      let first = this.head;
      this.tail = this.head;
      let second = first.next;

      console.log('PRINTING')
      this.print()

      // while (second) {
      //    // console.log('PRINTING', first.data, second.data)
      //    [second.next] = [first];
      //    first = second;
      //    second = second.next
      // }
      // this.head.next = null;
      // this.head = first;

      // return this.print()
   }

   print() {
      const arrayForm = [];
      let itr = this.head;

      while (itr != null) {
         arrayForm.push(itr.data)
         itr = itr.next;
      }
      console.log(arrayForm)
      return this;
   }
}

const list = new LinkedList(2);

list
   .append(4)
   .prepend(21)
   .insert(1, 50)
   // .remove(2)
   .reverse();

console.log(list)


// Doubly-linked list
class TwoWayNode {
   constructor(value) {
      this.data = value;
      this.prev = null;
      this.next = null
   }
}
class DoublyLinkedList {
   constructor(value) {
      this.head = { data: value,  prev: null, next: null}
      this.tail = this.head;
      this.length = 1;
      this.print()
   }
}