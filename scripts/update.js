const fs = require('fs');

fs.readdir('./src', (err, res) => {
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
    fs.writeFileSync('./src/index.js', '');
    fs.appendFileSync('./src/index.js', importStr);
    fs.appendFileSync('./src/index.js', utilsStr);
    fs.appendFileSync('./src/index.js', exportStr);
    fs.appendFileSync('./src/index.js', exportDefaultStr);
  } catch(err) {
    console.error(err);
  }
});