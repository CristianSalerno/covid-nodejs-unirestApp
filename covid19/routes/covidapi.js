let express = require('express');
let router = express.Router();
const covidApi = require("../models/covidapi");


//Get by country
let country = 'argentina'

covidApi.getAllCovidData();
covidApi.getCovidDataByCountry(country)


router.get('/', function (req, res, next) {
    res.render('covid', { title: 'Covid-19 Data' })
    res.send(res.body);
});


module.exports = router;