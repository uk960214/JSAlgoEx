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

mostDigits([24123541,12])