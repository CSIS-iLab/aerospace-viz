const widgetDom = document.querySelector('#filterWidget');
let currentInclination = 45
let currentSatellitesNum = 496
const map = L.map('map').setView([15, 28], 2.5);
// map.scrollWheelZoom.disable();

L.tileLayer('https://api.mapbox.com/styles/v1/ilabmedia/cjhs1kai005bc2sk8vgh79d8d/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw', {
  maxZoom: 18
}).addTo(map);

map.attributionControl.addAttribution('<a href="https://aerospace.csis.org">CSIS Aerospace Security</a>')

const client = new carto.Client({
  apiKey: 'f4h1J9IvkITd1phg6vEXuA',
  username: 'csis'
});

const satelliteData = new carto.source.SQL(`
  SELECT *
  FROM aerospace_satellite_map_data
  WHERE number_satellites='${currentSatellitesNum}' AND inclination='${currentInclination}'
  `);

const satelliteStyle = new carto.style.CartoCSS(`
  #layer {
    polygon-fill: ramp([coverage], (#fde0c5, #facba6, #f8b58b, #f59e72, #f2855d, #ef6a4c, #eb4a40), quantiles);
    polygon-opacity: 0.7;
  }
  #layer::outline {
    line-width: 0;
  }
  `);
const satelliteLayer = new carto.layer.Layer(satelliteData, satelliteStyle, {
  featureOverColumns: ['size', 'coverage']
});

const threatCountriesData = new carto.source.SQL(`
  SELECT *
  FROM world_borders
  WHERE iso3 IN ('RUS', 'IRN', 'CHN', 'PRK')
  `);
const threatCountriesStyle = new carto.style.CartoCSS(`
  #layer::outline {
    line-width: 1;
    line-opacity: 0.6;
  }
  `);
const threatCountries = new carto.layer.Layer(threatCountriesData, threatCountriesStyle)

client.addLayers([threatCountries, satelliteLayer]);
client.getLeafletLayer().addTo(map);

const popup = L.popup({ closeButton: false });
satelliteLayer.on(carto.layer.events.FEATURE_OVER, featureEvent => {
  const coverage = featureEvent.data.coverage.toString()
  popup.setLatLng(featureEvent.latLng);
  popup.setContent(`Number of satellites at this latitude: ${coverage}`);
  if (!popup.isOpen()) {
    popup.openOn(map);
  }
});

satelliteLayer.on(carto.layer.events.FEATURE_OUT, featureEvent => {
  popup.removeFrom(map);
});

/*----------  Legend  ----------*/
satelliteLayer.on('metadataChanged', function(event) {
  event.styles.forEach(function (styleMetadata) {
    renderLegend(styleMetadata)
  });
});

function renderLegend(metadata) {
  document.getElementById('legend-min').innerHTML = metadata.getMin();
  document.getElementById('legend-max').innerHTML = metadata.getMax();
  if ( metadata.getMin() ) {
    document.getElementById('legend-bar').classList.remove('is-hidden')
    document.getElementById('noCoverage').classList.add('is-hidden')
  } else {
    document.getElementById('legend-bar').classList.add('is-hidden')
    document.getElementById('noCoverage').classList.remove('is-hidden')
  }
}


/*----------  Inclination Widget  ----------*/
const inclinationDataview = new carto.dataview.Category(satelliteData, 'inclination', {
  limit: 100
});

inclinationDataview.on('dataChanged', data => {
  const inclinationsDom = filterWidget.querySelector('.js-inclinations');

  inclinationsDom.onchange = event => {
    currentInclination = event.target.value;
    filterByInclinationAndSatelliteNum(currentInclination, currentSatellitesNum);
  };
});

/*----------  Sizes Widget  ----------*/
const sizeDataview = new carto.dataview.Category(satelliteData, 'number_satellites', {
  limit: 100
});

sizeDataview.on('dataChanged', data => {
  const sizesDom = filterWidget.querySelector('.js-size');

  sizesDom.onchange = event => {
    currentSatellitesNum = event.target.value;
    filterByInclinationAndSatelliteNum(currentInclination, currentSatellitesNum);
  };
});

function filterByInclinationAndSatelliteNum(inclination, satellitesNum) {
  let query = `
  SELECT *
  FROM aerospace_satellite_map_data
  WHERE number_satellites='${satellitesNum}' AND inclination='${inclination}'
  `;
  satelliteData.setQuery(query);
}

client.addDataviews([sizeDataview, inclinationDataview]);