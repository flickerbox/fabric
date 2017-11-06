var path = require('path');

var assets_path = path.join(__dirname, 'assets');
var sass_path = path.join(assets_path, 'sass');

module.exports = {
  sassDir: sass_path
};
