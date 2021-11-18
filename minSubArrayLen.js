const minSubArrayLen = (arr, num) => {
    let i = 0;
    let j = 1;
    let sum = arr[0];
    if(sum > num) return 1;
    let len = arr.length;


    while (i < arr.length) {
        if (j === arr.length && sum < num) break;
        while(sum < num && j < arr.length) {
            sum += arr[j++];
        }

        let currLen = j - i;
        len = (currLen < len) ? currLen : len;
        sum -= arr[i++];
    }
    return sum < num && len === arr.length ? 0 : len;
};

minSubarrayLen([1,4,16,22,5,7,8,9,10], 95)