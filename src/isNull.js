/*
  1. !obj // true
  2. 'object' === typeof obj // true
  3. obj instanceof Object  // true
 */
function isNull(obj) {
  let result = true;

  if(!!obj) {
    result = false;
  } else if('object' !== typeof obj) {
    result = false;
  } else if(obj instanceof Object) {
    result = false;
  }
  return result;
}

export default isNull;