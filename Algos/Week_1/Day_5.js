/* 
    QUICK SORT
    Visualization:
    https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
    Create a function that uses yesterday’s partition to fully sort an array
    in-place.
    Unstable sort.
    
    Time Complexity
        - Best: O(n log(n)) linearithmic.
        - Average: O(n log(n)) linearithmic.
        - Worst: O(n^2) quadratic.
    
    Space: O(1) constant.
    Params: nums, left, right
    - left and right are indexes, for now, left will be 0, and right will be the
        last idx.
    - later these params will be used to specify a sub section of the array to
        partition.
    Steps:
        - start by partitioning the full array
            (use the previously built partition algo).
        - then partition the left side of the array
            (left of the returned partition idx) and the right side
            (right of the returned partition idx), recursively.
*/
const { performance } = require('perf_hooks');
function partition(nums, left=0, right=nums.length-1){
    let pivot = nums[right]; 
    let pIdx = left; 
    for(let i = left; i < right; i++){ 
        if(nums[i] < pivot){ 
            [nums[i], nums[pIdx]] = [nums[pIdx], nums[i]];
            pIdx++; 
        }
    }
    [nums[pIdx], nums[right]] = [nums[right], nums[pIdx]];
    return pIdx; 
}

function quickSort(nums, left=0, right=nums.length-1){
    if(left >= right){ // if left and right are at the same spot, (or somehow overlapped)
        return nums; // then we'll just return the array, because there's nothing to partition
    }

    // we need to call partition, which will rearrange the array such that
    // every value to the left of some value is less than it, and everything
    // to the right greater than it. partition will return the index that pivot
    // value lies at
    const pivot = partition(nums, left, right); 

    quickSort(nums, left, pivot-1); // then, we want to recursively repeat the process on the left side of that pivot index
    return quickSort(nums, pivot+1, right); // and then on the right side
}

