const fetch = require("node-fetch");

const weatherbit = async (lat, lng, key) => {
 const res = await fetch(
  `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lng}&key=${key}`
 );
 try {
  const newData = await res.json();
  if (newData.count > 0) {
   return newData;
  } else {
   throw "no data";
  }
 } catch (err) {
  console.log("error", err);
 }
};

module.exports = weatherbit;
