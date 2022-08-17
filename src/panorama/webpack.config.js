const path = require('path');
const { PanoramaTargetPlugin } = require('webpack-panorama');

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: {
    hud: './hud/script.js',
  },
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  output: {
    path: path.resolve(__dirname, 'scripts/custom_game'),
  },

  resolve: {
    // Required because of reverse symlinking
    symlinks: false,
  },

  plugins: [new PanoramaTargetPlugin()],
};
