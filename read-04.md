# Read 04

### Css Grid

##### What is Grid

> CSS Grid , is a two-dimensional layout system that aims to do nothing less than completely change the way we design user interfaces

_Display Property_
An HTML element becomes a grid container when its display property is set to `grid` or `inline-grid`.

The vertical lines of grid items are called columns.
The horizontal lines of grid items are called rows.
The spaces between each column/row are called gaps.

You can adjust the gap size by using one of the following properties:

`grid-column-gap`
`grid-row-gap`
`grid-gap`

>The grid-column-gap property sets the gap between the columns
>The grid-row-gap property sets the gap between the rows
>The grid-gap property is a shorthand property for the grid-column-gap and the grid-row-gap properties

###### Grid Lines

The lines between columns are called column lines.

The lines between rows are called row lines.

Refer to line numbers when placing a grid item in a grid container:

###### The grid-template-columns Property

The grid-template-columns property defines the number of columns in your grid layout, and it can define the width of each column.
like that

`grid-template-columns: auto auto auto auto;`

>If you have more than 4 items in a 4 columns grid, the grid will automatically add a new row to put the items in.

