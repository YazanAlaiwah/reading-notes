# read 3

## Mustache.js

#### What is Mustache

> Javascript templating is a fast and efficient technique to render client-side view templates with Javascript by using a JSON data source.

#### How to install

_With Yarn:_
`$ yarn add mustache-express`
_with NPM:_
`$ npm install mustache --save`

## flexbox

#### What is flex

> its a proprty help you to layouts the HTML elements

#### usage

its start with type `display:flex` in the container by defulte its layout in row start to end.

example of its proprtys

1. flex-direction

   | value          | usage                                                 |
   | -------------- | ----------------------------------------------------- |
   | row            | (default): left to right in ltr; right to left in rtl |
   | row-reverse    | right to left in ltr; left to right in rtl            |
   | column         | same as row but top to bottom                         |
   | column-reverse | same as row-reverse but bottom to top                 |

2. flex-wrap

   | value            | usage                                                         |
   | ---------------- | ------------------------------------------------------------- |
   | wrap             | flex items will wrap onto multiple lines, from top to bottom. |
   | wrap-reverse     | flex items will wrap onto multiple lines from bottom to top.  |
   | nowrap (default) | all flex items will be on one line                            |

3. justify-content

   | value                | usage                                                                                                  |
   | -------------------- | ------------------------------------------------------------------------------------------------------ |
   | flex-start (default) | items are packed toward the start of the flex-direction.                                               |
   | flex-end             | items are packed toward the end of the flex-direction.                                                 |
   | start                | items are packed toward the start of the writing-mode direction.                                       |
   | end                  | items are packed toward the end of the writing-mode direction.                                         |
   | center               | items are centered along the line                                                                      |
   | space-evenly         | items are distributed so that the spacing between any two items (and the space to the edges) is equal. |

4. falign-items

   | value          | usage                                                 |
   | -------------- | ----------------------------------------------------- |
   | stretch (default)| stretch to fill the container (still respect min-width/max-width)|
   |flex-start / start / self-start| items are placed at the start of the cross axis. The difference between these is subtle, and is about respecting the flex-direction rules or the writing-mode rules.  |
   | flex-end / end / self-end|items are placed at the end of the cross axis. The difference again is subtle and is about respecting flex-direction rules vs. writing-mode rules.   |
   | center|items are centered in the cross-axis    |
