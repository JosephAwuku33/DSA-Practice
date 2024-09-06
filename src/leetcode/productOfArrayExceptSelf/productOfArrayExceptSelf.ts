function productOfArrayExceptSelf(nums: number[]): number[]{
    const array: Array<number> = [];
    let product = 1;

    // solve prefix products
    for ( let i = 0; i < nums.length; i++){
        array[i] = product;
        product *= nums[i];
    }

    product = 1;

    // solve postfix products

    for ( let i = nums.length - 1; i >= 0; i--){
        array[i] *= product;
        product *= nums[i];
    }


    return array;
}

function productOfArrayExceptSelfTwoPointers(nums: number[]): number[] {
    const n = nums.length;

    let result: number[] = new Array(n).fill(1);

    let leftProduct = 1;
    let rightProduct = 1;

    for ( let i = 0; i < n; i++){
        result[i] *= leftProduct;
        leftProduct *= nums[i];
    }

    for ( let i = n - 1; i >= 0; i--){
        result[i] *= rightProduct;
        rightProduct *= nums[i]
    }


    return result;
}

export {
    productOfArrayExceptSelf,
    productOfArrayExceptSelfTwoPointers};