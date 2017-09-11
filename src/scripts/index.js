const firstLetterUpperCase = str =>
  str.replace(/(^\w)/, m => m.toUpperCase());

const firstLetterLowerCase = str =>
  str.replace(/(^\w)/, m => m.toLowerCase());

const toString = value =>
  Object.prototype.toString.call(value);

const isType = (type, value) =>
  `[object ${firstLetterUpperCase(type)}]` === toString(value);

export default {
  is(type, value) {
    if (!isType('string', type)) {
      throw new Error('type required must be a string!');
    }

    if (arguments.length === 2) {
      return isType(type, value);
    }

    return value => isType(type, value);
  },
  of(value) {
    const type = toString(value)
      .replace(/^\[object\s?(\w+)\]$/, '$1');

    return firstLetterLowerCase(type);
  },
};
