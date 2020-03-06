var basemap = L.tileLayer(
  'https://api.mapbox.com/styles/v1/ilabmedia/cjtt0jqiq01c51fs1r2sb4hl4/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw',
  {}
);
mapbox://styles/ilabmedia/cjtt0jqiq01c51fs1r2sb4hl4

var map = L.map("map", {
  center: [12.95, 77.49],
  zoom: 3,
  maxZoom: 12,
  scrollWheelZoom: true,
  minZoom: 3,
  zoomControl: true,
  layers: [basemap],
  attributionControl: false
});

const client = new carto.Client({
  apiKey: "3W5HgCXM23QVjB8bFW413w",
  username: "csis"
});

const jammedPlacesSource = new carto.source.SQL(
  "SELECT * FROM copy_of_gps_jamming_in_the_mediterranean_sea"

);
const jammedPlacesStyle = new carto.style.CartoCSS(`
        #layer {
          marker-width: 16.5;
          marker-fill: #f9bc65;
          marker-fill-opacity: 0.9;
          marker-allow-overlap: true;
          marker-line-width: 0;
          marker-line-color: #FFFFFF;
          marker-line-opacity: 1;
        }
      `);

const jammedPlacesLayer = new carto.layer.Layer(
  jammedPlacesSource,
  jammedPlacesStyle,
  {
    featureOverColumns: [
      "location_as_reported",
      "date",
    ]
  }
);

client.addLayer(jammedPlacesLayer);

client
  .getLeafletLayer()
  .bringToFront()
  .addTo(map);

const popup = L.popup({ closeButton: true });

jammedPlacesLayer.on(carto.layer.events.FEATURE_CLICKED, createPopup);

function createPopup(event) {
  popup.setLatLng(event.latLng);

  if (!popup.isOpen()) {
    var data = event.data;
    var content = "<div>";

    var keys = [
      "location_as_reported",
      "date",
    ];

    content += `
    <div class="popupHeaderStyle"> 
      ${data.location_as_reported}
    </div> 
    <div class="popupEntryStyle"> 
      ${data.date}
    </div>
    `
    popup.setContent("" + content);
    popup.openOn(map);
  }
}

L.control
  .attribution({
    position: "bottomright"
  })
  .setPrefix(
    'Data by <a href="https://aerospace.csis.org" target="_blank">CSIS Aerospace</a>, Leaflet contributors'
  )
  .addTo(map);

// var checks = Array.from(
//   document.querySelectorAll(".type_of_asset ul input")
// ).map(function (checkbox) {
//   return checkbox.name;
// });

// var filter_checks = new carto.filter.Category("type_of_asset", {
//   notIn: checks
// });

// document
//   .querySelector(".type_of_asset ul")
//   .addEventListener("click", function (e) {
//     var checkbox = e.target.type === "checkbox" ? e.target : null;

//     if (checkbox) {
//       var checked = Array.from(
//         document.querySelectorAll(".type_of_asset ul input:checked")
//       ).map(function (checkbox) {
//         return checkbox.name;
//       });

//       var notChecked = checks.filter(function (name) {
//         return checked.indexOf(name) < 0;
//       });

//       var filter_checked = new carto.filter.Category("type_of_asset", {
//         in: checked
//       });

//       var filter_notChecked = new carto.filter.Category("type_of_asset", {
//         notIn: notChecked
//       });

//       var filters =
//         checkbox.name === "OTHERS" && checkbox.checked
//           ? [filter_checks, filter_checked]
//           : checkbox.name === "OTHERS" && !checkbox.checked
//             ? [filter_checked]
//             : [filter_notChecked];

//       jammedPlacesSource.getFilters().forEach(function (f) {
//         jammedPlacesSource.removeFilter(f);
//       });

//       jammedPlacesSource.addFilter(new carto.filter.OR(filters));
//     }
//   });
