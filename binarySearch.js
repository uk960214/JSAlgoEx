const binarySearch = (arr, num) => {
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        const midIdx = Math.floor(j + i / 2)
        const curr = arr[midIdx];
        if (curr === num) return midIdx;
        else if (curr > num) j = midIdx - 1;
        else i = midIdx + 1;   
    }

    return -1;
}

binarySearch([1,2,3,4,5, 6],6)