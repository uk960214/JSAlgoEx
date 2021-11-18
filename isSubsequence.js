const isSubsequence = (str1, str2) => {
    if (str1 > str2) return false;
    
    let i = 0;
    let j = 0;

    while (i < str1.length) {
        if (j === str2.length) return false;
        if(str1[i] === str2[j]) {
            i++;
            j++;
        } else {
            j++;
        }
    }
    return true;
}

isSubsequence('abc', 'bca')