var PNGCrop = require('png-crop'),
    glob = require('glob'),
    path = require('path'),
    srcfiles = path.join(__dirname, 'src/*.png'),
    targetdir = path.join(__dirname, 'cropped'),
    config = {
      top: 0,
      left: 0,
      width: 1844,
      height: 1383
    };

glob(srcfiles, {}, function (er, files) {
  if (files.length === 0) {
    console.log('No files found matching pattern: %s', srcfiles);
    process.exit(0);
  }

  files.forEach(function(f) {
    var fp = path.resolve(f),
        fn = path.basename(fp),
        tf = path.join(targetdir, fn);

    PNGCrop.crop(fp, tf, config, function(err) {
      if (err) throw err;
      console.log('done:', tf);
    });
  });
});
