const nestedEvenSum = (obj) => {
    let val = Object.values(obj);
    let sum = 0;
    val.forEach(x => (x % 2 === 0) ? (sum += x) : "");
    if(val.every(e => typeof(e) !== 'object')){
        return sum;
    } else {
        let tempSum = 0;
        val.forEach(e => typeof(e) === 'object' ? tempSum += nestedEvenSum(e): "");
        sum += tempSum;
    }
    return sum;
};

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

nestedEvenSum(obj2)