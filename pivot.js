const pivot = (arr, start=0, end=arr.length-1) => {
    let pivotIndex = 0;
    const pivot = arr[start]
    for (let i = start + 1; i <= end; i++) {
        if(pivot > arr[i]) {
            pivotIndex++;
            let temp = arr[pivotIndex];
            arr[pivotIndex] = arr[i];
            arr[i] = temp;
        }
    }
    let temp = arr[pivotIndex];
    arr[pivotIndex] = pivot;
    arr[start] = temp;

    console.log(arr);
    return pivotIndex;
}

pivot([6,5,67,1,2,34])