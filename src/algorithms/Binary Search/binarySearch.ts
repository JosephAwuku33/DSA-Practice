export function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;

    while ( left <= right){

        let mid = Math.floor((left + right)/ 2);

        if ( arr[mid] === target){
            return mid;
        } else if ( arr[mid] < target){
            left = mid + 1; // Target is in the right half
        } else {
            right = mid - 1; // Target is in the left half
        }
    }

    return -1; // The target wasn't found
}