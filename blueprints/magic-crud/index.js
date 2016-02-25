var path = require('path');

var getPathOption = function(options){
  var outputPath     = 'components';
  if (options.path) {
    outputPath = options.path;
  } else {
    if (options.path === '') {
      outputPath = '';
    }
  }
  return outputPath;
}

module.exports = {
  description: '',

  fileMapTokens: function() {
    return {
      __routepath__: function(options) {
        if (options.pod) {
          return path.join(options.podPath, options.dasherizedModuleName);
        }
        return 'routes';
      },
      __routename__: function(options) {
        if (options.pod) {
          return 'route';
        }
        return options.dasherizedModuleName;
      },
       __newroutename__: function(options) {
         if (options.pod) {
           return 'new/route';
         }
         return path.join(options.dasherizedModuleName, 'new');
       },
       __editroutename__: function(options) {
         if (options.pod) {
           return 'edit/route';
         }
         return path.join(options.dasherizedModuleName, 'edit');
       },
       __indexroutename__: function(options) {
         if (options.pod) {
           return 'index/route';
         }
         return path.join(options.dasherizedModuleName, 'index');
       },
       __showroutename__: function(options) {
         if (options.pod) {
           return 'show/route';
         }
         return path.join(options.dasherizedModuleName, 'show');
       }
    };
  }
};
