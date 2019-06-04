# aerospace-viz
Data visualizations for the Aerospace Security website. Basic charts such as line and bar graphs are created using [Highcharts](http://www.highcharts.com/), while others are custom built solutions using visualization libraries such as [d3.js](https://d3js.org/).

## Style Guide
Default Highcharts styles are defined in `globals/aerospace-highcharts-theme.js`. These styles incorporate the default color range and font styles, but can be overridden in individual project files when necessary.

**Default Color Range:** #196c95, #5db6d0, #f9bc65, #d66e42, #4f9793, #3e7a82, #4b5255

### Adjusting Dropdown Width
Sometimes the default dropdown for templates with multiple datasets is too big. If that is the case, put the following code insisde the `<head>` section of your `index.html` file **after** the links to the Global Stylesheet and adjust the value of `min-width` as necessary.
```
<style>
.datasets { min-width: 150px; }
</style>
```

## Publishing Data with Google Sheets
Whenever possible, data for the project should be kept in the `aerospace_viz` shared folder on Google Drive. In order to be used in the visualizations, the sheets must be published. Instructions for how to do that can be [found here](https://support.google.com/docs/answer/37579?hl=en). **Note:** Only approved users should ever have the ability to edit a data source.


