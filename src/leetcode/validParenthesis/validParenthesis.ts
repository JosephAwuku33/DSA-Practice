function validParenthesis(s: string): boolean {
  const parenthesisMap = new Map<string, string>();
  parenthesisMap.set("}", "{");
  parenthesisMap.set(")", "(");
  parenthesisMap.set("]", "[");

  let stack: string[] = [];

  for (let char of s) {
    if (parenthesisMap.has(char)) {
      const pop = stack.pop();
      if (parenthesisMap.get(char) === pop) {
        continue; // Matched parentheses
      } else {
        return false;
      }
    } else {
      stack.push(char); // Push opening parentheses to the stack
    }
  }

  // If stack is empty, it means all parentheses were matched
  return stack.length === 0;
}

function isValidAsAParanthesis(s: string): boolean {
  let isValid = false;

  const closingToOpening = new Map<string, string>();
  closingToOpening.set("}", "{");
  closingToOpening.set(")", "(");
  closingToOpening.set("]", "[");

  let stack: string[] = [];
  for (let character of s) {
    if (closingToOpening.has(character)) {
      const pop = stack.pop();

      if (closingToOpening.get(character) !== pop) {
        return false;
      }
    } else {
      stack.push(character);
    }
  }

  return stack.length === 0;
}

export default validParenthesis;
