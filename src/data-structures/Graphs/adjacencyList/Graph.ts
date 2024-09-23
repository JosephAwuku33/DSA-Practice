class Graph {
    adjacencyList: Map<number, number[]>;


    constructor(){
        this.adjacencyList = new Map();
    }

    addVertex(vertex: number) {
        if ( !this.adjacencyList.has(vertex)){
            this.adjacencyList.set(vertex, []);
        }

        
    }

    addEdge(vertex1: number, vertex2: number){
        if ( this.adjacencyList.has(vertex1)){
            this.adjacencyList.get(vertex1)?.push(vertex2);
        }

        if ( this.adjacencyList.has(vertex2)){
            this.adjacencyList.get(vertex2)?.push(vertex1);
        }
    }

    displayGraph(){
        for ( const [vertex, neighbors] of this.adjacencyList) {
            console.log(`${vertex} -> ${neighbors.join(', ')}`)
        }
    }
}

export default Graph;