class MaxBinaryHeap {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        let child = this.heap.length - 1;
        let parent = Math.floor((child - 1) / 2);
        while(this.heap[child] > this.heap[parent]) {
            let temp = this.heap[child];
            this.heap[child] = this.heap[parent];
            this.heap[parent] = temp;
            child = parent;
            parent = Math.floor((child - 1) / 2)
        }
        return this.heap
    }

    extractMax() {
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
                if(left > this.heap[parentIdx]) {
                    swap = childIdxL;
                }
            }

            if(childIdxR < this.heap.length) {
                right = this.heap[childIdxR];
                if(right > this.heap[parentIdx]) {
                    swap = (swap && this.heap[swap] > right) ? swap : childIdxR;
                }
            }

            if(swap === null) break;
            let current = this.heap[parentIdx]
            this.heap[parentIdx] = this.heap[swap];
            this.heap[swap] = current;

            parentIdx = swap;

// does not work with last two.. why?

//             if (this.heap[childIdxL] > this.heap[childIdxR]) {
//                 if(this.heap[childIdxL] > this.heap[parentIdx]) {
//                     let temp = this.heap[parentIdx];
//                     this.heap[parentIdx] = this.heap[childIdxL];
//                     this.heap[childIdxL] = temp;
//                     parentIdx = childIdxL;
//                 } else {
//                     break;
//                 }
//             } else {
//                 if(this.heap[childIdxR] > this.heap[parentIdx]) {
//                     let temp = this.heap[parentIdx];
//                     this.heap[parentIdx] = this.heap[childIdxR];
//                     this.heap[childIdxR] = temp;
//                     parentIdx = childIdxR;
//                 } else {
//                     break;
//                 }
//             }
        }

        return toExtract;
    }
}

const maxHeap = new MaxBinaryHeap()

maxHeap.insert(41);
maxHeap.insert(39);
maxHeap.insert(33);
maxHeap.insert(18);
maxHeap.insert(27);
maxHeap.insert(12);
maxHeap.insert(55);
