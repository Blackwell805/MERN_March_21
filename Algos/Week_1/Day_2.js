/* 
    INSERTION SORT
    - Visualization with playing cards (scroll down):
        https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort
    - Array / bar visualization:
        https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/
    - Stable sort, efficient for small data sets or mostly sorted data sets.
    Time Complexity
        - Best: O(n) linear when array is already sorted.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic when the array is reverse sorted.
    Space: O(1) constant.
    - this sort splits the array into two portions (conceptually, not literally).
    - the left portion will become sorted, the right portion
        (that hasn't been iterated over yet) is unsorted.
    // can shift OR swap target element until it reaches desired position
    // shifting steps:
    1. consider the first item as sorted
    2. move to the next item
    3. store current item in a temp var (to make this position available to shift items)
    4. if item to the left of current is greater than current item, shift the
        left item to the right.
    5. repeat step 4 as many times as needed
    6. insert current item
    7. move to the next item and repeat
    // swap steps:
    1. consider the first item as sorted
    2. move to the next item
    4. if item to left of current item is less than current, swap
    5. repeat step 4 until item to left is less than current item
    6. move to next item and repeat
*/
function insertionSort(nums){

    // ok, so we want to treat our array as 2 sections:
    // 1. sorted
    // 2. unsorted
    // so, we'll start with the first element as the "sorted" portion,
    // and the rest as the unsorted portion. because of that, we'll start our 
    // outer for loop starting at position 1
    for(let i = 1; i < nums.length; i++){
        // we'll be doing the shift method, so let's store the first element in 
        // the unsorted portion of the array into a temp variable
        var temp = nums[i];

        // now, we need to loop through the sorted portion, starting at the end,
        // until the value in the sorted portion is less than our temp value
        // because we don't know how far in that will be, let's use a while loop!
        // we know that the sorted portion ends at i-1, so we'll have a variable 
        // for iterating through the sorted portion.
        var sIdx = i-1;
        // another thing to consider is that we may get to a point where we reach index
        // zero, so our while loop will need a compound condition
        while(sIdx >= 0 && nums[sIdx] > temp){
            nums[sIdx + 1] = nums[sIdx]; // so we'll shift the element at sIdx to the right 1
            sIdx--; // and decrement our sorted index
        }
        
        // now, if we've broken out of our while loop, it's because either our sIdx
        // went out of the bounds of the array (i.e. less than 0), or we found a number
        // less than our temp. in any case, since we were decrementing our sIdx each time,
        // we need to insert the value into position sIdx+1
        nums[sIdx+1] = temp;

        // then we'll increment i, and do it again with the next value, with a slightly larger
        // sorted portion of the array!
    }

    // and finally, return the array
    return nums;
}

