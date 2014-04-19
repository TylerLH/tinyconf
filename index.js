module.exports = function (opts) {
  opts = opts || {};
  var basePath = opts.path || process.cwd() + '/config';
  var environment = process.env.NODE_ENV || 'development';
  var fullPath = basePath + '/' + environment + '.json';
  try {
    var conf = require(fullPath);
  } catch (e) {
    console.error("tinyconf: Couldn't find config file (%s). Check to make sure it exists or path option is set.", fullPath)
  } finally {
    return conf;
  }
}