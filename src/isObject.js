/* basic
 * isObject({})
 * // => true
 *
 * isObject([1, 2, 3])
 * // => true
 *
 * isObject(Function)
 * // => true
 *
 * isObject(null)
 * // => false
 */

function isObject(val) {
  let type = typeof val;
  return null != val && ('object' === type || 'function' === type);
}

export default isObject;
