const minimist = require('minimist');

//定义命令行输入参数
const options = minimist(process.argv);
const PART = options.part || options.p || '';

if(PART) {
  require('./' + PART);
} else {
  require('./isType');
  require('./clone');
  require('./debounce');
  require('./throttle');
  // require('./event'); // 不符合实际的测试用例
}

