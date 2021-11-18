const collectStrings = (obj) => {
    let answer = [];
    for(let p in obj) {
        const type = typeof(obj[p]);
        if(type === 'string') {
            answer.push(obj[p]);
        } else if (type === 'object') {
            answer = answer.concat(collectStrings(obj[p]));
        }
    }
    return answer;
}

const obje = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obje)