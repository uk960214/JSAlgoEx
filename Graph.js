class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(x => x !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(x => x !== vertex1);
    }

    removeVertex(vertex) {
        let loopArr = this.adjacencyList[vertex]
        loopArr.forEach(x => {
            this.removeEdge(vertex, x);
        });
        delete this.adjacencyList[vertex];
    }

    DFSRecursive(vertex) {
        const result = [];
        const visited = {};
        const DFS = (vertex) => {
            if(!this.adjacencyList[vertex].length) return;
            visited[vertex] = true;
            result.push(vertex);
            for (let v of this.adjacencyList[vertex]) {
                if(!visited[v]) DFS(v);
            }
        }
        DFS(vertex);
        return result;
    }

    DFSIterative(vertex) {
        let stack = [];
        let result = [];
        let visited = {};
        stack.push(vertex);

        let v;
        visited[vertex] = true;
        while(stack.length) {
            v = stack.pop();
            result.push(v);    
            for(let n of this.adjacencyList[v]) {
                if(!visited[n]) {
                    visited[n] = true;
                    stack.push(n);
                }
            }
        }
        return result;
    }

    BFS(vertex) {
        let queue = [vertex];
        let result = [];
        let visited = {};

        let v;
        visited[vertex] = true;
        while(queue.length) {
            v = queue.shift();
            result.push(v);
            for(let n of this.adjacencyList[v]) {
                if(!visited[n]) {
                    visited[n] = true;
                    queue.push(n);
                }
            }
        }
        return result;

    }
}


let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
