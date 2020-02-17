# Class-02.md

### Chapter 2 -> Text

html use tags to tell the browser the structure of the page these tags have two type like below

| block                  | inline                 |
| ---------------------- | ---------------------- |
| p                      | b, big, i, small, tt   |
| h1, h2, h3, h4, h5, h6 | kbd, strong, samp, var |
| ol, ul                 | br, img                |
| pre                    | button, input          |
| address                | label, select          |
| blockquote             | script, span, sub, sup |
| dl                     | map, q                 |
| div                    | abbr, acronym, cite    |
| fieldset               | code, dfn              |
| form                   | em                     |
| hr                     | object                 |
| noscript               | textarea               |
| table                  | a, bdo                 |

each tag have spicfic job to do like h1->h6 its contain the main titles in page and ol/ul it used to have order list and unorder list and div used to contain group of tags within one place like container

### Introducing CSS

CSS standerd for Cascading **Style Sheet** its used to give the structure of html the good looking and chenge it to colorfull and better layout

##### how its used

```css
h1 {
  color: red;
}
```

the above css will make big font with color of red its work like this

> `h1` its the target tag that you want to change and its name is selector
> `color` its the proprty that you want to change
> `red` its the value you want to make

##### type of it

External CSS -> wich have a css file and call it from html **best practice**
Internal CSS -> have `<Style>` tag in the head of html file

#### Javascript (JS)

##### type of data

1. string -> "Hello World!"
2. Number -> 1.25
3. Boolen -> true/false

##### varibels

its declere when you type `var` followed by the name of the varibel follow by = and the value
`var string = 'Hellow World!'`

you can change the value any time after declere it.

##### array

its declared like `new Array(1,2,3)` or shortcut `[1,2,3]` its like multi varibels in order index first its start with index 0

##### if statment

```javascript
var a = 3;
if (a < 5) {
  console.log("a less then 5");
} else {
  console.log("a greater then 5");
}
```

start with word if follow by parntheses inside it the condition follow by curly brackt in side it the code that you want to make if the condition is true
else to invoke if there is no condition is true
