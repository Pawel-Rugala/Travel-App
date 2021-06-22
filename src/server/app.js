const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
const dotenv = require("dotenv");
const shortid = require("shortid");

// import APIs Functions
const geoNames = require("./api/geoNames");
const weatherbit = require("./api/weatherbit");
const wiki = require("./api/wiki");
const countries = require("./api/countries");
const pixabay = require("./api/pixabay");

dotenv.config();
const app = express();

app.use(cors());

//Here we are configuring express to use body-parser as middleware.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//api.geonames.org/postalCodeSearch?postalcode=9011&maxRows=10&username=demo

app.post("/fetch", async (req, res) => {
 const geoApi = process.env.GEO_API;
 const weatherApi = process.env.WEATHER_API;
 const pixabayApi = process.env.PIXABAY;
 const { location, checkin } = req.body;
 if (!req.body.location) {
  return res.status(400).send({ error: "wrong location" });
 }
 let container = {};
 let error = {};

 //Geolocation information
 await geoNames(location, geoApi)
  .then((data) => {
   if (data) {
    const { toponymName, lat, lng, countryCode, countryName } =
     data.geonames[0];
    container = {
     ...container,
     id: shortid.generate(),
     location: toponymName,
     userLocation: location,
     checkin,
     lat,
     lng,
     countryName,
     countryCode,
    };
   } else {
    throw "no data";
   }
  })
  .catch((err) => (error = { ...error, geo: err }));
 // WeahterBit current weather information
 await weatherbit(container.lat, container.lng, weatherApi)
  .then((data) => {
   if (data) {
    const { temp, sunrise, sunset, wind_spd } = data.data[0];
    container = {
     ...container,
     temp,
     sunrise,
     sunset,
     wind_spd,
    };
   } else {
    throw "no data";
   }
  })
  .catch((err) => (error = { ...error, weather: err }));
 await wiki(container.userLocation)
  .then((data) => {
   if (data) {
    container = {
     ...container,
     cityInfo: data,
    };
   } else {
    throw "no data";
   }
  })
  .catch((err) => (error = { ...error, wikiCity: err }));
 await wiki(container.countryName)
  .then((data) => {
   if (data) {
    container = {
     ...container,
     countryInfo: data,
    };
   } else {
    throw "no data";
   }
  })
  .catch((err) => (error = { ...error, wikiCoun: err }));
 await countries(container.countryCode)
  .then((data) => {
   if (data) {
    container = {
     ...container,
     ...data,
    };
   } else {
    throw "no data";
   }
  })
  .catch((err) => (error = { ...error, Coun: err }));
 await pixabay(pixabayApi, container.userLocation)
  .then((data) => {
   if (data) {
    container = {
     ...container,
     cityPreview: data.previewURL,
     cityWeb: data.webformatURL,
     cityLarge: data.largeImageURL,
    };
   } else {
    throw "no data";
   }
  })
  .catch((err) => (error = { ...error, PicCity: err }));
 await pixabay(pixabayApi, container.countryName)
  .then((data) => {
   if (data) {
    container = {
     ...container,
     countryPreview: data.previewURL,
     countryWeb: data.webformatURL,
     countryLarge: data.largeImageURL,
    };
   } else {
    throw "no data";
   }
  })
  .catch((err) => (error = { ...error, PicCoun: err }));
 if (error.geo) {
  res.status(400).send(error);
 } else {
  res.send(container).status(200).end();
 }
});

module.exports = app;
