class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const newNode = new Node(val)
        if (!this.root) this.root = newNode;
        else {
            let compare = this.root
            while(true) {
                if (compare.value > val) {
                    if(compare.left) compare = compare.left;
                    else {
                        compare.left = newNode;
                        break;
                    }
                } else if (compare.value < val) {
                    if(compare.right) compare = compare.right;
                    else {
                        compare.right = newNode;
                        break
                    }
                } else break;
            }
        }
        return this;
    }

    find(val) {
        let compare = this.root;
        let found = false;
        while(compare && !found) {
            if (compare.value > val) compare = compare.left
            else if (compare.value < val) compare = compare.right 
            else found = true;
        } 
        return found ? compare : found;
    }
}

let tree = new BinarySearchTree();
tree.root = new Node(10);