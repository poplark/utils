/*
  1. [1,2,3]
  2. new Array(1,2,3)
 */
function isArray(val) {
  return 'object' === typeof val && val instanceof Array;
}

export default isArray;