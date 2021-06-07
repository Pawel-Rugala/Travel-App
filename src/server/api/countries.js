const fetch = require('node-fetch');

const countries = async (countryCode) => {
  const res = await fetch(
    `https://restcountries.eu/rest/v2/alpha/${countryCode}`
  );
  try {
    const newData = await res.json();
    console.log(newData);
    throw 'no data';
  } catch (err) {
    console.log('error', err);
  }
};

module.exports = countries;
