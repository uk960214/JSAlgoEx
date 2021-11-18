const sameFrequency = (int1, int2) => {
    const obj = {}

    while (int1 >= 1) {
        let temp = int1 % 10;
        obj[temp] = (obj[temp] || 0) + 1;
        int1 = Math.floor(int1 / 10);
    }

    while(int2 >= 1) {
        let temp = int2 % 10;
        if(!obj[temp] || obj[temp] === 0) return false;
        else obj[temp]--;
        int2 = Math.floor(int2 / 10);
    }
    return true;
}


sameFrequency(182, 281)