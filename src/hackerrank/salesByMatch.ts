// The function is supposed to return the number of pairs of socks
function salesByMatch(n: number, ar: number[]): number {
  let numberOfPairs = 0;
  const frequencyMap = new Map<number, number>();

  for (let sock of ar) {
    if (frequencyMap.has(sock)) {
      frequencyMap.set(sock, frequencyMap.get(sock)! + 1);
    } else {
      frequencyMap.set(sock, 1);
    }
  }

  for (let sock of frequencyMap.keys()) {
    if (frequencyMap.get(sock)! === 2) {
      numberOfPairs = numberOfPairs + 1;
    } else if (
      frequencyMap.get(sock)! > 2 &&
      frequencyMap.get(sock)! % 2 == 0
    ) {
      numberOfPairs += frequencyMap.get(sock)! / 2;
    } else if (
      frequencyMap.get(sock)! > 2 &&
      frequencyMap.get(sock)! % 2 !== 0
    ) {
        numberOfPairs += Math.floor(frequencyMap.get(sock)! / 2);
    }
  }

  return numberOfPairs;
}


export default salesByMatch;