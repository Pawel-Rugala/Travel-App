const fetch = require("node-fetch");

const geoNames = async (location, key) => {
 const res = await fetch(
  `http://api.geonames.org/searchJSON?q=${location}&maxRows=1&username=${key}`
 );
 try {
  const newData = await res.json();
  if (newData.totalResultsCount > 0) {
   return newData;
  } else {
   throw "no data";
  }
 } catch (err) {
  console.log("GEO ERR:::" + err);
 }
};

module.exports = geoNames;
