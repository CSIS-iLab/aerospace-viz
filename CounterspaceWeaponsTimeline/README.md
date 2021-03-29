# D3 Starter for ChinaPower

A d3.js data visualization starter for the ChinaPower project. It includes a data parser to convert a CSV file to JSON, reusable branded components, and more.

This visualization is designed to be embedded onto the site via an iFrame.

## To Run

1. Run `npm install` to install project dependencies
2. Run `npm start` to start local development server

## To Build

1. Run `npm build`

## Data

If you need to convert your data from CSV to JSON, you can do so by running `npm run data`. This will run `/data/data-parser.js`, which converts the specified CSV to a JSON file which is moved to `/src/data/`. If you need to do any parsing of the data to get it into the correct format, it is recommended that you do it here.

## Styles

The chart styles reflect the [ChinaPower Styleguide](https://csis-ilab.github.io/ilab-styleguide/China%20Power.html). Any custom styles should be added to the `/src/scss/chart/` directory and included in `/src/scss/main.scss`.

## Components

This starter includes the following components that can be used for the visuals.

### Tooltip

Tooltips are added using [tippy.js](https://atomiks.github.io/tippyjs/). See the Tippy docs for details.

### Buttons

Create a button group by passing in an array of objects that contain a value & label. Clicking on a button will redraw the chart.

Example:

```js
const options = [
  { value: 'amount', label: 'Quantity' },
  { value: 'dollars', label: 'Dollars' },
]

Buttons.createButtons({
  selector: typeSelector,
  data: options,
  current: currentType,
  onClick() {
    currentType = this.getAttribute('data-value')
    Buttons.setSelectedButton(currentType)
    drawChart()
  },
})
```

### Dropdown Selector

Create a dropdown selector by passing in an array of objects that contain a value & label. Changing the selected value will redraw the chart.

Example with options derived from the data:

```js
const options = data.years.map((year) => ({ value: year, label: year }))

Dropdown.setup({
  selector: yearSelector,
  name: 'filter-year',
  data: options,
  current: currentYear,
  onChange: (e) => {
    drawChart()
  },
})
```
