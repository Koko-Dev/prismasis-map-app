// Initialize the map with a flat coordinate system
const map = L.map('map', {
    minZoom: -2,
    maxZoom: 1,
    crs: L.CRS.Simple // Use flat (Cartesian) projection for the image
});

// Define image bounds based on the actual dimensions of the image
const imageBounds = [[0, 0], [3321, 4088]]; // Bottom-left and top-right corners
console.log('Image Bounds:', imageBounds);

// Add the image overlay to the map
L.imageOverlay('images/maps/map.png', imageBounds).addTo(map);

// Automatically adjust the map to fit the image with padding
map.fitBounds(imageBounds, { padding: [50, 50] });

// Add zoom controls at the top-right corner
L.control.zoom({
    position: 'topright'
}).addTo(map);

// Add an example marker to the center of the image
const marker = L.marker([1660.5, 2044]) // Center of the image (3321/2, 4088/2)
    .addTo(map)
    .bindPopup('<b>Magical Forest</b><br>A mystical forest where trees whisper stories.');