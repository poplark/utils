const chalk = require('chalk');
const assert = require('assert');
const utils = require('../dist/index.js');

const { throttle } = utils;

const start = Date.now();
/*
  1. 连续调用三次 throttled 函数
    结果应该只会执行一次测试函数，且执行测试函数时，
    得到的参数应为第一次调用 throttled 函数时传的参数
 */
const start1 = Date.now();
function test1(x) {
  const duration = Date.now() - start1;
  console.log('throttle test case1 : ', duration);
  assert.strictEqual(x, 1);
  console.log('throttle test case1 lasts: ', Date.now() - start);
}
const throttle1 = throttle(test1, 100);
throttle1(1);
throttle1(2);
throttle1(3);

/*
  2. 先调用一次，50ms后，再调用一次，再过50ms后，再调用一次，
  应该立即执行一次（参数为1），在 100多 ms 时执行一次（参数为3）
 */
const start2 = Date.now();
function test2(x) {
  const duration = Date.now() - start2;
  console.log('throttle test case2 : ', duration, x);
  switch(x) {
    case 1:
      assert.strictEqual(duration < 10, true);
      break;
    case 3:
      assert.strictEqual((duration - 100) < 10, true);
      break;
    default:
      assert.strictEqual((duration - 100) > 10000, true);
  }
  console.log('throttle test case2 lasts: ', Date.now() - start);
}
const throttle2 = throttle(test2, 100);
throttle2(1);
setTimeout(() => {
  throttle2(2);
  setTimeout(() => {
    throttle2(3);
  }, 51)
}, 50)

/*
  3. 取消函数 - 连续调用三次 throttled 函数
    调用清除函数，只会执行一次测试函数
 */
const start3 = Date.now();
function test3() {
  const duration = Date.now() - start3;
  console.log('throttle test case3 : ', duration);
  assert.strictEqual(duration < 10, true);
  console.log('throttle test case3 lasts: ', Date.now() - start);
}
const throttle3 = throttle(test3, 100);
throttle3(1);
throttle3(2);
throttle3(3);
throttle3.cancel();

/*
  4. 清除函数 - 连续调用三次 throttled 函数
    50ms 后，调用清除函数，只会执行一次测试函数
 */
const start4 = Date.now();
function test4() {
  const duration = Date.now() - start4;
  console.log('throttle test case4 : ', duration);
  assert.strictEqual(duration < 10, true);
  console.log('throttle test case4 lasts: ', Date.now() - start);
}
const throttle4 = throttle(test4, 100);
throttle4(1);
throttle4(2);
throttle4(3);
setTimeout(throttle4.flush, 50);

/*
  5. 非立即执行 - 先调用一次，100ms 后，再调用一次
    将 100多 ms 后执行一次，200多 ms 后，再执行一次
 */
const start5 = Date.now();
function test5(x) {
  const duration = Date.now() - start5;
  console.log('throttle test case5 : ', duration);
  switch(x) {
    case 1:
      assert.strictEqual((duration - 100) < 10, true);
      break;
    case 2:
      assert.strictEqual((duration - 200) < 10, true);
      break;
    default:
  }
  console.log('throttle test case5 lasts: ', Date.now() - start);
}
const throttle5 = throttle(test5, 100, {immediate: false});
throttle5(1);
setTimeout(() => {
  throttle5(2);
}, 100);

/*
  6. 默认参数 - 先调用一次，50ms 后，再调用一次
    立即执行一次，然后 50多 ms 再执行一次
 */
const start6 = Date.now();
function test6(x) {
  const duration = Date.now() - start6;
  console.log('throttle test case6 : ', duration, x);
  switch(x) {
    case 1:
      assert.strictEqual(duration < 10, true);
      break;
    case 2:
      assert.strictEqual((duration - 50) < 10, true);
      break;
    default:
  }
  console.log('throttle test case6 lasts: ', Date.now() - start);
}
const throttle6 = throttle(test6, 0, {immediate: false});
throttle6(1);
setTimeout(() => {
  throttle6(2);
}, 50);

setTimeout(() => {
  console.log('throttle total lasts: ', Date.now() - start);
  console.log(chalk.green('Throttle testing success'));
}, 300);
