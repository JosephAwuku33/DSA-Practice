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

    removeEdge(vertex1: number, vertex2: number){
        if ( this.adjacencyList.has(vertex1)){
            this.adjacencyList.set(vertex1, this.adjacencyList.get(vertex1)!.filter(vertex => vertex !== vertex2));
        }

        if ( this.adjacencyList.has(vertex2)){
            this.adjacencyList.set(vertex2, this.adjacencyList.get(vertex2)!.filter(vertex => vertex !== vertex1));
        }
    }

    dfs(start: number){
        const visited = new Set<number>();

        const dfsRecursive = (vertex: number) => {
            if (visited.has(vertex)) return;

            console.log(vertex); // Print the node being visited
            visited.add(vertex);

            const neighbors = this.adjacencyList.get(vertex);

            if ( neighbors ){
                for ( const neighbor of neighbors) {
                    dfsRecursive(neighbor);
                }
            }
        }

        dfsRecursive(start);
    }


    bfs(start: number ){
        const visited = new Set<number>();
        const queue: number[] = [start];

        visited.add(start);

        while ( queue.length > 0){
            const vertex = queue.shift();
            console.log( vertex ); // Print the value of the vertex

            const neighbors = this.adjacencyList.get(vertex as number);

            if ( neighbors ) {
                for ( const neighbor of neighbors ) {
                    if ( !visited.has(neighbor)){
                        visited.add(neighbor);
                        queue.push(neighbor)
                    }
                }
            }
        }
    }

    displayGraph(){
        for ( const [vertex, neighbors] of this.adjacencyList) {
            console.log(`${vertex} -> ${neighbors.join(', ')}`)
        }
    }
}

export default Graph;