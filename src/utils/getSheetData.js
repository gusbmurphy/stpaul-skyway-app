const apiKey = process.env.REACT_APP_SHEETS_API_KEY;
const sheetId = '129YFcyUWJw96py4wCgUQ0Et0sewM2mOghLu_BZ7yrFE';
const range = 'Sheet1!A2:E';
const endpoint = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

// Fetching data from the Google Sheet: https://docs.google.com/spreadsheets/d/129YFcyUWJw96py4wCgUQ0Et0sewM2mOghLu_BZ7yrFE/edit#gid=0

// eslint-disable-next-line consistent-return
async function getSheetData() {
  try {
    const response = await fetch(endpoint);

    if (response.ok) {
      const jsonResponse = await response.json();
      const { values } = jsonResponse;
      return values;
    }
  } catch (error) {
    console.log(error);
  }
}

export default getSheetData;
