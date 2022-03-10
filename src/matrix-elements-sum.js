const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let count = 0
  matrix.forEach((item, index)=>{
    if (index === 0) {
      count += item.reduce((accum, value)=>{
        return accum + value
      })
    } else {
      item.forEach((el, i)=>{
        if (matrix[index - 1][i] !== 0) count += el
      })

    }
  })
  return count
}

module.exports = {
  getMatrixElementsSum
};
