/* basic
  1. ''
  2. new String()
 */
function isString(val) {
  let type = typeof val;
  return 'string' === type
    || ('object' === type && val instanceof String);
}

export default isString;