const webpack = require('webpack');
const path = require('path');
const config = require('../webpack.config');

config['mode'] = 'development';
config['devtool'] = 'cheap-module-source-map';
config['output']['path'] = path.resolve('./dist');
const compiler = webpack(config);

compiler.run((err, stats) => {
  if(err) {
    console.error(err);
    return;
  }
  console.log(stats.toString({colors: true}), '\n');
});