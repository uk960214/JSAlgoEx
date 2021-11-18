const pivot = (arr, start=0, end=arr.length-1) => {
    let pivotIndex = start;
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

    console.log(arr)
    return pivotIndex;
}


const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if(left < right){
        let pivotPoint = pivot(arr, left, right);
        quickSort(arr, left, pivotPoint - 1)
        quickSort(arr, pivotPoint + 1, right)
    }
    return arr;
}

quickSort([7,2,5,3,9,8,4,1])