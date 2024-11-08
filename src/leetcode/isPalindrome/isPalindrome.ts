export function isPalindrome(s: string): boolean {
    if (s.length === 0) return false;

    // filter the string of unnecessary characters like symbols
    const filteredString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Add return statement to check if it's a palindrome
    return filteredString === filteredString.split('').reverse().join('');
}