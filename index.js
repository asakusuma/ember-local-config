'use strict';

var merge = require('merge');
var path = require('path');
var relative = require('require-relative');
var walkSync = require('walk-sync');

function endsWith(base, suffix) {
  return base.substr(-suffix.length) === suffix;
}

module.exports = {
  name: 'ember-local-config',
  config: function(env, baseConfig) {
    var combinedLocalConfig = {};

    var configDirectory = path.dirname(this.project.configPath());
    walkSync(configDirectory).filter(function(filePath) {
      // We only want to pull in files that end in .local.js
      return endsWith(path.basename(filePath), '.local.js');
    }).forEach(function(filePath) {
      var fullPath = path.join(configDirectory, filePath);
      if (!path.isAbsolute(fullPath)) {
        fullPath = '.' + path.sep + fullPath;
      }
      var localConfig = relative(fullPath)(env);
      merge(combinedLocalConfig, localConfig);
    });

    return combinedLocalConfig;
  }
};
