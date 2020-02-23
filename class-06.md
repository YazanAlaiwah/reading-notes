# Class 06

#### most difficult problem in dev

most difficult problem in dev is work without have the hole pic about what you work on if you dont know what you solve you can't solve't so you need to see the hole pic before you work of make your work in small steps

#### Objects

> Objects group together a set of variables and functions to create a model of a something you would recognize from the real world **objects like array but unorderlist**.

if variables in object its call propertys and the function called method example

```javascript
var obj = {
  Fname: 'yazan',
  Lname:'alaiwah',
  fullName: => this.Fname + ' ' + this.Lname;

};
```

you create an object with {} sympol in side it you type the property follow by : sympol and the value on it in example above the `Fname, Lname` are propertys and `fullName` is method will retrun the full name

#### Document Object Model (DOM)

its tell the browsers how should create a model of an HTML page and how JavaScript can access and update the contents of a web page while it is in the browser window

###### ACCESS THE ELEMENTS

there is more then one type of acsess the heml nodes

| INDIVIDUAL ELEMENT NODE | MULTIPLE ELEMENTS (NODELISTS) | TRAVERSING BETWEEN ELEMENT NODES |
| ----------------------- | ----------------------------- | -------------------------------- |


get El ement Byld () |getElementsByClassName()|parentNode  
querySe 1 ector () | getElementsByTagName() |previousSibl ing / nextSibl ing
| querySelectorAll() |firstChild / lastChild

###### Traversing the DOM

you can select element in another element in relation with these five proepties

parentNode -> its reference to continar of the selected element 
previousSibling/nextSibling ->  these properties find the before and next elements of the selcet element
firstChild/lastChild -> to have the first and last element of the select node


