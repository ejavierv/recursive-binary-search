"use strict";
function binarySearch(array, req) {
    const midPoint = Math.floor(array.length / 2);
    if (array[midPoint] === req)
        return true; //base case
    if (array[midPoint] < req && array.length > 1)
        return binarySearch(array.slice(midPoint), req);
    if (array[midPoint] > req && array.length > 1)
        return binarySearch(array.slice(0, midPoint), req);
    return false;
}
console.log("Is 4 on [1,3,5,6]?", binarySearch([1, 3, 5, 6], 4));
console.log("Is 5 on [4,5,6,8,12]?", binarySearch([4, 5, 6, 8, 12], 5));
