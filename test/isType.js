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

// isUndefined
assert.strictEqual(utils.isUndefined(null), false);
assert.strictEqual(utils.isUndefined(0), false);
assert.strictEqual(utils.isUndefined(''), false);
assert.strictEqual(utils.isUndefined(false), false);
assert.strictEqual(utils.isUndefined(undefined), true);
assert.strictEqual(utils.isUndefined(), true);
assert.strictEqual(utils.isUndefined(void 0), true);

// isNil = isUndefined or isNull
assert.strictEqual(utils.isNil(null), true);
assert.strictEqual(utils.isNil(0), false);
assert.strictEqual(utils.isNil(''), false);
assert.strictEqual(utils.isNil(false), false);
assert.strictEqual(utils.isNil(undefined), true);
assert.strictEqual(utils.isNil(), true);
assert.strictEqual(utils.isNil(void 0), true);

console.log(chalk.green('Testing success'));