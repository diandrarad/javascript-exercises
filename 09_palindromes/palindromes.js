const palindromes = function (str) {
    const regex = /[^A-Za-z0-9]/g;
    const newStr = str.replace(regex, '').toLowerCase();
    
    return newStr == newStr.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
