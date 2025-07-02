export function commonChars(words: string[]): string[] {
  if (words.length === 0) return [];

  const minFreqMap = new Map<string, number>();

  // Initialize with the first word
  for (const char of words[0]) {
    minFreqMap.set(char, (minFreqMap.get(char) || 0) + 1);
  }

  // Compare with other words
  for (let i = 1; i < words.length; i++) {
    const currFreq = new Map<string, number>();
    for (const char of words[i]) {
      currFreq.set(char, (currFreq.get(char) || 0) + 1);
    }

    // Update min frequencies
    for (const key of minFreqMap.keys()) {
      if (currFreq.has(key)) {
        minFreqMap.set(key, Math.min(minFreqMap.get(key)!, currFreq.get(key)!));
      } else {
        minFreqMap.set(key, 0);
      }
    }
  }

  // Build result
  const result: string[] = [];
  for (const [char, count] of minFreqMap.entries()) {
    for (let i = 0; i < count; i++) {
      result.push(char);
    }
  }

  return result;
}
