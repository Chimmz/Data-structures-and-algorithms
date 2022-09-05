// import { Queue } from '../Queues/with-linked-lists.mjs';

function Node(value) {
   this.data = value;
   this.left = null;
   this.right = null;
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

   BFSLoop() {
      if (!this.root) return;

      const list = [];
      const queue = [];
      queue.push(this.root);

      while (queue.length) {
         let currentNode = queue.shift();
         list.push(currentNode.data);

         if (currentNode.left) queue.push(currentNode.left);
         if (currentNode.right) queue.push(currentNode.right);
      }
      console.log(list);
   }

   BFSRecursive(queue, list) {
      if (!queue.length) return list;

      let currentNode = queue.shift();
      list.push(currentNode.data);

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);

      return this.BFSRecursive(queue, list);
   }

   DFSInOrder() {
      return traverseInOrder(this.root, []);
   }
   DFSPreOrder() {
      return traversePreOrder(this.root, []);
   }
   DFSPostOrder() {
      return traversePostOrder(this.root, []);
   }
}

function traverseInOrder(node, list) {
   // console.log(node.data);
   if (node.left) traverseInOrder(node.left, list);

   list.push(node.data);
   if (node.right) traverseInOrder(node.right, list);
   return list;
}

function traversePreOrder(node, list) {
   // console.log(node.data);
   list.push(node.data);

   if (node.left) traversePreOrder(node.left, list);
   if (node.right) traversePreOrder(node.right, list);
   return list;
}

function traversePostOrder(node, list) {
   if (node.left) traversePostOrder(node.left, list);
   if (node.right) traversePostOrder(node.right, list);
   list.push(node.data);

   return list;
}

const tree = new BinarySearchTree();
tree.insert(9).insert(4).insert(6).insert(20).insert(170).insert(15).insert(1);

// const list = tree.BFSRecursive([tree.root], []);
// console.log(list);

console.log(tree.DFSInOrder());
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());
// console.log(`3 ${tree.lookup(3) ? 'is found' : 'not found'}`);

console.log(tree);
