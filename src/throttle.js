/*
  函数节流

  第一次触发后先执行fn（当然可以通过{leading: false}来取消），然后wait ms后再次执行，在单位wait毫秒内的所有重复触发都被抛弃。
  即如果有连续不断的触发，每wait ms执行fn一次。与debounce相同的用例，但是你想保证在一定间隔必须执行的回调函数。例如：对用户输入的验证，
  不想停止输入再进行验证，而是每n秒进行验证；对于鼠标滚动、window.resize进行节流控制。

  使用场景
    scroll 时更新样式，如随动效果：throttle
*/

import debounce from './debounce';

const DEFAULT_WAIT = 0;

/*
  immediate
    - true 立即执行: 调用后立即执行，在紧接着的 wait 时间内，若有新的调用，将不会执行
    - false 延后执行 (默认): 调用在 wait 时间后执行，若有新的调用，新的将会覆盖旧的
 */
function throttle(func, wait=DEFAULT_WAIT, opts={}) {
  // if(wait <= 0) throw Error('wait must more than 0ms');
  const { immediate = true } = opts;
  return debounce(func, wait, {immediate, maxWait: wait});
}

export default throttle;
