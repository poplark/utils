import getTag, { arrayTag } from './base/getTag';

/*
  1. [1,2,3]
  2. new Array(1,2,3)
 */
function isArray(val) {
  return 'object' === typeof val && getTag(val) === arrayTag;
}

export default isArray;
