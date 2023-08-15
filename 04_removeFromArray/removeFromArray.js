const removeFromArray = function(array, ...valuesToRemove) {
    for (let i = 0; i <= array.length - 1; i++) {
        if (valuesToRemove.includes(array[i])) {
            array.splice(i--, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

console.log(removeFromArray([1,2,3,4,5], 3, 2));