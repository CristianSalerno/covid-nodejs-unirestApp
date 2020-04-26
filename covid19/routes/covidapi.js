let express = require('express');
let router = express.Router();
const covidApi = require("../models/covidapi");

//Get All Countries
router.get(
    '/getAll',
    (req, res) => {
        covidApi.getAllCovidData().then((data) => {
            res.send(data)
            /* res.render('covidData', {
                newConfirmed: data.Global.NewConfirmed,
                newDeaths: data.Global.NewDeaths,
                totalDeaths: data.Global.TotalDeaths,
                newRecovered: data.Global.NewRecovered
            }) */
        })
            .catch(err => console.log(err))
    })


//Get by country 
router.get(
    '/:country',
    (req, res) => {
        covidApi.getCovidDataByCountry(req.params.country).then((data) => {
            res.send(data)
        })
            .catch(err => console.log(err))
    }
)
/* 
router.get('/', function (req, res, next) {
    res.render('covidData', { title: 'Covid-19 Data' })
}); */


module.exports = router;