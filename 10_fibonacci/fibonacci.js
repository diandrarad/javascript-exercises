const fibonacci = function(num) {
    if (num < 0) return 'OOPS';
    let arr = [];
    for (let i = 0; i < num; i++) {
        let previousValue = arr[i-1] ?? 1;
        let secondPrevious = arr[i-2] ?? 0;
        if (i === num - 1) return previousValue + secondPrevious;
        arr.push(previousValue + secondPrevious);
    }
};

// Do not edit below this line
module.exports = fibonacci;
