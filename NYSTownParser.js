const axios = require('axios');
const { JSDOM } = require('jsdom');

const parseWikipediaData = async () => {
  try {
    const response = await axios.get(
      'https://en.wikipedia.org/w/api.php?action=parse&page=List_of_municipalities_in_New_York&section=2&prop=text&format=json'
    );

    const html = response.data.parse.text['*'];
    const dom = new JSDOM(html);
    const table = dom.window.document.querySelector('.wikitable.sortable');

    const municipalities = [];
    const rows = table.querySelectorAll('tbody tr');

    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      const cells = row.querySelectorAll('td');

      const municipality = {
        village: cells[0].textContent.trim() || '',
        county: cells[1].textContent.trim() || '',
        population: cells[2].textContent.trim() || '',
        land: cells[3].textContent.trim() || '',
        water: cells[4].textContent.trim() || '',
        coordinates: cells[5].textContent.trim() || '',
        geoId: cells[6].textContent.trim() || '',
        ansiCode: cells[7].textContent.trim() || '',
        notes: cells[8].textContent.trim() || '',
        town: cells[9].textContent.trim() || '',
      };

      municipalities.push(municipality);
    }

    return municipalities;
  } catch (error) {
    console.error('Error retrieving data from Wikipedia:', error);
    throw error;
  }
};

// Usage
parseWikipediaData()
  .then((municipalities) => {
    console.log(municipalities);
    // Use the retrieved municipality data as needed
  })
  .catch((error) => {
    // Handle the error
  });

  const fs = require('fs');

parseWikipediaData()
  .then((municipalities) => {
    const jsonData = JSON.stringify(municipalities, null, 2);
    fs.writeFileSync('municipalities.json', jsonData);
    console.log('Data written to municipalities.json');
  })
  .catch((error) => {
    console.error('Error retrieving data from Wikipedia:', error);
  });