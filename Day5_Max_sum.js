function maxSumK(arr, k) {
    if (arr.length < k) return null;
    
    let maxSum = 0;
    let windowSum = 0;
    
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;
    
    for (let i = k; i < arr.length; i++) {
        // Add new element, remove old element
        windowSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }
    
    return maxSum;
}

// Test
console.log(maxSumK([1,4,2,10,2,3,1,0,20], 4)); // 24 (10+2+3+1)