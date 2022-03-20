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
  let obj = {}
  names.forEach((name, index) => {
    if (names.filter(item => name === item).length > 1) {
      if (!obj[name]) obj[name] = []
      obj[name].push(index)
    }
  })
  for (let key in obj) {
    for (let i = 1; i < obj[key].length; i++) {
      names[obj[key][i]] += `(${i})`
    }
  }
  let set = new Set
  names.forEach(item => set.add(item))
  if (set.size !== names.length) return renameFiles(names)
  else return names
}

module.exports = {
  renameFiles
};
