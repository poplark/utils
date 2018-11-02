const DEFAULT_WAIT = 0;

/*
  immediate
    - true 立即执行: 调用后立即执行，在紧接着的 wait 时间内，若有新的调用，将不会执行
    - false 延后执行 (默认): 调用在 wait 时间后执行，若有新的调用，新的将会覆盖旧的
 */
function debounce(func, wait = DEFAULT_WAIT, immediate) {
  let timer;
  let lastArgs;
  let lastContext;
  let lastCallTime;
  let result;

  function later() {
    const lastDuration = Date.now() - lastCallTime;
    const remain = wait - lastDuration;

    if(remain > 0) {
      timer = setTimeout(later, remain);
    } else {
      timer = null;
      if(!immediate) {
        result = func.apply(lastContext, lastArgs);
        lastContext = null;
        lastArgs = null;
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
    }

    if(callNow) {
      result = func.apply(lastContext, lastArgs);
      lastContext = null;
      lastArgs = null;
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
