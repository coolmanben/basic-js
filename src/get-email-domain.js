import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
/*
export default function getEmailDomain(email ) {
  return email.split('@').pop();
}
*/
function getEmailDomain( email ) {
  return email.split('@').pop();
}

module.exports = {
  getEmailDomain
};