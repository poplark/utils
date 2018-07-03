const webpack = require('webpack');
const path = require('path');
const config = require('../webpack.config');

config['mode'] = 'production';
config['devtool'] = 'source-map';
config['output']['path'] = path.resolve('./lib');
const compiler = webpack(config);

compiler.run((err, stats) => {
  if(err) {
    console.error(err);
    return;
  }
  console.log(stats.toString({colors: true}), '\n');
});
