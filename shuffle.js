var clone = require("clone");

/**
 * Fisher–Yates shuffle
 */
module.exports = function (arr, random) {
    var k = 0;
    var temp = 0;
    try {
        random = random || Math.random;
        // deep clone
        var result = clone(arr);
        return shuffleMatrix(result, random);
    } catch (error) {
        console.error(error);
        return arr;
    }
}

function shuffleMatrix(matrix, random) {
    var tempArr = [];
    // convert the matrix to an temp array
    var len = matrix.length;
    for (var i = 0; i < len; i++) {
        tempArr = tempArr.concat(matrix[i]);
    }
    // shuffle the temp array
    var tempLen = tempArr.length;
    var temp = 0;
    var k = 0;
    for (var i = 0; i < tempLen; i++) {
        k = ~~(random() * (tempLen - 1));
        temp = tempArr[i];
        tempArr[i] = tempArr[k];
        tempArr[k] = temp;
    }
    // convert the temp array to matrix
    var result = new Array();
    for (var i = 0; i < len; i++) {
        if (matrix[i] instanceof Array && matrix[i].length) {
            result.push(tempArr.splice(0, matrix[i].length));
        } else {
            result.push(tempArr.pop());
        }
    }
    return result;
}