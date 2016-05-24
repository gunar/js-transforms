'use strict'

const fp = require('lodash/fp')

fp.forEach((i) => 1+1, [1, 2, 3])

// comments don't get replaced fp.forEach((i) => 1+1, [1, 2, 3])
