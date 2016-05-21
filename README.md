# My jscodeshift transforms

A collection of the js transforms using [js-codeshift](https://github.com/facebook/jscodeshift).

## Usage

```js
npm install -g jscodeshift
jscodeshift -t <transform.js> <file.js>
```

## Transforms

### [lodash-to-fp](lodash-to-fp.js)

It helps you refactor a codebase from lodash to lodash/fp.
This scripts takes a "better safe than sorry" approach, as to try to minimize false positives.
 e.g. `_.mapValues(myValues, myFunctions)` doesn't get converted because I'd need to confirm [myFunction's arity](https://github.com/lodash/lodash/wiki/FP-Guide#fixed-arity)

## License

MIT [http://gunar.mit-license.org]()
