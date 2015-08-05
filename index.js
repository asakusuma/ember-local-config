/* jshint node: true */
'use strict';

var walkSync = require('walk-sync');
var relative = require('require-relative');
var merge = require('merge');
var getConfigPath = require('./lib/utils').getConfigPath;

module.exports = {
  name: 'ember-local-config',
  config: function (env, baseConfig) {
    var combinedLocalConfig = {};

    var configPath = getConfigPath();

    walkSync(configPath).filter(function(path) {
      // We only want to pull in files that end in .local.js
      return path.split('/').pop().substr(-9) === '.local.js';
    }).forEach(function(path) {
      var fullPath = configPath + '/' + path;
      var localConfig = relative(fullPath)(env);
      merge(combinedLocalConfig, localConfig);
    });

    return combinedLocalConfig;
  }
};
