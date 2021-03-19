/*
    Given an array of integers, return indices of the two numbers such that they add up to a specific target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
    Bonus: Make it O(n) time

    EXAMPLE:
    let arr = [2, 11, 7, 15];
    let target = 9;

    twoSum(arr, target) should return [0, 2] (or [2,0], the order of the output is irrelevant) because 
    nums[0] + nums[2] => 2 + 7 = 9, which is our target
*/
function twoSum(nums, targetSum){
    const table = {}; // to help us reach that O(n) time complexity, it'll be easier to look up
    // previously encountered values if we use a dictionary object

    for(let i = 0; i < nums.length; i++) { 
        // let's look at how the target sum is calculated. it's the sum of 2 values in the 
        // array. which means, that the target sum minus 1 value should equal another value
        if(table[targetSum - nums[i]] !== undefined) { // so, we'll look at our table, and if there's an entry for the targetSum - current value, we have our pair
            return [table[targetSum - nums[i]], i]; // we're storing our key value pairs in a way that the key is the number in the array, and the value is the index,
            // so our return is going to be an array with the index from the existing entry in the table, and the current index in our array
        }
        table[nums[i]] = i; // we have to add to our table also! again, key is the value in the array, and the value is the index
    }

    return false; // if we went through the whole thing and there was nothing that matches what we want? just return false
}
let arr = [2, 11, 7, 15];
let target = 9;

console.log(twoSum(arr, target))



/* 
    Given an unsorted non-empty array of integers and int k, return the k most frequent elements (in any order)
    You can assume there is always a valid solution
    These example inputs are sorted for readability, but the input is NOT guaranteed to be sorted and the output does NOT need to be in any specific order
    Hard Bonus: make it O(n) time

    EXAMPLE:
    let arr1 = [0,0,0,2,2,3];
    let k1 = 1;

    kMostFrequent(arr1,k1) should return [0]

    let arr2 = [1,1,1,2,2,3];
    let k2 = 2

    kMostFrequent(arr2, k2) should return [1, 2]
*/
function kMostFrequent(nums, k){
    // this one's a doozy. we'll be using two different frequency tables:
    // one where the key is the number in the array, and the value is the number of times that number appears,
    // and the other where the key is how frequent a value has appeared, and the value is an array with any and all numbers
    // that appear that many times.
    const elementFreq = {}; // key: number in array, value: frequency
    const freqTable = {}; // key: frequency, value: number in array
    const output = []; // this is our output array
    let maxFreq = 0; // and so we know where to start when checking frequencies (and to save us from another for loop), we'll store a maxFreq value
    
    for(let num of nums) { // let's loop through all the elements in nums
        if(elementFreq[num] === undefined) { // and if that number hasn't been added to our elementFreq table, 
            elementFreq[num] = 1; // add an entry with a key of the number in the array, and a value of 1
        } else { // otherwise, there must be an entry in the table already
            elementFreq[num]++; // so we'll increment it by 1
        }

        if(elementFrequency[num] > maxFreq){ // now, after adding our key value pair, we'll check if that values frequency is greater than our maxFreq
            maxFreq = elementFrequency[num]; // if it is, replace maxFreq with the newly discovered highest frequency
        }
    }

    // now, we need to make an easier way to look up what the highest frequencies actually are
    for(let key in elementFreq){ // so check all of our key value pairs in the elementFreq table
        let frequency = elementFreq[key]; // just to save us from typing elementFreq[key] 982374982734 times

        if(freqTable[frequency] === undefined){ // if we haven't added an element's frequency as a key to our SECOND table
            freqTable[frequency] = [parseInt(key)]; // add it as a key, with a value of an array with just the value (converted to a number)
        } else { // otherwise, we already have another number that's been found that number of times
            freqTable[frequency].push(parseInt(key)); // so we'll add the number to that frequency's array of numbers
        }
    }

    // now, we need to assess the data and find the k most frequently appearing numbers.
    // in layman's terms, we need to push values into our output until it's k values long
    while(output.length < k) {
        if(freqTable[maxFreq] !== undefined && freqTable[maxFreq].length > 0){ // starting with our maxFreq, we'll check if there's an entry in table 2, and because it's an array, make sure we actually have values left in that array
            output.push(freqTable[maxFreq].pop()); // assuming there's a number to add to our output, pop it out of the array in the table, and push the value into our output
        } else { // if either there is no entry for the frequency, or the array's been emptied out
            maxFreq--; // we'll decrement our maxFreq in an effort to find the NEXT most frequent.
        }
    }

    // by now, our output should be k elements long, so we return it
    return output;
}

let ar2r = [0,0,0,2,2,3];
let k = 1;

console.log(kMostFrequent(ar2r,k))