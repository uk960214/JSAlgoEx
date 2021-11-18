class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    enqueue(v, p) {
        let newNode = new Node(v, p);
        this.heap.push(newNode);
        let child = this.heap.length - 1;
        let parent = Math.floor((child - 1) / 2);

        if(this.heap.length > 1) {
            while(this.heap[child].priority < this.heap[parent].priority) {
                let temp = this.heap[child];
                this.heap[child] = this.heap[parent];
                this.heap[parent] = temp;
                child = parent;
                parent = Math.floor((child - 1) / 2);
            }   
        }
        
        return this.heap;
    }

    dequeue() {
        let toExtract = this.heap[0];
        (this.heap.length > 1) ? this.heap[0] = this.heap.pop() : this.heap.pop();

        let parentIdx = 0;

        while(true) {
            let childIdxL = 2 * parentIdx + 1;
            let childIdxR = 2 * parentIdx + 2;
            let left, right;
            let swap = null;

            if(childIdxL < this.heap.length) {
                left = this.heap[childIdxL];
                if(left.priority < this.heap[parentIdx].priority) {
                    swap = childIdxL;
                }
            }

            if(childIdxR < this.heap.length) {
                right = this.heap[childIdxR];
                if(right.priority < this.heap[parentIdx].priority) {
                    swap = (swap && this.heap[swap].priority < right.priority) ? swap : childIdxR;
                }
            }

            if(swap === null) break;
            let current = this.heap[parentIdx]
            this.heap[parentIdx] = this.heap[swap];
            this.heap[swap] = current;

            parentIdx = swap;
        }

        return toExtract;
    }
}

const pQueue = new PriorityQueue();

pQueue.enqueue("beef", 1);

pQueue.enqueue("curry", 6);
pQueue.enqueue("wine", 2);
pQueue.enqueue("pork", 4);
pQueue.enqueue("chicken", 5);
