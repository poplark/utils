import getTag, { regexTag } from './base/getTag';

/*
 * /aa/
 * new RegEx('aa')
 */
function isRegex(val) {
  return 'object' === typeof val && getTag(val) === regexTag;
}

export default isRegex;
