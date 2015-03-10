var common = require('./common'),
    gm = require('gm'),
    config = {
      imageMagick: true,
      upper: 1632,
      lower: 1224,
      quality: 60
    };

if (config.imageMagick) {
  gm = gm.subClass({imageMagick: true});
}

common.getPaths('*.jpg', function(err, paths) {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  if (paths.length === 0) {
    console.log('No files found for processing');
    process.exit(0);
  }

  paths.forEach(function(p) {
    gm(p.input).size(function(err, val) {
      var newWidth = (val.width > val.height) ? config.upper : config.lower;
      gm(p.input)
        .options({imageMagick: config.imageMagick})
        .resize(newWidth)
        .quality(config.quality)
        .write(p.output, function(err) {
          console.log(err ? 'error: ' + err : 'processed: ' + p.output);
        });
    });
  });
});
