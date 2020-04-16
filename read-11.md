# read 11

### EJS 

#### What is EJS 
EJS is a simple templating language that lets you generate HTML markup with plain JavaScript.

we start ejs by install it `npm i ejs` or by clienet side  `<script src="ejs.min.js"></script>`

##### Example

```html
<% if (user) { %>
  <h2><%= user.name %></h2>
<% } %>
```

##### Includes

includes help u to not write the same code twic *DRY* for example ensted of write the same header in every page you can write it in one file and include it any place 
sytax `<%-include('path of header start of  views')%>`








