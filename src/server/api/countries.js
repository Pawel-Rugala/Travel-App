const fetch = require("node-fetch");

const countries = async (countryCode) => {
 const res = await fetch(
  `https://restcountries.eu/rest/v2/alpha/${countryCode}`
 );
 try {
  const newData = await res.json();
  if (newData.capital) {
   const {
    capital,
    region,
    subregion,
    population,
    nativeName,
    currencies,
    languages,
    flag,
   } = newData;
   return {
    capital,
    region,
    subregion,
    population,
    nativeName,
    currencies,
    languages,
    flag,
   };
  } else {
   throw "no data";
  }
 } catch (err) {
  console.log("error", err);
 }
};

module.exports = countries;
