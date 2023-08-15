const reverseString = function(string) {
    let i = string.length - 1;
    let result = "";
    while (i >= 0) {
        result += string[i--];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;