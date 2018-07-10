import getTag, { objectTag } from './base/getTag';

/* basic
  1. {}
  2. new Object()
  3. Object.assign()
 */
function isObject(val) {
  return 'object' === typeof val && getTag(val) === objectTag;
}

export default isObject;
