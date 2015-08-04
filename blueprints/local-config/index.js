module.exports = {
  description: 'A local config file',
  normalizeEntityName: function(entityName) {
    entityName = entityName || 'config';
    return entityName;
  }

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  // afterInstall: function(options) {
  //   // Perform extra work here.
  // }
};
