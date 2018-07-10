const hasOwnProperty = Object.prototype.hasOwnProperty;
import isObject from './isObject';
import isArray from './isArray';
import isPlainObject from './isPlainObject';
import isFunction from './isFunction';
import getTag, { boolTag, stringTag, numberTag, dateTag, regexTag } from './base/getTag';

/*
 * clone
 */

function cloneFunc(func) {
  let _func = function() {
    return func.apply(this, arguments);
  }

  for(let key in func) {
    if(hasOwnProperty.call(func, key)) {
      _func[key] = func[key];
    }
  }

  return _func;
}

function clone(data, isDeep) {
  let result;
  if(!isObject(data)) {
    result = data;
  } else if(isArray(data)) {
    result = [];
    let len = data.length;
    for(let i=0; i<len; i++) {
      let p;
      if(isDeep) {
        p = clone(data[i], isDeep);
      } else {
        p = data[i];
      }
      result.push(p);
    }
  } else if(isPlainObject(data)) {
    result = {};
    for(let key in data) {
      if(hasOwnProperty.call(data, key)) {
        if(isDeep) {
          result[key] = clone(data[key], isDeep);
        } else {
          result[key] = data[key];
        }
      }
    }
  } else if(isFunction(data)) {
    result = cloneFunc(data);
  } else {
    // [object Boolean], [object String], [object Number], [object Date], [object RegExp]
    let tag = getTag(data);
    if(boolTag == tag
      || stringTag == tag
      || numberTag == tag
      || dateTag == tag
      || regexTag == tag) {
      if(isDeep) {
        result = new data.constructor(data.valueOf());
      } else {
        result = data;
      }
    } else {
      throw new Error(`Unable to copy the data! Its type - ${tag} isn't supported.`);
    }
  }
  return result;
}

export default clone;
