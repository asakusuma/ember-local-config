/* jshint node: true */
'use strict';

var walkSync = require('walk-sync');
var relative = require('require-relative');
var merge = require('merge');

module.exports = {
  name: 'ember-local-config',
  config: function (env, baseConfig) {
    var combinedLocalConfig = {};

    // Get the ember-addon field from the host app's package.json
    var emberAddonConfig = relative('./package')['ember-addon'];

    // Set the default config path
    var configPath = './config';

    // Use the config path from host app's package.json if it exists
    if (emberAddonConfig && emberAddonConfig.configPath) {
      configPath = './' + emberAddonConfig.configPath;
    }

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
