console.log('trip planning!');
const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1IjoicmltMjNtYSIsImEiOiJjanI5bzZzc3AwanJ5NDNzN2NtYjVtanNnIn0.ULt50Rbi1xc4PAXeyO5GUw";

const map = new mapboxgl.Map({
  container: 'map',
  center: [-87.6354, 41.8885],
  zoom: 12,
  style: "mapbox://styles/mapbox/streets-v10"
});


//const marker = new mapboxgl.Marker(document.getElementById('marker')).setLngLat([-87.641, 41.895]).addTo(map);
const markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
new mapboxgl.Marker(markerDomEl).setLngLat([-87.641, 41.895]).addTo(map);
