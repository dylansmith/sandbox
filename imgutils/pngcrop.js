var common = require('./common'),
    PNGCrop = require('png-crop'),
    config = {
      top: 0,
      left: 0,
      width: 1844,
      height: 1383
    };

common.getPaths('*.png', function(err, paths) {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  if (paths.length === 0) {
    console.log('No files found for processing');
    process.exit(0);
  }

  paths.forEach(function(p) {
    PNGCrop.crop(p.input, p.output, config, function(err) {
      console.log(err ? 'error: ' + err : 'processed: ' + p.output);
    });
  });
});
