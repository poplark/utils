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
  } else if(element.attachEvent) { // IE8+ Support
    element.attachEvent(`on${eventName}`, (e) => {
      listener.call(element, e || window.event);
    });
  }
}

function off(element, eventName, listener, isCapture) {
  if(element.removeEventListener) {
    element.removeEventListener(eventName, listener, isCapture);
  } else if(element.detachEvent) { // IE8+ Support
    element.detachEvent(`on${eventName}`, listener);
  }
}

export default { on, off }
