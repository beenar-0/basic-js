const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!')
  let rez = arr.slice()
  rez.forEach((item, index) => {
    switch (item) {
      case '--discard-next':
        if (rez[index + 1]) {
          if (rez[index + 2]) {
            if (typeof rez[index + 2] !== 'number') rez.splice(index, 3)
          }
          else rez.splice(index, 2)
        }
        else rez.splice(index, 1)
        break
      case '--discard-prev':
        if (rez[index - 1]) rez.splice(index - 1, 2)
        else rez.splice(index, 1)
        break
      case '--double-next':
        if (rez[index + 1]) rez.splice(index, 1, rez[index + 1])
        else rez.splice(index, 1)
        break
      case '--double-prev':
        if (rez[index - 1]) rez.splice(index, 1, rez[index - 1])
        else rez.splice(index, 1)
        break
      default:
        break
    }
  })
  return rez
}
module.exports = {
  transform
};
