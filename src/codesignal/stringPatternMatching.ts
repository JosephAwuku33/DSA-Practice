function checkIfSourceMatchesWithPattern(pattern: string, sourceSub: string[]): boolean {
    if (pattern.length !== sourceSub.length) return false;

    const vowels = new Set(["a", "e", "i", "o", "u"]);

    for (let i = 0; i < sourceSub.length; i++) {
        const isVowel = vowels.has(sourceSub[i]);
        const expected = pattern[i] === "0";

        // Compare current character type with expected type
        if (isVowel !== expected) {
            return false;
        }
    }

    return true;
}

export function solution(pattern: string, source: string): number {
    let maxCount = 0;

    // Slide over source and check substrings of length pattern.length
    for (let i = 0; i <= source.length - pattern.length; i++) {
        const substring = source.slice(i, i + pattern.length).split('');
        if (checkIfSourceMatchesWithPattern(pattern, substring)) {
            maxCount++;
        }
    }

    return maxCount;
}
