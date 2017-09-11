'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var firstLetterUpperCase = function firstLetterUpperCase(str) {
  return str.replace(/(^\w)/, function (m) {
    return m.toUpperCase();
  });
};

var firstLetterLowerCase = function firstLetterLowerCase(str) {
  return str.replace(/(^\w)/, function (m) {
    return m.toLowerCase();
  });
};

var toString = function toString(value) {
  return Object.prototype.toString.call(value);
};

var isType = function isType(type, value) {
  return '[object ' + firstLetterUpperCase(type) + ']' === toString(value);
};

exports.default = {
  is: function is(type, value) {
    if (!isType('string', type)) {
      throw new Error('type required must be a string!');
    }

    if (arguments.length === 2) {
      return isType(type, value);
    }

    return function (value) {
      return isType(type, value);
    };
  },
  of: function of(value) {
    var type = toString(value).replace(/^\[object\s?(\w+)\]$/, '$1');

    return firstLetterLowerCase(type);
  }
};