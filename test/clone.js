const chalk = require('chalk');
const assert = require('assert');
const utils = require('../dist/index.js');

// clone
let p = {
  a: '1',
  b: 2,
  c: {
    aa: true,
    bb: new Date(),
    cc: [
      111,
      '222',
      [
        {
          d: null,
          e: undefined
        }
      ]
    ]
  },
};
let ps = JSON.stringify(p);
assert.strictEqual(JSON.stringify(utils.clone(p)), ps);
assert.strictEqual(JSON.stringify(utils.clone(p, true)), ps);
assert.strictEqual(JSON.stringify(utils.cloneDeep(p)), ps);

// deep clone

console.log(chalk.green('Clone testing success'));
