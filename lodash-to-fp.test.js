const _ = require('lodash')

// Iteratee Capped to one argument
// should replace
_.every([true, 1, null, 'yes'], Boolean);
_.every(users, { 'user': 'barney', 'active': false });
_.every(users, ['active', false]);
_.every(users, 'active');
_.every(users, (one) => true)
_.every(users, function (one) { return true })
// should NOT replace
_.every(users, aFunction)
_.every(users, (one, two) => true)
_.every(users, function (one, two) { return true })

// Iteratee Capped to two arguments
// Also, fixed arity of three
// should replace
_.reduce([1, 2], function(sum, n) { return sum + n }, 0);
_.reduce([1, 2], (sum, n) => sum + n, 0);
// should not replace
_.reduce([1, 2], function(sum, n) { return sum + n });
_.reduce([1, 2], (sum, n) => sum + n);
_.reduce([1, 2], function(sum, n, key) { return sum + n }, 0);
_.reduce([1, 2], (sum, n, key) => sum + n, 0);

// Fixed arity of one
// should replace
_.attempt(1)
// should not replace
_.attempt(1, 2)

// Fixed arity of two
// should replace
_.debounce(1, 2)
// should not replace
_.debounce(1)
_.debounce(1, 2, 3)

// Fixed arity of three
// should replace
_.slice(1, 2, 3)
// should not replace
_.slice(1)
_.slice(1, 2)
_.slice(1, 2, 3, 4)

// Fixed arity of four
// should replace
_.fill(1, 2, 3, 4)
// should not replace
_.fill(1)
_.fill(1, 2)
_.fill(1, 2, 3)

// Unchanged argument orders
// should replace but not rotate
_.add(1, 2)

// Custom argument order
// should not replace because not implemented
_.assignInWith(1, 2, 3)

// should replace
_.noop
