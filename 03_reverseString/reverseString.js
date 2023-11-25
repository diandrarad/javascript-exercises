const reverseString = function(str) {
    let reversedString = '';
    let strLastIndex = str.length - 1;
    for (let i = strLastIndex; i >= 0; i--) {
        reversedString += str[i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
