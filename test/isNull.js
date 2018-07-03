const chalk = require('chalk');
const assert = require('assert');
const utils = require('../lib/index.js');

assert.strictEqual(utils.isNull(null), true);

console.log(chalk.green('Testing success'));