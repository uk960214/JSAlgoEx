const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] < arr[i - 1]) {
            for (let j = i; j > 0; j--) {
                if(arr[j] > arr[j - 1]) {
                    break;
                } else {
                    let temp = arr[j - 1];
                    arr[j - 1] = arr[j];
                    arr[j] = temp;
                }
            }          
        }
        console.log(arr);
    }
    return arr;
}

insertionSort([8,4,7,3,1])