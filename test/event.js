const chalk = require('chalk');
const utils = require('../dist/index.js');

const { event } = utils;
const { on, off } = event;

// print func
console.log(chalk.yellow('on function: ', on));
console.log(chalk.yellow('off function: ', off));

console.log(chalk.green('Event testing success'));
