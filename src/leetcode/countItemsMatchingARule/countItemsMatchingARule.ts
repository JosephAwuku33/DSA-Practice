export function countMatches(
  items: string[][],
  ruleKey: string,
  ruleValue: string
): number {
  let countOfMatches = 0;

  for (let i = 0; i < items.length; i++) {
    let currentType = items[i][0];
    let currentColor = items[i][1];
    let currentName = items[i][2];
    if (
      (ruleKey === "type" && ruleValue === currentType) ||
      (ruleKey === "color" && ruleValue === currentColor) ||
      (ruleKey === "name" && ruleValue === currentName)
    ) {
      countOfMatches++;
    }
  }

  return countOfMatches;
}

// Improved function
export function countMatchesWithMapSolution(
  items: string[][],
  ruleKey: string,
  ruleValue: string
): number {
  const keyIndexMap: { [key: string]: number } = {
    type: 0,
    color: 1,
    name: 2,
  };

  const index = keyIndexMap[ruleKey];

  return items.filter((item) => item[index] === ruleValue).length;
}
