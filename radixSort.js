const getDigit = (num, place) => {
    return Math.floor(Math.abs(num) / (Math.pow(10, place))) % 10;
}

const digitCount = (num) => {
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

const mostDigits = (arr) => {
    let max = 0;
    for (let e of arr) {
        let currDigit = digitCount(e)
        max = (max > currDigit) ? max : currDigit;
    }
    return max;
}

const radixSort = (arr) => {
    const loop = mostDigits(arr);
    for(let i = 0; i < loop; i++) {
        let buckets = [[],[],[],[],[],[],[],[],[],[]]
        for(let e of arr) {
            buckets[getDigit(e, i)].push(e);
        }
        arr = buckets.flat();
    }
    return arr;
}

radixSort([2,24235,64,1,34,512,241,6,0,241556])