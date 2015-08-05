var getConfigPath = require('./../../lib/utils').getConfigPath;

module.exports = {
  description: 'A local config file',
  normalizeEntityName: function(entityName) {
    entityName = entityName || 'config';
    return entityName;
  },
  fileMapTokens: function(options) {
    return {
      __config__: function(options) {
        return getConfigPath();
      }
    }
  }
};
