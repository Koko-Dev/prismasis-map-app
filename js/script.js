const map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -5,
});

const bounds = [[0,0], [1000,1000]];
const image = L.imageOverlay('assets/map.jpg', bounds).addTo(map);
map.fitBounds(bounds);

const image = L.imageOverlay('assets/map.png', bounds).addTo(map);