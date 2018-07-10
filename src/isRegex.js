import getTag, { regexTag } from './base/getTag';

/*
 * /aa/
 * new RegExp('aa')
 */
function isRegex(val) {
  return 'object' === typeof val && getTag(val) === regexTag;
}

export default isRegex;
