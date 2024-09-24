class MatrixGraph {
    adjacencyMatrix: number[][];

    constructor(vertices: number){
        this.adjacencyMatrix = Array.from({length: vertices}, () => Array(vertices).fill(0));
    }

    addEdge(vertex1: number, vertex2: number){
        this.adjacencyMatrix[vertex1][vertex2] = 1;
        this.adjacencyMatrix[vertex2][vertex1] = 1; 
    }

    removeEdge(vertex1: number, vertex2: number){
        if ( this.adjacencyMatrix[vertex1][vertex2] === 1){
            this.adjacencyMatrix[vertex1][vertex2] = 0;
            this.adjacencyMatrix[vertex2][vertex1] = 0;
        }
    }

    displayMatrix(){
        for ( let row of this.adjacencyMatrix){
            console.log(row.join(" "));
        }
    }


}

export default MatrixGraph;