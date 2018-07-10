import getTag, { dateTag } from './base/getTag';

/*
 * new Date()
 */

function isDate(val) {
  return val instanceof Date && getTag(val) === dateTag;
}

export default isDate;
