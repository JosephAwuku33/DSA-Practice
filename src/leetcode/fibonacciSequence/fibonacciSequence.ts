export function fibonacciValue(n: number): number {
  if (n <= 1) return n;

  return fibonacciValue(n - 1) + fibonacciValue(n - 2);
}

// recursive solution with memoization
export function fibonacciMemo(n: number): number {
  if (n <= 1) return n;

  const memo = new Map<number, number>();

  if (memo.has(n)) return memo.get(n)!;

  const result = fibonacciMemo(n - 1) + fibonacciMemo(n - 2);

  memo.set(n, result);
  return result;
}

// Iterative with Tabulation
export function fibonacciTabulation(n: number): number {
  if ( n <= 1) return n;

  const dp: number[] = [0, 1];
  for ( let i = 2; i <= n; i++){
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}