/*
  函数防抖

  第一次触发后，进行倒计wait毫秒，如果倒计时过程中有其他触发，则重置倒计时；否则执行fn。用它来丢弃一些重复的密集操作、活动，直到流量减慢。
  例如：对用户输入的验证，不在输入过程中就处理，停止输入后进行验证足以；提交ajax时，不希望1s中内大量的请求被重复发送。

  使用场景
    input 中输入文字自动发送 ajax 请求进行自动补全： debounce
    resize window 重新计算样式或布局：debounce
 */

const DEFAULT_WAIT = 0;

/*
  immediate - boolean
    - true 立即执行: 调用后立即执行，在紧接着的 wait 时间内，若有新的调用，将不会执行
    - false 延后执行 (默认): 调用在 wait 时间后执行，若有新的调用，新的将会覆盖旧的
  maxWait - number
    设置最大等待时间，规定 wait 或 maxWait 时间内肯定会调用一次（wait 与 maxWait 两者间取小者）
 */
function debounce(func, wait=DEFAULT_WAIT, opts={}) {
  let timer;
  let firstCallTime;
  let lastArgs;
  let lastContext;
  let lastCallTime;
  let result;
  const { immediate = false, maxWait = DEFAULT_WAIT } = opts;
  const hasMaxWait = !!maxWait;

  function execNow() {
    result = func.apply(lastContext, lastArgs);
    lastContext = null;
    lastArgs = null;
    firstCallTime = null;
  }

  function later() {
    if(hasMaxWait) {
      const now = Date.now();
      const lastDuration = now - lastCallTime;
      const lastRemain = wait - lastDuration;
      const firstDuration = now - firstCallTime;
      const firstRemain = maxWait - firstDuration;
      if(lastRemain > 0 && firstRemain > 0) {
        if(lastRemain > firstRemain) {
          timer = setTimeout(later, firstRemain);
        } else {
          timer = setTimeout(later, lastRemain);
        }
      } else {
        timer = null;
        if(!immediate) {
          execNow();
        }
      }
    } else {
      const lastDuration = Date.now() - lastCallTime;
      const remain = wait - lastDuration;
      if(remain > 0) {
        timer = setTimeout(later, remain);
      } else {
        timer = null;
        if(!immediate) {
          execNow();
        }
      }
    }
  }

  function debounced() {
    lastContext = this;
    lastArgs = arguments;
    lastCallTime = Date.now();

    const callNow = immediate && !timer;

    if(!timer) {
      timer = setTimeout(later, wait);
      firstCallTime = lastCallTime;
    }

    if(callNow) {
      execNow();
    }

    return result;
  }

  function cancel() {
    // 取消所有未执行的
    if(timer) {
      clearTimeout(timer);
      timer = null;
      lastContext = null;
      lastArgs = null;
    }
  }

  function flush() {
    if(timer) {
      clearTimeout(timer);
      timer = null;
      if(!immediate) {
        result = func.apply(lastContext, lastArgs);
        lastContext = null;
        lastArgs = null;
      }
    }
    return result;
  }

  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

export default debounce;
