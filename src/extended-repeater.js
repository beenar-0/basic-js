const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (!options.hasOwnProperty('separator')) options.separator = '+'
  if (!options.hasOwnProperty('additionSeparator')) options.additionSeparator = '|'
  if (options.hasOwnProperty('additionRepeatTimes') && options.additionRepeatTimes < 2 ) options.additionSeparator = ''
  if (options.hasOwnProperty('repeatTimes') && options.repeatTimes < 2) options.separator = ''
  if (!options.hasOwnProperty('addition')) options.addition = ''
  let add = (new Array(options.additionRepeatTimes)).fill(`${options.addition}`).join(`${options.additionSeparator}`)
  if (!options.separator) options.separator = '+'
  return (new Array(options.repeatTimes).fill(`${str}` + add)).join(`${options.separator}`)
}

module.exports = {
  repeater
};
