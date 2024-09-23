import { beforeEach, it, describe, expect } from "vitest";
import Graph from "../../../../src/data-structures/Graphs/adjacencyList/Graph";

    describe('Graph implemented using Adjacency List', () => {
        let graph: Graph;

        beforeEach(() => {
            graph = new Graph();
        });

        it('should add a vertex', () => {
            graph.addVertex(1);
            expect(graph.adjacencyList.get(1)).toEqual([]);
        });

        it('should add an edge between two vertices', () => {
            graph.addVertex(1);
            graph.addVertex(2);
            graph.addEdge(1, 2);
            expect(graph.adjacencyList.get(1)).toEqual([2]);
            expect(graph.adjacencyList.get(2)).toEqual([1]);
        });

        // it('should not add an edge if one of the vertices does not exist', () => {
        //     graph.addVertex(1);
        //     graph.addEdge(1, 2);
        //     expect(graph.adjacencyList.get(1)).toEqual([]);
        //     expect(graph.adjacencyList.has(2)).toBe(false);
        // });

        it('should display the graph correctly', () => {
            graph.addVertex(1);
            graph.addVertex(2);
            graph.addEdge(1, 2);
            console.log(graph.displayGraph());    
        });
    });
