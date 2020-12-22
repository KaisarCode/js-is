# Is datatype
[js] Check datatype only not to write typeof.

### Install
```
npm install kc-is
```

### Use
```js
var is = require('kc-is');
is.def('a'); // is defined
is.str('a'); // is string
is.num('a'); // is number
is.arr([]);  // is array
is.obj({});  // is object
is.fun('a'); // is function
is.rgx(/a/ig); // is regexp
```
