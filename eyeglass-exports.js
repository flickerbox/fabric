var fabric = require('./index');

module.exports = function(eyeglass, sass) {
  return {
    sassDir: fabric.includePaths[0]
  };
};
