# My jscodeshift transforms

A collection of js transforms using [js-codeshift](https://github.com/facebook/jscodeshift).

## Usage

```
npm install -g jscodeshift
jscodeshift -t <transform.js> <file.js>
```

## Transforms

### [lodash-to-fp.js](lodash-to-fp.js)

It helps you refactor a codebase from lodash to lodash/fp. It assumes that you're using `_ = require('lodash')` and returns `fp = require('lodash/fp')`.

There's lots of room for improvement. That's why I'm assigning to the variable `fp`, so it's easier to fix conflicts. Then afterwards you can easily "find and replace" `fp -> _`.

This scripts takes a "better safe than sorry" approach, as to try to minimize false positives.
 e.g. `_.mapValues(myValues, myFunctions)` doesn't get converted because I'd need to confirm [myFunction's arity](https://github.com/lodash/lodash/wiki/FP-Guide#fixed-arity)

### [fp-to-_.js](fp-to-_.js)

It's intended to be used as a final step when converting a codebase from `lodash` to `lodash/fp`.

The transform above (`lodash-to-fp`) uses `fp` as an identifier, to allow you to manually fix conflicts.
This transform simply replaces the identifier `fp` for `_` everywhere.


## License

MIT [http://gunar.mit-license.org]()
