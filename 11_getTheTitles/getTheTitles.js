const getTheTitles = function(arr) {
    let titles = [];
    for (let i in arr) {
        titles.push(arr[i].title);
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
