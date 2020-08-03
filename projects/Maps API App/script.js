// api key
mapboxgl.accessToken = 'pk.eyJ1IjoiamVlYXNpc3RpbyIsImEiOiJja2NqeWFqY2IxNTk3MzFxaXBibGxvdWdmIn0.GEU4AJWEIjdmCvPlDAXApA';

// create new map
const map = new mapboxgl.Map({
  container: document.querySelector('#map'),
  style: 'mapbox://styles/mapbox/streets-v11',
  zoom: 4,
  center: [122.6217542, 12.9043]
});

// create marker
const addMarker = (props) => {
  const marker = new mapboxgl.Marker()
  .setPopup(new mapboxgl.Popup().setHTML(props.popup))
  .setLngLat(props.coords)
  .addTo(props.map);
};

const markers = [{
  map,
  coords: [122.6217542,
    12.9043],
  popup: '<h2 class="country">Philippines</h2>'
},
  {
    map,
    coords: [120.9667,
      14.6500],
    popup: '<h4>Caloocan City</h4>'
  },
  {
    map,
    coords: [121.0614,
      14.58691],
    popup: '<h4>Pasig City</h4>'
  }];

markers.map(marker => addMarker(marker));

// add marker on dblclick
map.on('dblclick', (e) => {
  // prevent from zooming
  e.preventDefault();
  const lng = e.lngLat.lng;
  const lat = e.lngLat.lat;
  addMarker({
    map, coords: [lng, lat], popup: `<p>lng: ${lng}</p> <p>lat: ${lat}</p>`
  })
})