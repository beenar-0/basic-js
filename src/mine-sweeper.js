const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  return  matrix.map((line, lineIndex) => {
    return line.map((item, itemIndex) => {
      let count = 0
      if (matrix[lineIndex - 1]) {
        if (matrix[lineIndex - 1][itemIndex - 1]) count++
        if (matrix[lineIndex - 1][itemIndex]) count++
        if (matrix[lineIndex - 1][itemIndex + 1]) count++
      }
      if (matrix[lineIndex]) {
        if (matrix[lineIndex][itemIndex - 1]) count++
        if (matrix[lineIndex][itemIndex + 1]) count++
      }
      if (matrix[lineIndex + 1]) {
        if (matrix[lineIndex + 1][itemIndex - 1]) count++
        if (matrix[lineIndex + 1][itemIndex]) count++
        if (matrix[lineIndex + 1][itemIndex + 1]) count++
      }
      return count
    })
  })
}

module.exports = {
  minesweeper
};
