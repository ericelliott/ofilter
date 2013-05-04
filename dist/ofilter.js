(function(e){if("function"==typeof bootstrap)bootstrap("ofilter.js",e);else if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else if("undefined"!=typeof ses){if(!ses.ok())return;ses.makeOfilterjs=e}else"undefined"!=typeof window?window.ofilterjs=e():global.ofilterjs=e()})(function(){var define,ses,bootstrap,module,exports;
return (function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
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

},{}]},{},[1])(1)
});
;