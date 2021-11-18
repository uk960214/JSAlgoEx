const someRecursive = (arr, func) => {
    return (arr.length === 0) ? false : (func(arr[0])) ? true : someRecursive(arr.slice(1), func);
};
