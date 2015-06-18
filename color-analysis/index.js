var colorguard = require('colorguard');
var _ = require('lodash');
var hb = require('handlebars');
var fs = require('fs');
var css = fs.readFileSync('./github.css', 'utf8');
var tmpl = fs.readFileSync('./output.tpl', 'utf8');
var colors = colorguard.inspect(css, {threshold: 3});

var map = {};
_.each(colors.collisions, function(item) {
  var clrs = [item.colors[0].rgb, item.colors[1].rgb].sort();
  var key = clrs.join('_');
  map[key] = {
    key: key,
    clr1: clrs[0],
    clr2: clrs[1],
    distance: item.distance,
    match: item
  };
});

map = _.sortBy(map, 'key');

var data = _.sortByOrder(_.values(map), {key: true});
var html = hb.compile(tmpl)({data: data});
fs.writeFileSync('./output.html', html);
