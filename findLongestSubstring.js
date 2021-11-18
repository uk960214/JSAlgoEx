const findLongestSubstring = (str) => {
    if (!str.length) return 0;
    
    let i = 0;
    let j = 1;
    let len = 1;
    let obj = {};
    obj[str[i]] = i; 

    while(j <= str.length - 1) {
        if(obj[str[j]] || obj[str[j]] === 0) {
            let currLen = j - i;
            len = currLen > len ? currLen : len;
            i = obj[str[j]] + 1;
            j = i + 1;
            obj = {};
            obj[str[i]] = i
        } else {
            obj[str[j]] = j;
            j++;
        }
    }
    
    return (j - i > len) ? j - i : len;
}

findLongestSubstring('thisishowwedoit')