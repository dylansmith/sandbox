var glob = require('glob'),
    path = require('path'),
    srcdir = path.join(__dirname, '_input'),
    targetdir = path.join(__dirname, '_output');

module.exports = {

  getPaths: function(srcPattern, callback) {
    srcPattern = srcPattern || '*.*';
    var paths = [];
    var srcfiles = path.join(srcdir, srcPattern);

    glob(srcfiles, {}, function (err, files) {
      if (err) {
        return callback(err);
      }

      files.forEach(function(f) {
        var fp = path.resolve(f),
            fn = path.basename(fp),
            tp = path.join(targetdir, fn);

        paths.push({input: fp, output: tp});
      });

      callback(null, paths);
    });
  }

};
