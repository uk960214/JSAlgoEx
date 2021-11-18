const flatten = (arr) => {
    if (arr.length === 0) return [];
    let newArr = [];

    if(Array.isArray(arr[0])) {
        newArr = flatten(arr[0]);
    } else {
        newArr.push(arr[0])
    }
    return newArr.concat(flatten(arr.slice(1)));
};

flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])