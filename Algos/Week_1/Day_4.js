/* 
    Params: nums, left, right
        - left and right are indexes, for now, left will be 0, and right will be
            the last idx.
        - later these params will be used to specify a sub section of the array to
            partition.
    Steps:
    1. Pick an number out of the arr to be your pivot value
        - usually the middle idx, left idx, or right idx
        - can also be a random index if you wanna go crazy
    2. Partition the array IN PLACE such that all values less than the pivot
        value are to the left of it and all values greater than the pivot value
        are to the right (not perfectly sorted).
    3. return: new idx of the pivot value or the index where the left section of
        smaller items ends.
    "Choosing a random pivot minimizes the chance that you will encounter
    worst-case O(n2) performance (always choosing first or last would cause
    worst-case performance for nearly-sorted or nearly-reverse-sorted data).
    Choosing the middle element would also be acceptable in the majority of
    cases."
    https://stackoverflow.com/questions/164163/quicksort-choosing-the-pivot
*/

// picking the rightmost index as pivot point
function partition(nums, left=0, right=nums.length-1){
    let pivot = nums[right]; // we don't have to do this, but it helps with readability
    let pIdx = left; // this variable will be used to keep track of where our pivot value SHOULD go. we'll start it at the left
    
    for(let i = left; i < right; i++){ // starting at left, up to the element BEFORE our pivot element
        if(nums[i] < pivot){ // if the value at each index is less than our pivot value
            [nums[i], nums[pIdx]] = [nums[pIdx], nums[i]]; // we want to swap the values at i and pIdx
            pIdx++; // and increment pIdx
        }
    }
    // now, we've figured out WHERE our pivot value should move to, and we know that everything left of
    // that index is less than the pivot value, and everything to the right of it is greater than or equal to it
    // so we swap our pivot value (still hanging out at our right index) and whatever is sitting at our pivot index
    [nums[pIdx], nums[right]] = [nums[right], nums[pIdx]];
    return pIdx; // and finally, return that pivot index
}



// picking the middle index as pivot point (we can actually use this with ANY pivot choice)
function partitionMid(nums, left=0, right=nums.length-1){
    const pivot = nums[Math.floor((left+right)/2)]; // we need to know which value to pivot around

    // the goal here is we're going to find the first value from the left side of pivot
    // that should be on the right side, and the first value from the end of the right side
    // that should be on the left side, and swap them, then rinse and repeat.
    // eventually, left and right should be at the same point, which would be our new pivot
    // index

    while(left < right){
        while(nums[left] < pivot){ // increment left until we find a value that shouldn't be left of the pivot
            left++;
        }

        while(nums[right] > pivot){ // decrement right until we find a value that shouldn't be right of the pivot
            right--;
        }

        [nums[left], nums[right]] = [nums[right], nums[left]]; // swap those out-of-place values

        // rinse and repeat
    }

    return left; // by now, left and right have intersected on our pivot, so return left
}
