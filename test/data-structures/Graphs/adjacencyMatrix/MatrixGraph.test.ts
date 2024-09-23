import { describe, it, beforeEach , expect } from 'vitest';
import MatrixGraph from '../../../../src/data-structures/Graphs/adjacencyMatrix/Graph';

describe('MatrixGraph', () => {
    let graph: MatrixGraph;

    beforeEach(() => {
        graph = new MatrixGraph(5); // Initialize a graph with 5 vertices
    });

    it('should add edges to the graph', () => {
        graph.addEdge(0, 1);
        graph.addEdge(0, 2);
        graph.addEdge(1, 3);
        graph.addEdge(2, 4);
        graph.addEdge(3, 4);
        graph.displayMatrix();
    });
});
