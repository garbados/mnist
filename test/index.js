var assert = require('assert');
var mnist;
if (process.env.COVERAGE)
  mnist = require('../cov');
else
  mnist = require('../');

describe('mnist', function () {
  describe('training_data', function () {
    before(function () {
      this.training_data = mnist.training(100);
    });

    it('should return objects with the correct magic numbers', function () {
      assert.equal(this.training_data.labels.magic_number, 2049);
      assert.equal(this.training_data.images.magic_number, 2051);
    });

    it('should contain an array of 28x28 images', function () {
      assert.equal(this.training_data.images.rows, 28);
      assert.equal(this.training_data.images.cols, 28);
    });

    it('should have as many images as labels', function () {
      assert.equal(this.training_data.images.values.length, 100);
      assert.equal(this.training_data.images.values.length, this.training_data.labels.values.length);
    });

    it('should have label values all between 0 - 9 inclusive', function () {
      this.training_data.labels.values.forEach(function (i) {
        assert(i <= 9, i + " > 9");
        assert(i >= 0, i + " < 0");
      });
    });

    it('should have all pixel values between 0 - 255 inclusive', function () {
      this.training_data.images.values.forEach(function (rows) {
        rows.forEach(function (columns) {
          columns.forEach(function (pixel) {
            assert(pixel <= 255, pixel + " > 255");
            assert(pixel >= 0, pixel + " < 0");
          });
        });
      });
    });
  });

  describe('testing', function () {
    before(function () {
      this.testing_data = mnist.testing(100);
    });

    it('should return objects with the correct magic numbers', function () {
      assert.equal(this.testing_data.labels.magic_number, 2049);
      assert.equal(this.testing_data.images.magic_number, 2051);
    });

    it('should contain an array of 28x28 images', function () {
      assert.equal(this.testing_data.images.rows, 28);
      assert.equal(this.testing_data.images.cols, 28);
    });

    it('should have as many images as labels', function () {
      assert.equal(this.testing_data.images.values.length, 100);
      assert.equal(this.testing_data.images.values.length, this.testing_data.labels.values.length);
    });

    it('should have label values all between 0 - 9 inclusive', function () {
      this.testing_data.labels.values.forEach(function (i) {
        assert(i <= 9, i + " > 9");
        assert(i >= 0, i + " < 0");
      });
    });

    it('should have all pixel values between 0 - 255 inclusive', function () {
      this.testing_data.images.values.forEach(function (rows) {
        rows.forEach(function (columns) {
          columns.forEach(function (pixel) {
            assert(pixel <= 255, pixel + " > 255");
            assert(pixel >= 0, pixel + " < 0");
          });
        });
      });
    });
  });
});
