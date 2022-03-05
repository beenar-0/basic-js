const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let str = domains.join(' ')
  let set = new Set
  let rez = {}
  domains.forEach((item) => {
    let temp = item.split('.').reverse()
    for (let i = 0; i <= temp.length - 1; i++) {
      set.add(temp.slice(0, i + 1).reverse().join('.'))
    }
  })
  for (let key of set) {
    rez['.'+key.split('.').reverse().join('.')] = Object.values(str.match(new RegExp(`${key}`, 'g'))).length
  }
  return rez
}

module.exports = {
  getDNSStats
};
