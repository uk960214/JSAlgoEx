const capitalizeFirst = (arr) => {
    return (arr.length === 0) ? [] : [arr[0][0].toUpperCase() + arr[0].slice(1)].concat(capitalizeFirst(arr.slice(1)))
}

capitalizeFirst(['tiger', 'taco', 'car'])