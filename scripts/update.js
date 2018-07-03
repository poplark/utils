const path = require('path');
const fs = require('fs');

const SRC_PATH = path.resolve(__dirname, '../src');
const INDX_PATH = path.join(SRC_PATH, 'index.js');

fs.readdir(SRC_PATH, (err, res) => {
  if(err) {
    return console.error(err);
  }
  let files = res.filter(item => item !== 'index.js');
  let importStr = '', //import isNil from './isNil';
    exportStr = '', // export { isNil };
    utilsStr = '\nconst utils = { ',
    exportDefaultStr = 'export default utils;';
  files.forEach(file => {
    let p = file.split('.js')[0];
    importStr += `import ${p} from './${p}';\n`;
    utilsStr += `${p},`;
    exportStr += `export { ${p} };\n`;
  });
  utilsStr = utilsStr.substr(0, utilsStr.length - 1);
  utilsStr += ' };\n\n';

  try {
    fs.writeFileSync(INDX_PATH, ''); // clear the content of index.js
    fs.appendFileSync(INDX_PATH, importStr);
    fs.appendFileSync(INDX_PATH, utilsStr);
    fs.appendFileSync(INDX_PATH, exportStr);
    fs.appendFileSync(INDX_PATH, exportDefaultStr);
  } catch(err) {
    console.error(err);
  }
});