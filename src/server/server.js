const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const dotenv = require('dotenv');

// import APIs Functions
const geoNames = require('./api/geoNames');

dotenv.config();
const app = express();

app.use(cors());

//Here we are configuring express to use body-parser as middleware.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//api.geonames.org/postalCodeSearch?postalcode=9011&maxRows=10&username=demo

http: app.get('/', (req, res) => {
  res.send('hello');
});

app.post('/fetch', async (req, res) => {
  const geoApi = process.env.GEO_API;
  const weatherApi = process.env.WEATHER_API;
  const pixabayApi = process.env.PIXABAY;
  const { location, checkin, checkout } = req.body;
  let container = {};
  //Geolocation information
  geoNames(location, geoApi)
    .then((data) => {
      if (data) {
        const { geonames } = data;
        container = { ...container, geonames };
      } else throw 'error';
    })
    .catch((err) => console.log('runs', err));

  //

  // await fetch(
  //   `http://api.geonames.org/searchJSON?q=${location}&maxRows=1&username=${geoApi}`
  // )
  //   .then((res) => res.json())
  //   .then((res) => {
  //     if (res.toponymName) {
  //       const { toponymName, lng, lat, countryName, countryCode } =
  //         res.geonames[0];
  //       data = {
  //         location: toponymName,
  //         lat,
  //         lng,
  //         countryName,
  //         countryCode,
  //       };
  //       // to sprawdzilem dziala
  //     } else {
  //       data = false;
  //     }
  //   })
  //   .catch((err) => console.log(err));
  // if (data) {
  //   await fetch(
  //     `https://api.weatherbit.io/v2.0/current?lat=${data.lat}&lon=${data.lng}&key=${weatherApi}`
  //   )
  //     .then((res) => res.json())
  //     .then((res) => {
  //       const { temp, sunrise, sunset, wind_spd } = res.data[0];
  //       data = {
  //         ...data,
  //         currentWeather: {
  //           temp,
  //           sunrise,
  //           sunset,
  //           wind_spd,
  //         },
  //       };
  //       console.log(data);
  //     })
  //     .catch((err) => console.log(err));
  //   await fetch(
  //     `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=${location}&formatversion=2&exsentences=10&exlimit=1&explaintext=1`
  //   )
  //     .then((res) => res.json())
  //     .then((res) => {
  //       const cityInfo = res.query.pages[0].extract;
  //       data = {
  //         ...data,
  //         cityInfo,
  //       };
  //       console.log(data);
  //     })
  //     .catch((err) => console.log(err));

  //   await fetch(`https://restcountries.eu/rest/v2/alpha/${data.countryCode}`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       const { capital, currencies, languages, flag } = res;
  //       console.log(capital, currencies, languages, flag);
  //     });

  //   await fetch(
  //     `https://pixabay.com/api/?key=${pixabayApi}&q=${data.location}&image_type=photo&pretty=true`
  //   )
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  // } else {
  //   console.log(`couldn't find a city of that name ${location}`);
  // }
});

app.listen(8081, function () {
  console.log('Example app listening on port 8081!');
});
