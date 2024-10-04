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

export default validParenthesis;
