# aerospace-viz
Data visualizations for the Aerospace Security website. Basic charts such as line and bar graphs are created using [Highcharts](http://www.highcharts.com/), while others are custom built solutions using visualization libraries such as [d3.js](https://d3js.org/).

## Default Templates
Default templates that can be used as the basis for creating new Highcharts interactives can be found in the `_templates` folder.
- [Line Chart](https://github.com/CSIS-iLab/cpower-viz/tree/master/_templates/hc-line)
- [Bar Chart](https://github.com/CSIS-iLab/cpower-viz/tree/master/_templates/hc-bar)
- [Spline Chart](https://github.com/CSIS-iLab/cpower-viz/tree/master/_templates/hc-spline)
- [Area Chart](https://github.com/CSIS-iLab/cpower-viz/tree/master/_templates/hc-area)

## Style Guide
Default Highcharts styles are defined in `globals/aerospace-highcharts-theme.js`. These styles incorporate the default color range and font styles, but can be overridden in individual project files when necessary.

**Default Color Range:** #196c95, #5db6d0, #f9bc65, #d66e42, #4f9793, #3e7a82, #4b5255 

## Publishing Data with Google Sheets
Whenever possible, data for the project should be kept in the `aerospace_viz` shared folder on Google Drive. In order to be used in the visualizations, the sheets must be published. Instructions for how to do that can be [found here](https://support.google.com/docs/answer/37579?hl=en). **Note:** Only approved users should ever have the ability to edit a data source.

