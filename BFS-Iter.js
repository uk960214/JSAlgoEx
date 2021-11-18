class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const root = new Node(10);

root.left = new Node(6);
root.right= new Node(5);
root.left.left = new Node(3);
root.left.right = new Node(8);
root.right.right = new Node(20);


const BFS = (root) => {
    const queue = [root];
    const vals = [];
    
    while (queue.length) {
        const current = queue[0];
        queue.shift();
        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
        vals.push(current.value);
    };
    return vals;
}