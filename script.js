// Create a Leaflet map centered at an initial location with a higher zoom level
const myMap = L.map('map').setView([55.871, 12.234], 14);  // Replace with your desired initial location and zoom level

// Add a tile layer (you can use other tile providers as well)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(myMap);

// Add markers to the map (replace this with your data)

// Marker 1
const marker1 = L.marker([55.87101675123631, 12.245590586706486]).addTo(myMap);
marker1.bindPopup("Vej lukket pga sne");

// Marker 2
const marker2 = L.marker([55.86697143854963, 12.222673793449571]).addTo(myMap);
marker2.bindPopup("Another location");

// Marker 3
const marker3 = L.marker([55.875, 12.23]).addTo(myMap);
marker3.bindPopup("Yet another location");
