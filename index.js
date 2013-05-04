'use strict';

module.exports = function filterObj(obj, filter, thisObj) {
  var result = {},
  context = thisObj || null,
  key;

  if (typeof filter !== "function") {
    throw new TypeError('filter: Callback must be a function.');
  }

  for (key in obj) {
    if ( obj.hasOwnProperty(key) ) {
      if ( filter.call(context, obj[key], key, obj) ) {
        result[key] = obj[key];
      }
    }
  }

  return result;
};
