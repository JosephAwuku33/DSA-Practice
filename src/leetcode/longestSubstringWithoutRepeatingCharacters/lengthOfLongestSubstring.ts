export function lengthOfLongestSubstring(s: string): number {
    const charSet = new Set();
    let left = 0;
    let answer = 0;

    for ( let right = 0; right < s.length; right++){
        while ( charSet.has(s[right])){
            charSet.delete(s[left]);
            left++
        }

        charSet.add(s[right]);
        answer = Math.max(answer, charSet.size);
    }

    return answer
}