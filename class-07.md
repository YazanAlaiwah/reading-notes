# class-07

#### Tables

tabe represents the info in grid format and its allow us to understand complex.
each block in the grids is referred to as a **table cell**.

example of table structure

```html
<table>
  <tr>
    <td>15</td>
    <td>15</td>
    <td>30</td>
  </tr>
  <tr>
    <td>45</td>
    <td>60</td>
    <td>45</td>
  </tr>
  <tr>
    <td>60</td>
    <td>90</td>
    <td>90</td>
  </tr>
</table>
```

`<table>` -> its used to create a table

`<tr>` -> its stand for table row
`<td>` ->Each cell of a table is
represented using a <td>
element. (The td stands for
table data.)

`<th>` -> The <th> element is used just like the <td> element but its
purpose is to represent the heading for either a column or
a row.

`colspan` -> its an attribute will make the row have multiy columns

`rowspan` -> its an attribute will make the columns have multiy row

#### Objects

there is two type of objects Literal notation and Constructior notation

literal notation example

```javascript
var obj = {
  name: 'yazan',
  age: 24,
  des: function() {
    return this.name + this.age;
  }
};
```

Constructior notation

```javascript
function Obj(name, age) {
  this.name = name;
  this.age = age;
  this.des = function() {
    return this.name + this.age;
  };
}

var obj = new Obj('yaza', 24);
```
we can change the object in both type by using the dot `obj.gender = 'male'`