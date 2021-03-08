function functionName(nums, index){
    nums[index] += 25;
    return nums;
}

// equivalent in arrow function form
const functionName2 = (nums,index) => {
    nums[index] += 25;
    return nums;
}

// arrow function with only 1 parameter
const someFunction = param => {
    // code to run
}

// arrow function with zero parameters
const someOtherFunction = () => {
    // code to run
}

// function that returns the last element of an array
// normal way
function returnLast(nums) {
    return nums[nums.length-1];
}

// arrow way
const returnLastElement = nums => nums[nums.length-1];



import React from 'react'

const arrowfunctions = () => {
    return (
        <button onClick={() => nums++}></button>
    )
}

export default arrowfunctions





