import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason( date ) {
  if (date == ''){ return 'Unable to determine the time of year!' }
  if (Object.prototype.toString.call(date) === "[object Date]" ){
    let season = ['', 'winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter' ];
    let month = date.getMonth();
    console.log(month)
    return season[month];
  }
  new Error(`Invalid date!`);
}
