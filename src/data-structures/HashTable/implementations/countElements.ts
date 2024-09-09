function countElements(nums: number[]): Record<number, number> {
  const countMap: Record<number, number> = {};

  // for (const num of nums) {
  //   if (countMap[num]) {
  //     countMap[num] = countMap[num] + 1;
  //   } else {
  //     countMap[num] = 1;
  //   }
  // }

  for (let num of nums) {
    if (countMap[num]) {
      countMap[num]++;
    } else {
      countMap[num] = 1;
    }
  }

  return countMap;
}

function main() {
  const nums = [1, 2, 3, 4, 3, 2, 8, 1];

  console.log(
    `Count of elements in the array: ${JSON.stringify(countElements(nums))}`
  );
}

main();
