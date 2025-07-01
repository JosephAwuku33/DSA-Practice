export function prefixSum(arr: number[]): number[] {
    if (arr.length === 0) return [];
    let prefixArray: number[] = [];

    prefixArray[0] = arr[0];

    for ( let i = 1; i < arr.length; i++){
        prefixArray[i] = prefixArray[i - 1] + arr[i]; 
    }

    return prefixArray;
}