// your_script.js

// Create a Leaflet map centered at an initial location with a higher zoom level
const myMap = L.map('map').setView([55.871, 12.234], 14);  // Replace with your desired initial location and zoom level

// Add a tile layer (you can use other tile providers as well)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(myMap);

// Read data from CSV file
fetch('sne.csv')
    .then(response => response.text())
    .then(csvData => {
        const rows = csvData.split('\n').slice(1); // Skip header
        rows.forEach(row => {
            const columns = row.split(';');
            if (columns.length === 3) {
                const [lat, lon] = columns[0].split(',').map(parseFloat);
                const marker = L.marker([lat, lon]).addTo(myMap);
                marker.bindPopup(`<b>Grund:</b> ${columns[1]}<br><b>Tid:</b> ${columns[2]}`);
            }
        });
    })
    .catch(error => console.error('Error fetching CSV:', error));
