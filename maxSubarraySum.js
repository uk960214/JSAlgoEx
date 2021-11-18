const maxSubarraySum = (arr, num) => {
    if (arr.length < num) return null;
    let subarray = arr.slice(0, num);
    let maxSum = 0;
    for (let e of subarray) {
        maxSum += e
    }

    let tempSum = maxSum;

    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = tempSum > maxSum ? tempSum : maxSum;
    }

    return maxSum;
}
maxSubarraySum([-3,4, 0, -2, 6, -1], 2)