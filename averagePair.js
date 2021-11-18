const averagePair = (arr, avg) => {
    let i = 0;
    let j = arr.length - 1;

    const sum = avg * 2

    while (i < j) {
        if (arr[i] + arr[j] === sum) {
            return true;
        } else if (arr[i] + arr[j] > sum) {
            j--;
        } else {
            i++;
        }
    }
    return false;
}

averagePair([], 5)