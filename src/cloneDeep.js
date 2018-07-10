import clone from './clone';

/*
 * deep clone
 */

function cloneDeep(data) {
  return clone(data, true);
}

export default cloneDeep;
