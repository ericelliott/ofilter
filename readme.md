# ofilter

Similar to `Array.prototype.filter`, except that it works on objects, and returns an object.

## Usage

```
ofilter(object, callback[, thisObject])
```

## Parameters

`object` is the object you want to filter.

`callback` is a function that will be called for each key in `object`.

`thisObject` is an optional object to use for `this` inside `callback`.


```
var o = {
  a: {prop: 1},
  b: {prop: 'b'},
  c: {prop: 1}
},

filtered = ofilter(o, function (item) {
  return item.prop === 1;
});

ok(filtered.a && filtered.c,
  'should contain positive matches.'); // Pass

ok(!filtered.b,
  'should not contain negative matches.'); // Pass
```


## Crazy talk

This (along with several other common functional iterators) really needs to be part of the JavaScript specification. I can't recommend actually extending the `Object` prototype, but if you use `ofilter()` enough, maybe eventually, if we all believe hard enough, it will magically appear in a future version of the ECMAScript specification.


```
if (!Object.prototype.filter) {
  Object.prototype.filter = function (callback, thisObject) {
    return ofilter(this, callback, thisObject);
  }
}

var obj = {a: 'a', b: 'b'};

var a = obj.filter(function (item) {
  return item === 'a';
});

t.same(a, {a: 'a'},
  'should work like Array.prototype.filter(). Come on, TC39!');
```
