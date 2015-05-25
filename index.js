var _ = require('underscore');
var fs = require('fs');
var path = require('path');
var BitArray = require('bit-array');

// TODO parse label buffer into 4-bit uintegers
// TODO parse image buffer into 8-bit uintegers

function get_images (fp, n, m) {
  var buffer = new Buffer(60008);
  var fd = fs.openSync(fp, 'r');
  fs.readSync(fd, buffer, 0, 16, 0);
  fs.readSync(fd, buffer, 8 * n, 8 * m, null);
  // file metadata, in case we need it
  var magic_number = buffer.readUInt32BE(0);
  var num_items = buffer.readUInt32BE(4);
  var num_rows = buffer.readUInt32BE(8);
  var num_cols = buffer.readUInt32BE(12);
  var pixels = buffer.slice(16 + (8 * n * num_rows), 16 + (8 * m * num_cols)).toJSON().data;

  return {
    magic_number: magic_number,
    total_num_items: num_items,
    rows: num_rows,
    cols: num_cols,
    values: pixels,
    start: n,
    end: m
  };
}

function get_labels (fp, n, m) {
  var buffer = new Buffer(60008);
  var fd = fs.openSync(fp, 'r');
  fs.readSync(fd, buffer, 0, 8, 0);
  fs.readSync(fd, buffer, 8 * n, 8 * m, null);
  // file metadata, in case we need it
  var magic_number = buffer.readUInt32BE(0);
  var num_items = buffer.readUInt32BE(4);
  var labels = buffer.slice(8 + (8 * n), 8 + (8 * m)).toJSON().data;

  return {
    magic_number: magic_number,
    total_num_items: num_items,
    values: labels,
    start: n,
    end: m
  };
}

function get_training_images (n, m) {
  var fp = path.join(__dirname, 'data', 'train-images-idx3-ubyte');
  return get_images(fp, n, m);  
}

function get_training_labels (n, m) {
  var fp = path.join(__dirname, 'data', 'train-labels-idx1-ubyte');
  return get_labels(fp, n, m);
}

function get_testing_images (n, m) {

}

function get_testing_labels (n, m) {

}

module.exports = {
  training: function (n, m) {
    if (m === undefined) {
      m = n;
      n = 0;
    }

    var images = get_training_images(n, m);
    var labels = get_training_labels(n, m);

    return {
      images: images,
      labels: labels
    };
  },
  testing: function (n, m) {
    if (m === undefined) {
      m = n;
      n = 0;
    }
  }
};
