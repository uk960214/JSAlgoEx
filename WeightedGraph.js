class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({node:vertex2, weight});
        this.adjacencyList[vertex2].push({node:vertex1, weight});
    }

    Dijkstras(start, end) {
        const distances = {};
        const pQueue = new PriorityQueue();
        const previous = {};
        let path = [];
        for (let v in this.adjacencyList) {
            if(v === start) {
                distances[v] = 0;
                pQueue.enqueue(v, 0);

            } else {
                distances[v] = Infinity;
                pQueue.enqueue(v, Infinity);  
            }
            previous[v] = null;
            
        }

        while(pQueue.heap.length){
            let currentV = pQueue.dequeue().val;
            if (currentV === end){
                while(previous[currentV]) {
                    path.push(currentV);
                    currentV = previous[currentV];
                }
                break;
            }

            if(currentV || distances[currentV] !== Infinity){
                for (let v of this.adjacencyList[currentV]) {
                    
                    let neighbor = v.node;
                    let weight = v.weight;

                    let d = distances[currentV] + weight;

                    if(d < distances[neighbor]) {
                        distances[neighbor] = d;
                        previous[neighbor] = currentV;
                        pQueue.enqueue(neighbor, d)
                    }
                }
                
//                 for (let n in this.adjacencyList[currentV]) {
//                     let neighbor = this.adjacencyList[currentV][n]
//                     let d = distances[currentV] + neighbor.weight;
//                     let node = neighbor.node;
//                     if(d < distances[node]) {
//                         distances[node] = d;
//                         previous[node] = currentV;
//                         pQueue.enqueue(node, d);
//                     }
//                 }
            }
        }

        return path.concat(start).reverse();       
    }
}

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
            while(child && this.heap[child].priority < this.heap[parent].priority) {
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

const g = new WeightedGraph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("F", "E", 1);

g.Dijkstras("A","E")