const merge = (arr1, arr2) => {
    let result = []
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length) {
        if (arr1[i] > arr2[j]){
            result.push(arr2[j]);
            j++;
        } else if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr1[i]);
            result.push(arr2[j]);
            i++;
            j++;
        }
    }
    result = (arr1.length === i) ? result.concat(arr2.slice(j)) : result.concat(arr1.slice(i));
    return result;
}

const mergeSort = (arr) => {
    if(arr.length === 1) return arr;

    return merge(mergeSort(arr.slice(0, Math.floor(arr.length / 2))), mergeSort(arr.slice(Math.floor(arr.length / 2))));
}

mergeSort([1,8,3,2,9,5,100, 20, 2103, 245, 5,1])