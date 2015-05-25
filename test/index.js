var assert = require('assert');
var mnist = require('../');

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
      assert.equal(this.training_data.images.values.length / 28, this.training_data.labels.values.length);
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
      assert.equal(this.testing_data.images.values.length / 28, this.testing_data.labels.values.length);
    });
  });
});
