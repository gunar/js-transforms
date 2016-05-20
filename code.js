const _ = require('lodash')

const duplicate = x => x * 2

function duplicateArray(array) {
  return _.map(array, duplicate)
}

console.log(duplicateArray([1, 2, 3, 4]))
