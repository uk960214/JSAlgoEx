const reverse = (str) => {
    if (str === "") return "";
    return str.slice(str.length - 1, str.length) + reverse(str.slice(0, -1));
};

reverse('rithmschool')