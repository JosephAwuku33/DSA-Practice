export function sortColors(nums: number[]): number[] {
    let left = 0;
    let right = nums.length - 1;
    let current = 0;
    

    while ( current <= right ) {
        if ( nums[current] === 0) {
            [nums[current], nums[left]] = [nums[left], nums[current]];
            left++;
            current++
        } else if ( nums[current] === 2) {
            [nums[current], nums[right]] = [nums[right], nums[current]];
            right--;
        } else {
            current++;
        }
    }

    return nums;
}