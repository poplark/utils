/* basic
  1. {}
  2. new Object()
  3. Object.assign()
  4. function() {}
 */
function isObject(val) {
  let type = typeof val;
  return null !== val && ('object' === type || 'function' === type);
}

export default isObject;