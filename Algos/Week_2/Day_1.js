/* 
    Efficiently combine two already sorted multiset arrays 
    into an array containing the sorted set intersection of the two.
    Output: only the shared values between the two arrays (deduped).
    Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg

    EXAMPLE:
    let nums1 = [1,4,5,7,7,8,9,9,10,12];
    let nums2 = [2,3,3,6,7,9,9,9,11,13];

    orderedIntersection(nums1, nums2) should return [7,9] because 7 and 9 are the only values
    in both sets, and only appear once because we want the output to be the shared deduped values
*/
function orderedIntersection(sortedA, sortedB){
    /* BONUS: break out if either array is NOT sorted */
    for(let i = 1; i < sortedA.length; i++) {
        if(sortedA[i] < sortedA[i-1])
            return false;
    }
    for(let i = 1; i < sortedB.length; i++) {
        if(sortedB[i] < sortedB[i-1])
            return false;
    }
    /* END OF BONUS */
    let intersection = []; // this is where we'll be putting all of our intersection values

    for(let iA = 0, iB = 0; iA < sortedA.length && iB < sortedB.length;){ // interesting for loop, eh? ;)
        if(sortedA[iA] === sortedB[iB]){ // if we've found a value that's in BOTH sets
            if(intersection[intersection.length-1] !== sortedA[iA]){ // AND it hasn't already been added to our array
                intersection.push(sortedA[iA]); // then add it to our array
            }
            iA++; // regardless of whether we added something or not, we'll increment both
            iB++; // iterators, because if it wasn't added, it means it was already in our intersection
        } else if(sortedA[iA] < sortedB[iB]){ // otherwise, if the element in set A is smaller
            iA++; // just increment iA
        } else {
            iB++; // if we're in here, element in set B is larger, so just increment iB
        }
    }

    return intersection; // and finally return it!
}