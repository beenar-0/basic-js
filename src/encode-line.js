const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  str = str.split('')
  let rez = []
  let count = 1
  str.forEach((item,index)=>{
    if (str[index] === str[index + 1]) {
      count++
    } else {
      if (count > 1) rez.push(count + item)
      else rez.push(item)
      count = 1
    }
  })
  return rez.join('')
}

module.exports = {
  encodeLine
};
