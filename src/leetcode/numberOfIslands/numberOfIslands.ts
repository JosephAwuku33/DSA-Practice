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
