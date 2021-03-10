/* 
    MERGE SORT
    Stable sort.
    Visualization:
    https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
    Time Complexity
        - Best case: O(n log(n)) linearithmic.
        - Average case: O(n log(n)) linearithmic.
        - Worst case: O(n log(n)) linearithmic.
    Space: O(n) linear
    steps:
        1. create a merge function to merge two already sorted arrays into a single
            sorted array.
        - you do NOT need to work in place, ok to use a new array
    EXAMPLE: merge([1,4,5], [2,3,6]) will return [1,2,3,4,5,6]
*/
function merge(nums1, nums2){
    var merged = []; // this is where we'll be putting our merged array
    var i1 = 0, i2 = 0; // indexes for iterating through both arrays
    while(i1 < nums1.length && i2 < nums2.length){ // while i1 and i2 are both less than their respective arrays lengths
        if(nums1[i1] < nums2[i2]){ // if the value in nums1 is smaller than the value in nums2 that their respective indexes are at
            merged.push(nums1[i1]); // than add it to our merged array
            i1++; // and increment i1
        } else if(nums1[i1] > nums2[i2]){ // otherwise, if the value in nums1 is LARGER than the value in nums2 at their respective indexes
            merged.push(nums2[i2]); // than add the value in nums2 to the merged array
            i2++; // and increment i2
        } else { // if neither of those options are the case, then the values at i1 and i2 are the same in their respective arrays
            merged.push(nums1[i1]);
            merged.push(nums2[i2]); // so add them both
            i1++; // and increment
            i2++; // both indexes
        }
    }
    // now, there's no guarantee that the previous while loop touched every single
    // value in BOTH arrays. For example, if we called merge([1,4,5], [2,3]), nums2
    // would be finished before we even added 4 from nums1.
    // so
    while(i1 < nums1.length){ // until everything's moved from nums1
        merged.push(nums1[i1]); // add it
        i1++; // and increment i1
    }

    // due to the nature of our first while loop, we can't possibly have elements left in BOTH
    // arrays, so if the previous while loop ran, this one won't, and vice versa
    while(i2 < nums2.length){ // getting the rest of the contents in nums2 in to the merged array
        merged.push(nums2[i2]);
        i2++;
    }

    // and finally
    return merged;
}

/*
        2. create mergeSort function to sort the provided array
        - split the array in half and recursively merge the halves using the
            previously created merge function.
        - splitting of arrays stops when array can no longer be split.
        - an array of 1 item is by definition sorted, so two arrays of 1 item
            can therefore be merged into a sorted array.
*/
function mergeSort(nums){
    // let's handle the base case! when do we want to stop splitting the array up?
    // when it's only 1 element in length
    if(nums.length === 1){
        return nums;
    }
    var left = [];
    var right = [];
    for(let i = 0; i < nums.length; i++){ // we'll loop through nums, putting the left half of the numbers in left, and the right half in right
        if(i < nums.length/2){
            left.push(nums[i]);
        } else {
            right.push(nums[i]);
        }
    }

    var left = mergeSort(left); // and recursively call mergeSort on the left side, which is nums.slice(0,mid)
    var right = mergeSort(right); // and recursively on the right side, which is nums.slice(mid)

    // because this is all done recursively, it will keep splitting up the left side, and that left side's left side, etc,
    // until the array in that eventual function call is just 1 element. then, as it returns back up the call stack from
    // the base case, it will go into the same process with the right side. when that first base case is reached, and it comes back
    // 1 level in the call stack, it then moves on to line 69, but considering left was only 1 element, right is also
    // going to be 1 element, so it comes back immediately, and then onto the return statement below, which merges those 2 
    // arrays, and returns the sorted, now 2 element array.

    // up one level, it is waiting for the sorted side from the left, to then go to the right, where either it does the same process,
    // or that right side is just 1 element in length, in which case it comes back right away and puts the 2 element array
    // and 1 element array in the merge function below, and this process rinses and repeats as things get pieced back together
    // on their way back up the call stack, until it reaches the initial call, where it then goes and does the same thing
    // for the RIGHT side of the array, splitting it up and piecing it together on the way back up the call stack.

    // at any given point in the process, when we reach this line of code, left and right are sorted arrays that 
    // just need to be merged together and returned
    return merge(left, right);
}


// // Recursion sample: 
// function sum(num){
//     if(num === 1){ // this is our base case, because once num hits 1, we don't want to keep reducing it, as it doesn't add more information that's useful or accurate
//         return 1;
//     }

//     return num + sum(num-1); // this is our recursive case, because it's where the function calls itself
// }
