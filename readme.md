# mnist-data

The [MNIST](http://yann.lecun.com/exdb/mnist/) dataset, along with some javascript utilities. Even if you aren't programming in JS, you can use this repository to keep the dataset as a dependency of your project without committing the entire dataset to your codebase.

## Install

    npm install mnist-data

## Usage

```javascript
var mnist = require('mnist-data');
var training_data = mnist.training(0, 60000);
var testing_data = mnist.training(0, 10000);
```

## Test

  npm test

## License

The MNIST data does not belong to me, and so it is not included under this project's [ISC](http://opensource.org/licenses/ISC) license.
