const bubbleSort = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        let swap = false;
        for (let j = 0; j < i; j++) {
            if(arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
                swap = true;
            }
        }
        if(!swap) break;
        console.log(arr)
    }
    return arr;
}

bubbleSort([4,2,1,5,7])