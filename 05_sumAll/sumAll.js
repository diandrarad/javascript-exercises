const sumAll = function(start, end) {
    // Check if either parameter is not a number
    if (typeof start !== 'number' || typeof end !== 'number') {
      return 'ERROR';
    }
  
    // Check if either parameter is negative
    if (start < 0 || end < 0) {
      return 'ERROR';
    }
  
    if (start > end) {
      // Swap start and end if necessary
      [start, end] = [end, start];
    }
  
    let sum = 0
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
