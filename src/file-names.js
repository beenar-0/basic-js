const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  function check(names) {
    let copies = {}
    names.forEach((item, index) => {
      let temp = names.filter(filterItem => item === filterItem)
      if (temp.length > 1) {
        copies[index] = item
      }
    })
    copies = Object.entries(copies)
    let set = new Set
    copies.forEach((item) => {
      set.add(item[1])
    })
    let rez = []
    for (let value of set) {
      let temp = [value, []]
      copies.forEach((item) => {
        if (item[1] === value) temp[1].push(item[0])
      })
      rez.push(temp)
    }
    copies = Object.fromEntries(rez)
    for (let value in copies) {
      for (let i = 1; i < copies[value].length; i++) {
        names[copies[value][i]] += `(${i})`
      }
    }
    let uniqueCount = new Set
    names.forEach((item)=>{
      uniqueCount.add(item)
    })
    if (names.length > uniqueCount.size) check(names)
    return names
  }
  return check(names)
}

module.exports = {
  renameFiles
};
