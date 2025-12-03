// Binary search - Simple Binary search with array and target element as input 
// Divide and Conquer
// Eliminate half of the array in each iteration


function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length -1;

    while(left <= right) {
        const mid = Math.floor(left+right)/2;
        if(arr[mid] == target) return mid;
        if(arr[mid] < target) left = mid + 1;
        else if(arr[mid]> target) right = mid - 1;
    }
    return -1;
}

let arr = [12,45,67,89,34,90];
let target = 67;

binarySearch(arr, target);