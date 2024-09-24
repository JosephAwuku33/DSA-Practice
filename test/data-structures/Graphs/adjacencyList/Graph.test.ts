import { beforeEach, it, describe, expect } from "vitest";
import Graph from "../../../../src/data-structures/Graphs/adjacencyList/Graph";

describe("Graph implemented using Adjacency List", () => {
  let graph: Graph;

  beforeEach(() => {
    graph = new Graph();
  });

  it("should add a vertex", () => {
    graph.addVertex(1);
    expect(graph.adjacencyList.get(1)).toEqual([]);
  });

  it("should add an edge between two vertices", () => {
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addEdge(1, 2);
    expect(graph.adjacencyList.get(1)).toEqual([2]);
    expect(graph.adjacencyList.get(2)).toEqual([1]);
  });



  it("should traverse the graph using DFS", () => {
    graph.addVertex(0);
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);
    graph.addVertex(4);
    graph.addVertex(5);
    graph.addVertex(6);

    graph.addEdge(0, 1);
    graph.addEdge(0, 2);
    graph.addEdge(1, 2);
    graph.addEdge(1, 3);
    graph.addEdge(2, 4);
    graph.addEdge(3, 4);
    graph.addEdge(4, 5);
    graph.addEdge(5, 6);

    console.log("DFS traversal:");
    graph.dfs(0);
  });

  it("should traverse the graph using BFS", () => {
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);
    graph.addVertex(4);
    graph.addVertex(5);

    graph.addEdge(1, 2);
    graph.addEdge(1, 3);
    graph.addEdge(2, 4);
    graph.addEdge(3, 5);

    console.log(`Graph Traversal using Breadth First Search`);
    graph.bfs(1); // Starting BFS from node 1
  });

  it("should display the graph correctly", () => {
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addEdge(1, 2);
    console.log(graph.displayGraph());
  });
});
