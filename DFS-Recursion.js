class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const root = new Node(10);

root.left = new Node(6);
root.right= new Node(15);
root.left.left = new Node(3);
root.left.right = new Node(8);
root.right.right = new Node(20);

const DSFPreOrder = (root) => {
    let visited = [];
    let current = root;

    const traverse = (n) => {
        visited.push(n.value);
        if(n.left) traverse(n.left);
        if(n.right) traverse(n.right);
    }

    traverse(current);

    return visited;
}

const DSFPostOrder = (root) => {
    let visited = [];
    let current = root;

    const traverse = (n) => {
        if(n.left) traverse(n.left);
        if(n.right) traverse(n.right);
        visited.push(n.value);
    }

    traverse(current);

    return visited;
}

const DSFInOrder = (root) => {
    let visited = [];
    let current = root;

    const traverse = (n) => {
        if(n.left) traverse(n.left);
        visited.push(n.value);
        if(n.right) traverse(n.right);
    }

    traverse(current);

    return visited;
}