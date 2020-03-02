# Class 13

### localstorge

> localstorge is the place in the browser were you can store some informtion on it like auth or some data the related to the user and its key/value pair **new with HTML5**

##### usege

```javascript
localStorge.setItem['name'] = 'jack'
var item = localStorge.getItem['name']

console.log(item) /// jack
```
in the example code we store jack value in key called name in local storge and the ask for the value of name key 

methods in local storge 

1. setItem(): Add key and value to localStorage
2. getItem(): Retrieve a value by the key from localStorage
3. removeItem(): Remove an item by key from localStorage
4. clear(): Clear all localStorage
5. key(): Passed a number to retrieve nth key of a localStorage