const areThereDuplicates = (...args) => {
    const unique = {};
    for (let a of args) {
        if (unique[a]) return true
        else unique[a] = 1;
    }
    return false;
}

areThereDuplicates(1,2,2)
