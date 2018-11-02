/*
  desc: Bind and Unbind event listener with the DOM element
  usage:
    import { event } from 'wukong-utils';
    const { on, off } = event;
  or:
    const { event } = require('wukong-utils');
    const { on, off } = event;
 */
function on(element, eventName, listener, isCapture) {
  if(element.addEventListener) {
    element.addEventListener(eventName, listener, isCapture);
  } else if(element.attachEvent) {
    // todo - confirm this
    // element.attachEvent(`on${eventName}`, (e) => {
    //   listener.call(element, e || window.event)
    // });
    element.attachEvent(`on${eventName}`, listener);
  }
}

function off(element, eventName, listener, isCapture) {
  if(element.removeEventListener) {
    element.removeEventListener(eventName, listener, isCapture);
  } else if(element.detachEvent) {
    element.detachEvent(`on${eventName}`, listener);
  }
}

export default { on, off }
