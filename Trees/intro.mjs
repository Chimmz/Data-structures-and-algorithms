import { Queue } from '../Queues/with-linked-lists.mjs';

function Node(value) {
   this.data = value;
   this.right = null;
   this.left = null;
}

export class BinarySearchTree {
   constructor() {
      this.root = null;
   }

   insert(value) {
      const newNode = new Node(value);
      if (!this.root) {
         this.root = newNode;
         return this;
      }

      let itr = this.root;
      while (true) {
         if (value > itr.data) {
            if (itr.right) itr = itr.right;
            else {
               itr.right = newNode;
               return this;
            }
         } else {
            if (itr.left) itr = itr.left;
            else {
               itr.left = newNode;
               return this;
            }
         }
      }
   }

   lookup(value) {
      let itr = this.root;
      if (!itr) return false;

      while (itr) {
         if (itr.data === value) return true;
         if (value <= itr.data) itr = itr.left;
         else itr = itr.right;
      }
      return false;
   }

   traverseBFT() {
      const result = [];
      const queue = new Queue();
      let node = this.root;

      while (node) {
         if (node.left) queue.enqueue(node.left.data);
         if (node.right) queue.enqueue(node.right.data);
         result.push(node.data);
         node = queue.front;
      }
      console.log(result);
   }
}

const tree = new BinarySearchTree();
tree.insert(2).insert(3).insert(1);
tree.traverseBFT();

// console.log(`3 ${tree.lookup(3) ? 'is found' : 'not found'}`);

// console.log(tree);
