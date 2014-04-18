var spawn = require('child_process').spawn;
var path = require('path');
var fs = require('fs');

module.exports = function (options, fn) {
  options = options || {};

  var output = {};
  var cwd = options.cwd || process.cwd();
  var args = ['status', '-s'];
  if (options.branch) args.push('-b');

  var checkStatus = function (dir) {
    var process = spawn('git', args, {
      cwd: path.join(cwd, dir)
    });

    process.stdout.on('data', function (data) {
      fn(dir, data.toString());
    });

  };

  fs.readdir(cwd, function (err, contents) {
    contents.forEach(function (path) {
      fs.stat(path, function (err, stats) {
        if (stats.isDirectory()) checkStatus(path);
      });
    });
  });

};
