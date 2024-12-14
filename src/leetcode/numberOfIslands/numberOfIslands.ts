// DFS Approach
export default function numberOfIslands(grid: string[][]): number {
  let islandCount = 0;
  const rows = grid.length;
  const columns = grid[0].length;

  function dfs(row: number, col: number): void {
    // Check boundary conditions and whether the cell is water
    if (
      row < 0 ||
      col < 0 ||
      row >= rows ||
      col >= columns ||
      grid[row][col] === "0"
    )
      return;

    // Marking the current cell as visited by setting it to '0'
    grid[row][col] = "0";

    // Exploring all four directions
    dfs(row - 1, col); // Up
    dfs(row + 1, col); // Down
    dfs(row, col - 1); // Left
    dfs(row, col + 1); // Right
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (grid[i][j] === "1") {
        islandCount++; // We found a new island
        dfs(i, j);
      }
    }
  }
  return islandCount;
}

export function numberOfIslandsImplementation(grid: string[][]): number {
  let islandCount = 0;
  let rows = grid.length;
  let columns = grid[0].length;

  function dfs(row: number, column: number) {
    // Check the boundaries
    if (
      row >= rows ||
      column >= columns ||
      grid[row][column] === "0" ||
      row < 0 ||
      column < 0
    )
      return;

    // mark the current element traversed as visited
    grid[row][column] = "0";

    // recursively going through the nearby values
    dfs(row - 1, column);
    dfs(row + 1, column);
    dfs(row, column - 1);
    dfs(row, column + 1);
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (grid[i][j] === "1") {
        islandCount++;
        dfs(i, j);
      }
    }
  }

  return islandCount;
}
