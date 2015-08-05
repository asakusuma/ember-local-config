var relative = require('require-relative');

function getConfigPath() {
  // Get the ember-addon field from the host app's package.json
  var emberAddonConfig = relative('./package')['ember-addon'];

  // Set the default config path
  var configPath = './config';

  // Use the config path from host app's package.json if it exists
  if (emberAddonConfig && emberAddonConfig.configPath) {
    configPath = './' + emberAddonConfig.configPath;
  }

  return configPath;
}

module.exports = {
  getConfigPath: getConfigPath
};