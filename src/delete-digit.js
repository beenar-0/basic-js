const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let rez = []
  let temp
  n = n.toString().split('')
  n.forEach((item, index)=>{
    temp = n[index]
    n.splice(index,1)
    rez.push(n.join(''))
    n.splice(index,0,temp)
  })
  return +rez.sort((a,b)=> b - a)[0]
}


module.exports = {
  deleteDigit
};
