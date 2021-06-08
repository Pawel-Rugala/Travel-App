const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const dotenv = require('dotenv');

// import APIs Functions
const geoNames = require('./api/geoNames');
const weatherbit = require('./api/weatherbit');
const wiki = require('./api/wiki');
const countries = require('./api/countries');
const pixabay = require('./api/pixabay');

dotenv.config();
const app = express();

app.use(cors());

//Here we are configuring express to use body-parser as middleware.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//api.geonames.org/postalCodeSearch?postalcode=9011&maxRows=10&username=demo

app.get('/', (req, res) => {
  res.send('hello');
});

app.post('/fetch', async (req, res) => {
  const geoApi = process.env.GEO_API;
  const weatherApi = process.env.WEATHER_API;
  const pixabayApi = process.env.PIXABAY;
  const { location, checkin, checkout } = req.body;
  let container = {};

  //Geolocation information
  await geoNames(location, geoApi)
    .then((data) => {
      if (data) {
        const { toponymName, lat, lng, countryCode, countryName } =
          data.geonames[0];
        container = {
          ...container,
          location: toponymName,
          checkin,
          checkout,
          lat,
          lng,
          countryName,
          countryCode,
        };
      } else throw 'error';
    })
    .catch((err) => console.log('runs', err));

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
      }
    })
    .catch((err) => {
      console.log('runs', err);
    });

  await wiki(container.location)
    .then((data) => {
      container = {
        ...container,
        cityInfo: data,
      };
    })
    .catch((err) => {
      console.log('wiki', err);
    });

  await countries(container.countryCode)
    .then((data) => {
      container = {
        ...container,
        ...data,
      };
    })
    .catch((err) => {
      console.log('contry: ', err);
    });

  await pixabay(pixabayApi, container.location)
    .then((data) => {
      container = {
        ...container,
        ...data,
      };
    })
    .catch((err) => {
      console.log('pixabay: ', err);
    });

  res.send(container).status(200).end();
});

app.listen(8081, function () {
  console.log('Example app listening on port 8081!');
});
