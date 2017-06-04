let clone = require("clone");

/**
 * Fisher–Yates shuffle
 */
module.exports = function (arr, random) {
    let k = 0;
    let temp = 0;
    try {
        random = random || Math.random;
        // deep clone
        let result = clone(arr);
        return shuffleMatrix(result,random);
    } catch (error) {
        console.error(error);
        return arr;
    }
}

let lenArr = [];

let tempArr = [];

function shuffleMatrix(matrix, random) {
    // convert the matrix to an temp array
    let len = matrix.length;
    for (let i = 0; i < len; i++) {
        let item = matrix[i];
        if (item instanceof Array && item.length) {
            lenArr.push[item.length];
        } else {
            lenArr.push[0];
        }
        tempArr.concat(item);
    }
    // shuffle the temp array
    let tempLen = tempArr.length;
    let temp = 0;
    let k = 0;
    for (let i = 0; i < tempLen; i++) {
        k = ~~(random() * (tempLen - 1));
        temp = tempArr[i];
        tempArr[i] = tempArr[k];
        tempArr[k] = temp;
    }
    // convert the temp array to matrix
    let result = [];
    return result;
}