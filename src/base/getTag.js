const toStrong = Object.prototype.toString;

// 基本数据类型
const boolTag     = '[object Boolean]';
const nullTag     = '[object Null]';
const undefinedTag= '[object Undefined]';
const numberTag   = '[object Number]';
const stringTag   = '[object String]';
const symbolTag   = '[object Symbol]';

// 复杂数据类型
const objectTag   = '[object Object]';

// 引用类型
const arrayTag    = '[object Array]';
const funcTag     = '[object Function]';
const dateTag     = '[object Date]';

/*
 * return object's tag
 */

function getTag(val) {
  if(val == null) {
    return val === undefined ? '[object Undefined]' : '[object Null]';
  }

  return toString.call(val);
}

export default getTag;

export { boolTag, nullTag, undefinedTag, numberTag, stringTag, symbolTag };
export { objectTag, arrayTag, funcTag, dateTag };
