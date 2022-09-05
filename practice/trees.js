function Node(value) {
   this.data = value;
   this.left = null;
   this.right = null;
   return this;
}

class Tree {
   constructor() {
      this.root = null;
   }
   insert(value) {
      if (!this.root) {
         this.root = new Node(value);
         return this;
      }

      let itr = this.root;

      while (itr) {
         if (value <= itr.data) {
            if (itr.left) itr = itr.left;
            else {
               itr.left = new Node(value);
               break;
            }
         } else {
            if (itr.right) itr = itr.right;
            else {
               itr.right = new Node(value);
               break;
            }
         }
      }
      return this;
   }

   insertRecur(node = this.root, value) {
      if (!node) {
         node = new Node(value);
         return this;
      }

      if (value <= node.data) this.insertRecur(node.left, value);
      else this.insertRecur(node.right, value);
   }

   breadFirstTraverse() {
      if (!this.root) return [];

      const queue = [];
      const arr = [];
      queue.push(this.root);

      while (queue.length) {
         let node = queue.shift();
         arr.push(node.data);

         if (node.left) queue.push(node.left);
         if (node.right) queue.push(node.right);
      }
      console.log(arr);
   }

   breadFirstSearch(query) {
      if (!this.root) return [];

      const queue = [];
      const arr = [];
      queue.push(this.root);

      while (queue.length) {
         let node = queue.shift();
         if (node.data === query) return true;

         if (node.left) queue.push(node.left);
         if (node.right) queue.push(node.right);
      }
      return false;
   }

   depthFirstPreorder() {
      const stack = [];
      let lptr = this.root;
      const arr = [];

      while (lptr) {
         arr.push(lptr.data);
         stack.push(lptr);
         lptr = lptr.left;
      }
      // console.log(stack);
      while (stack.length) {
         let rptr = stack.pop();
         while (rptr) {
            stack.push(rptr);
            rptr = rptr.right;
         }
      }
   }
}

const tree = new Tree();
// tree.insert(7).insert(5).insert(1).insert(6).insert(16).insert(10).insert(20);
tree.insertRecur(4);
console.log(tree);
// .breadFirstTraverse();
// tree.depthFirstPreorder();
// console.log(`${query} is ${tree.breadFirstSearch(10) ? 'found' : 'not found'}`);
