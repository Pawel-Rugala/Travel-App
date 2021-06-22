const app = require("./app");
//This is necessary in orer to work in Heroku & Dev env
app.listen(process.env.PORT || 8081, function () {
 console.log("Example app listening on port 8081!");
});
