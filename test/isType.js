const chalk = require('chalk');
const assert = require('assert');
const utils = require('../dist/index.js');

// isNull
assert.strictEqual(utils.isNull(null), true);
assert.strictEqual(utils.isNull(0), false);
assert.strictEqual(utils.isNull(''), false);
assert.strictEqual(utils.isNull(false), false);
assert.strictEqual(utils.isNull(undefined), false);
assert.strictEqual(utils.isNull(), false);
assert.strictEqual(utils.isNull(void 0), false);
assert.strictEqual(utils.isNull({}), false);
assert.strictEqual(utils.isNull(new Object()), false);

// isUndefined
assert.strictEqual(utils.isUndefined(null), false);
assert.strictEqual(utils.isUndefined(0), false);
assert.strictEqual(utils.isUndefined(''), false);
assert.strictEqual(utils.isUndefined(false), false);
assert.strictEqual(utils.isUndefined(undefined), true);
assert.strictEqual(utils.isUndefined(), true);
assert.strictEqual(utils.isUndefined(void 0), true);
assert.strictEqual(utils.isUndefined({}), false);
assert.strictEqual(utils.isUndefined(new Object()), false);

// isNil = isUndefined or isNull
assert.strictEqual(utils.isNil(null), true);
assert.strictEqual(utils.isNil(0), false);
assert.strictEqual(utils.isNil(''), false);
assert.strictEqual(utils.isNil(false), false);
assert.strictEqual(utils.isNil(undefined), true);
assert.strictEqual(utils.isNil(), true);
assert.strictEqual(utils.isNil(void 0), true);
assert.strictEqual(utils.isNil({}), false);
assert.strictEqual(utils.isNil(new Object()), false);

// isString
assert.strictEqual(utils.isString(null), false);
assert.strictEqual(utils.isString(0), false);
assert.strictEqual(utils.isString(''), true);
assert.strictEqual(utils.isString(false), false);
assert.strictEqual(utils.isString(undefined), false);
assert.strictEqual(utils.isString(), false);
assert.strictEqual(utils.isString(void 0), false);
assert.strictEqual(utils.isString(new String()), true);
assert.strictEqual(utils.isString(new String(1)), true);
assert.strictEqual(utils.isString(new Array('1', '2')), false);
assert.strictEqual(utils.isString({}), false);
assert.strictEqual(utils.isString(new Object()), false);

// isNumber
assert.strictEqual(utils.isNumber(null), false);
assert.strictEqual(utils.isNumber(0), true);
assert.strictEqual(utils.isNumber(''), false);
assert.strictEqual(utils.isNumber(false), false);
assert.strictEqual(utils.isNumber(undefined), false);
assert.strictEqual(utils.isNumber(), false);
assert.strictEqual(utils.isNumber(void 0), false);
assert.strictEqual(utils.isNumber(1), true);
assert.strictEqual(utils.isNumber(new Number(1)), true);
assert.strictEqual(utils.isNumber(new Number()), true);
assert.strictEqual(utils.isNumber(NaN), true);
assert.strictEqual(utils.isNumber(Infinity), true);
assert.strictEqual(utils.isNumber({}), false);
assert.strictEqual(utils.isNumber(new Object()), false);

// isNaN
assert.strictEqual(utils.isNaN(NaN), true);
assert.strictEqual(utils.isNaN(0), false);
assert.strictEqual(utils.isNaN(Infinity), false);
assert.strictEqual(utils.isNaN({}), false);
assert.strictEqual(utils.isNaN(new Object()), false);

// isArray
assert.strictEqual(utils.isArray([]), true);
assert.strictEqual(utils.isArray(new Array()), true);
assert.strictEqual(utils.isArray(), false);
assert.strictEqual(utils.isArray({}), false);
assert.strictEqual(utils.isArray(new Object()), false);

// isBoolean
assert.strictEqual(utils.isBoolean(0), false);
assert.strictEqual(utils.isBoolean(), false);
assert.strictEqual(utils.isBoolean(-1), false);
assert.strictEqual(utils.isBoolean(true), true);
assert.strictEqual(utils.isBoolean(new Boolean()), true);

// isObject
assert.strictEqual(utils.isObject(new Boolean()), false);
assert.strictEqual(utils.isObject(new String()), false);
assert.strictEqual(utils.isObject(new Number()), false);
assert.strictEqual(utils.isObject(new Object()), true);
assert.strictEqual(utils.isObject(new Function('a', 'console.log(a)')), false);
assert.strictEqual(utils.isObject({}), true);
assert.strictEqual(utils.isObject(Object.assign(function() {})), false);
assert.strictEqual(utils.isObject(new Array()), false);

// isFunction
assert.strictEqual(utils.isFunction(function() {}), true);
assert.strictEqual(utils.isFunction(() => {}), true);
assert.strictEqual(utils.isFunction(new Function()), true);
assert.strictEqual(utils.isFunction(new Function('a', 'console.log(a)')), true);
assert.strictEqual(utils.isFunction(new Function('a', 'b', 'console.log(a + b)')), true);

// isDate
assert.strictEqual(utils.isDate(new Date()), true);
assert.strictEqual(utils.isDate('Mon April 23 2012'), false);

console.log(chalk.green('Testing success'));
