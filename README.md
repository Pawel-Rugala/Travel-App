# Travel-App
 Simple travel planner where you get current weather information for specific location but also more information about the City itself and it's country. To display city or country picture I use pixabay.com
 App use service worker.

# App is deployed on Heroku
[Live Demo](https://travel-planner-app001.herokuapp.com/)

# StandOut
- Pull in an image for the country from Pixabay API when the entered location brings up no results (good for obscure localities).
- Integrate the REST Countries API to pull in data for the country being visited.
- Use Local Storage to save the data so that when they close, then revisit the page, their information is still there.
- Get Information about the city from Wikipedia. If not found get information about the country
  
 # How to launch application locally
 once the code is downloaded the steps are as follow:
- STEP 1: Run in terminal
 ```
npm i
 ```
- STEP 2: Build production files
```
npm run build
```
- STEP 3: Run application
```
npm start
```

# Development environmental
Dev app is running on port: 8080
- STEP 1: Run in terminal
 ```
npm i
 ```
- STEP 2: Kick-off server app
```
npm start
```
- STEP 3: Run dev application
```
npm run dev
```

# APIs
- [geoNames](https://www.geonames.org/)
- [weatherBit](https://www.weatherbit.io/)
- [Wikipedia](https://www.mediawiki.org/wiki/API:Main_page)
- [restCountries](https://restcountries.com/)
- [Pixabay](https://pixabay.com/api/docs/)

# Tests
Test are written using JEST framework to test app your run in terminal
```
npm run test
```