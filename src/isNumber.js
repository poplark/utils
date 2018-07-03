/* basic
  1. 1
  2. new Number()
 */
function isNumber(val) {
  let type = typeof val;
  return 'number' === type
    || ('object' === type && val instanceof Number);
}

export default isNumber;