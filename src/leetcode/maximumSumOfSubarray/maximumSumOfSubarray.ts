export function maximumSumOfSubarray(nums: number[], k: number): number {
    let maxSum = 0;

    let windowSum = 0;

    // let's find the sum of the first k values
    for ( let i = 0; i < k; i++){
        maxSum += nums[i];
    }

    maxSum = windowSum;

    for ( let j = k; j < nums.length; j++ ) {
        windowSum += nums[j] - nums[j - k];
        maxSum = Math.max(maxSum, windowSum)
    }
    
    return maxSum;
}

