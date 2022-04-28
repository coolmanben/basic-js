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
 function getDNSStats( domains ) {
  let DNS = {} ;
  domains.map( function(element) { 
    let f = '';
    element.split('.').reverse().forEach( function(item ) {
      f = f + '.' + item ;
      (DNS.hasOwnProperty(f)) ? DNS[f]++ : DNS[f] = 1;
    });
  });
 return DNS
}

module.exports = {
  getDNSStats
};
