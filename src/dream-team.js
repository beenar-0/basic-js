const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false
  members = members.filter((item)=>{
    return (typeof item === 'string')
  })
  members = members.reduce((accum, item)=>{
    accum.push(item.replace(/\s/g, '')[0].toUpperCase())
    return accum
  },[])
  return members.sort().join('')
}

module.exports = {
  createDreamTeam
};
