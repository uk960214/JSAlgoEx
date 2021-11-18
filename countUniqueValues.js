const countUniqueValues = (arr) => {
    let i = 0;
    for (let j = 1; j <= arr.length; j++) {
        if (arr[i] !== arr[j]) {
            arr[++i] = arr[j]
        }
    }
    return i
}

countUniqueValues([1,2,3,4,5,5,5,6,7,8,8,9])

const countUniqueValues2 = (arr) => {

    var i = 0;
    for(var j = 1; j <= arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i;
}

countUniqueValues2([1,2,3,4,5,5,5,6,7,8,8,9])