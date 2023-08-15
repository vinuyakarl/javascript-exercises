const sumAll = function(start, end) {
    if (!Number.isInteger(start)
        || !Number.isInteger(end)
        || start < 0
        || end < 0) {
        return "ERROR";
    }

    let total = 0;
    if (start > end) {
        [start, end] = [end, start];
        console.log(start, end);
    }
    while (start <= end) {
        total += start++;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
