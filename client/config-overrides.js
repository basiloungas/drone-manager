const { injectBabelPlugin } = require('react-app-rewired');

console.log('asdasdasd');

module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config);
  return config;
};