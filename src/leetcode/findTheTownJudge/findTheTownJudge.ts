export function findTheTownJudge(n: number, trust: number[][]): number {
  let townJudgeLabel = 0;
  let trustMap = new Map<number, number>();
  let trustedByMap = new Map<number, number>();

  for (let i = 1; i <= n; i++) {
    trustMap.set(i, 0);
    trustedByMap.set(i, 0);
  }

  for (let [a, b] of trust) {
    trustMap.set(a, (trustMap.get(a) || 0) + 1);
    trustedByMap.set(b, (trustedByMap.get(b) || 0) + 1);
  }

  for (let i = 1; i <= n; i++) {
    if ( trustMap.get(i) === 0 && trustedByMap.get(i) === n - 1){
        townJudgeLabel = i;
        return townJudgeLabel;
    }
  }

  return -1;
}
