let express = require('express');
let router = express.Router();
const covidApi = require("../models/covidapi");

//Get All Countries

router.get(
    '/getAll',
    (req, res) => {
        covidApi.getAllCovidData().then((data) => {
            res.json(data)
        })
            .catch(err => console.log(err))
    })


//Get by country - mocked variable

router.get(
    '/:country',
    (req, res) => {
        covidApi.getCovidDataByCountry(req.params.country).then((data) => {
            res.json(data)
        })
    }
)



router.get('/', function (req, res, next) {
    console.log(res)
    res.render('covid', { title: 'Covid-19 Data' })
});


module.exports = router;