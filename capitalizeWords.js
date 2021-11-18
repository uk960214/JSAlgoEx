const capitalizeWords = (arr) => {
  return arr.length === 0
    ? []
    : [arr[0].toUpperCase()].concat(capitalizeWords(arr.slice(1)));
};

let words = ["i", "am", "learning", "recursion"];
capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
