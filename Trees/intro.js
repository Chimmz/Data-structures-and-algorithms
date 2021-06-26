function Node(value) {
   this.data = value;
   this.right = null;
   this.left = null;
}

class BinarySearchTree {
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
            if (!itr.right) {
               itr.right = newNode;
               return this;
            }
            itr = itr.right;
         } else {
            if (!itr.left) {
               itr.left = newNode;
               return this;
            }
            itr = itr.left;
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
}

const tree = new BinarySearchTree();
tree.insert(2).insert(3).insert(1);

console.log(`3 ${tree.lookup(3) ? 'is found' : 'not found'}`);

console.log(tree);
