# class-03

#### lists

list have two type oreder `ol` and un oreder list `ul`

```html
<ul>
  <li>apple</li>
  <li>orange</li>
  <li>mango</li>
</ul>
<ol>
  <li>apple</li>
  <li>orange</li>
  <li>mango</li>
</ol>
```

reulte

> - apple
> - orange
> - mango
>   1- apple
>   2- orange
>   3- mango

you can use list-style from css to change the type of style of dote

Definition Lists
`<dl> <dt> <dd>`
`<dl>` its to contain the `<dt> & <dd>`
`<dt>` its used for the definition term
`<dd>` its used for the definition

#### Boxing

every elemnt have its own box and its flexable with the contant and we have padding margin border
border -> its the edge of the box
padding -> its make a space between the edge of box and the contant in side it
margin -> its make a space between the box and what its around it

we have also

- border-style
- border-width
- border-color

#### SWITCH STATEMENTS

its like **if statement** but with easyer syntax its start with the keyword switch follow by pranthsese inside it the var that you want to make the condtion on it follow by curly bracket have case that compeare the var on the value and _:_ follow by the code you want to excute follow by break: and its have defulte part if nothing true will excute example

```javascript
var name = "Yazan";
switch (name) {
  case "Yazan":
    console.log("Hello Yazan");
    break;
  case "Omar":
    console.log("Hello Omar");
    break;
  default:
    msg = "Hello Mr";
    break;
}
```

###### if vs switch statements

| if                                                                                   | switch                                               |
| ------------------------------------------------------------------------------------ | ---------------------------------------------------- |
| no need to have else part                                                            | its have a default that will excute if nothing true  |
| With a series of if statements, it will run in all of it even if one of them is true | its have break it will let it stop in the first true |

##### true and false values

| true                         | false                                   |
| ---------------------------- | --------------------------------------- |
| The traditional Boolean true | The traditional Boolean fa 1 se         |
| Numbers other than zero      | The number zero                         |
| Strings with content         | NaN                                     |
| Number calculations          | Empty value                             |
| flase or 0 as string         | A variable with no value assigned to it |
