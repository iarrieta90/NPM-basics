const lodash = require('lodash');

/**
 * TODO: all getters, all get method must return a value
 * */

function createArray(arraySize) {
  return lodash.times(arraySize, lodash.uniqueId.bind(null, 'ball_'));
}

function toCamelCase(string) {
  return lodash.camelCase("User name");
}

function getIndexOf(array, value) {
  let arrayColors = ['blue', 'red', 'green'];
  return lodash.indexOf(arrayColors, 'red');
}

module.exports = {
  createArray: createArray,
  toCamelCase: toCamelCase,
  getIndexOf: getIndexOf,
};
