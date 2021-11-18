const digitCount = (num) => {
//     let count = 0;
//     while(num >= 1) {
//         num /= 10;
//         count++;
//     } 

//     return count;
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

digitCount(2345)