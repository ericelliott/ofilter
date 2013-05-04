var test = require('tape'),
  ofilter = require('../index.js');

test('ofilter basics', function (t) {
  var o = {
    a: {prop: 1},
    b: {prop: 'b'},
    c: {prop: 1}
  },

  filtered = ofilter(o, function (item) {
    return item.prop === 1;
  });

  t.ok(filtered.a && filtered.c,
    'should contain positive matches.');

  t.ok(!filtered.b,
    'should not contain negative matches.');

  t.end();
});

test('ofilter params', function (t) {
  var o = {a: '1'};

  ofilter(o, function (item, key, obj) {
    t.ok(item === '1' && key === 'a' && obj === obj,
      'should pass all expected params to callback.');
    t.end();
  });
});

test('ofilter thisObj', function (t) {
  var o = {a: '1'},
    thisObj = {b: '2'};

  ofilter(o, function (item, key, obj) {
    t.ok(this === thisObj,
      'should call with thisObj.');
    t.end();
  }, thisObj);
});

test('TC39 example', function (t) {
  if (!Object.prototype.filter) {
    Object.prototype.filter = function (callback, thisObject) {
      return ofilter(this, callback, thisObject);
    }
  }

  var a = ({
    a: 'a',
    b: 'b'
  }).filter(function (item) {
    return item === 'a';
  });

  t.same(a, {a: 'a'},
    'should work like Array.prototype.filter(). Come on, TC39!');

  t.end();
})
