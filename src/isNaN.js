import isNumber from './isNumber';

/*
  1. NaN != NaN
 */
function isNaN(val) {
  return isNumber(val) && val != val;
}

export default isNaN;