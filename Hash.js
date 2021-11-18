class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        const WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
    }

    set(key, value) {
        const hashed = this._hash(key);
        if (!this.keyMap[hashed]) this.keyMap[hashed] = [[key, value]];
        else this.keyMap[hashed].push([key, value]);
    }

    get(key) {
        const hashed = this._hash(key);
        let arr;
        if (this.keyMap[hashed] === undefined) return;
        else arr = this.keyMap[hashed];

        for (let p of arr) {
            if (p[0] === key) return p[1];
        }

        return;
    }

    keys() {
        let result = [];
        for (let a of this.keyMap) {
            if (a) {
                for (let p of a) {
                    result.push(p[0]);
                }
            }
        }
        return result;
    }
    keys() {
        let result = [];
        for (let a of this.keyMap) {
            if (a) {
                for (let p of a) {
                    result.push(p[0]);
                }
            }
        }
        return result;
    }
    
    values() {
        let result = [];
        for (let a of this.keyMap) {
            if (a) {
                for (let p of a) {
                    if(!result.includes(p[1])) result.push(p[1])
                }
            }
        }
        return result;
    }
}

const table = new HashTable();

table.set("salmon", 3);
table.set("soup", 3);
table.set("beef", 1);
table.set("pork", 5);
table.set("carrot", 10);