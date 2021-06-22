const fetch = require("node-fetch");

const wiki = async (location) => {
 const res = await fetch(
  `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=${location}&formatversion=2&exsentences=10&exlimit=1&explaintext=1`
 );
 try {
  const newData = await res.json();
  if (newData.query.pages.length > 0) {
   return newData.query.pages[0].extract;
  } else {
   throw "no data";
  }
 } catch (err) {
  console.log("error", err);
 }
};

module.exports = wiki;
