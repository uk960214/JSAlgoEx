class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        let newNode = new Node(val)
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.last.next = newNode;
            this.last = newNode;
        }
        
        return ++this.size;
    }

    dequeue() {
        if(!this.first) return null;
        let toPop = this.first;
        if (this.size === 1) {
            this.last =null
        } 
        this.first = toPop.next;
        this.size--;

        return toPop.val;
    }
}