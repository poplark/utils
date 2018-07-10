import getTag, { objectTag } from './base/getTag';

/*
 * isPlainObject(new Foo)
 * // => false
 *
 * isPlainObject([1, 2, 3])
 * // => false
 *
 * isPlainObject({ 'x': 0, 'y': 0 })
 * // => true
 *
 * isPlainObject(Object.create(null))
 * // => true
 */

function isPlainObject(val) {
  return 'object' === typeof val && getTag(val) === objectTag;
}

export default isPlainObject;
