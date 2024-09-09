function diagonalDifference(arr: number[][]): number {
  let primaryDiagonalSum = 0;
  let secondaryDiagonalSum = 0;

  for ( let i = 0; i < arr.length; i++){
    primaryDiagonalSum += arr[i][i];
    secondaryDiagonalSum += arr[i][arr.length - i - 1];
  }

  return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
}


export default diagonalDifference;