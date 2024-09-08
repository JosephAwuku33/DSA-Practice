// O(n^2)
function longestConsecutiveSequence(nums: number[]): number {
  let count = 0;
  const sortedArray = nums.sort();

  for (let i = 0; i < sortedArray.length; i++) {
    for (let j = i + 1; j < sortedArray.length; j++) {
      if (sortedArray[j] - sortedArray[i] === 1) {
        count = count + 1;
      } else if (sortedArray[j] - sortedArray[i] === 0) {
        count = count - 1;
      }
    }
  }

  return count;
}

function longestConsecutiveSequenceInShortTime(nums: number[]): number {
  if (nums.length === 0) return 0;

  // Sort the array to bring consecutive numbers next to each other
  nums.sort((a, b) => a - b);

  let maxCount = 1;
  let currentCount = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1] + 1) {
      // Found consecutive numbers
      currentCount++;
    } else if (nums[i] !== nums[i - 1]) {
      // Reset currentCount if the sequence breaks
      currentCount = 1;
    }
    // Update maxCount if we find a longer sequence
    maxCount = Math.max(maxCount, currentCount);
  }

  return maxCount;
}

export { longestConsecutiveSequence, longestConsecutiveSequenceInShortTime };
