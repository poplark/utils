/* basic
  1. true
  2. new Boolean()
 */
function isBoolean(val) {
  let type = typeof val;
  return 'boolean' === type
    || ('object' === type && val instanceof Boolean);
}

export default isBoolean;