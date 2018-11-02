const chalk = require('chalk');
const assert = require('assert');
const utils = require('../dist/index.js');

const { debounce } = utils;

const start = Date.now();
/*
  1. 连续调用三次 debounced 函数
    结果应该只会执行一次测试函数，且执行测试函数时，
    得到的参数应为最后一次调用 debounced 函数时传的参数
 */
const start1 = Date.now();
function test1(x) {
  const duration = Date.now() - start1;
  console.log('debounce test case1 : ', duration);
  assert.strictEqual(x, 3);
  console.log('debounce test case1 lasts: ', Date.now() - start);
}
const debounce1 = debounce(test1, 100);
debounce1(1);
debounce1(2);
debounce1(3);

/*
  2. 先调用一次，50ms后，再调用一次，再过50ms后，再调用一次，
  最后应该在大于 200ms 时执行测试函数
 */
const start2 = Date.now();
function test2() {
  const duration = Date.now() - start2;
  console.log('debounce test case2 : ', duration);
  assert.strictEqual(duration >= 200, true);
  console.log('debounce test case2 lasts: ', Date.now() - start);
}
const debounce2 = debounce(test2, 100);
debounce2();
setTimeout(() => {
  debounce2();
  setTimeout(() => {
    debounce2();
  }, 50)
}, 50)

/*
  3. 取消函数 - 连续调用三次 debounced 函数
    调用清除函数，测试函数将得不到执行
 */
const start3 = Date.now();
function test3() {
  const duration = Date.now() - start3;
  console.log('debounce test case3 : ', duration);
  assert.strictEqual(duration > 100000, true);
  console.log('debounce test case3 lasts: ', Date.now() - start);
}
const debounce3 = debounce(test3, 100);
debounce3(1);
debounce3(2);
debounce3(3);
debounce3.cancel();

/*
  4. 清除函数 - 连续调用三次 debounced 函数
    50ms 后，调用清除函数，执行测试函数时应该小于等待时间
 */
const start4 = Date.now();
function test4() {
  const duration = Date.now() - start4;
  console.log('debounce test case4 : ', duration);
  assert.strictEqual(duration < 100, true);
  console.log('debounce test case4 lasts: ', Date.now() - start);
}
const debounce4 = debounce(test4, 100);
debounce4(1);
debounce4(2);
debounce4(3);
setTimeout(debounce4.flush, 50);

/*
  5. 立即执行 - 连续调用三次 debounced 函数
    调用清除函数，测试函数将得不到执行
 */
const start5 = Date.now();
function test5(x) {
  const duration = Date.now() - start5;
  console.log('debounce test case5 : ', duration);
  switch(x) {
    case 1:
      assert.strictEqual(duration < 10, true);
      break;
    case 2:
      assert.strictEqual((100 - duration) < 10, true);
      break;
    default:
  }
  console.log('debounce test case5 lasts: ', Date.now() - start);
}
const debounce5 = debounce(test5, 100, true);
debounce5(1);
setTimeout(() => {
  debounce5(2);
}, 100);

setTimeout(() => {
  console.log('debounce total lasts: ', Date.now() - start);
  console.log(chalk.green('Debounce testing success'));
}, 300);
