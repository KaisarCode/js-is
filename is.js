/* Is datatype */
var is = {};

// Is defined
is.def = function(v){
    return typeof v !== 'undefined';
};

// Is boolean
is.bool = function(v) {
    return typeof v == 'boolean';
};

// Is object
is.obj = function(v){
    return typeof v == 'object';
};

// Is array
is.arr = function(v){
    return Array.isArray(v);
};

// Is string
is.str = function(v){
    return typeof v == 'string';
};

// Is number
is.num = function(v) {
    return !isNaN(v);
};

// Is function
is.fun = function(v) {
    return typeof v == 'function';
};

// Is RegEx
is.rgx = function(v) {
    return v instanceof RegExp;
};

// Is empty
is.empty = function(v) {
    var out = false;
    if (!is.def(v)) out = true;
    if (is.str(v) && !v.length) out = true;
    if (is.arr(v) && !v.length) out = true;
    if (is.obj(v) && !Object.keys(v).length) out = true;
    return out;
};
