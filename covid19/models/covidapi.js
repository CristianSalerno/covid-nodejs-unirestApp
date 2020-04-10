const unirest = require("unirest");

const getAllCovidData = () => {
    unirest
        .get('https://api.covid19api.com/countries')
        .then((res) => {
            console.log(res.body)
        })
}

const getCovidDataByCountry = (pCountry) => {
    unirest
        .get(`https://api.covid19api.com/country/${pCountry}/status/confirmed/live`)
        .then((res) => {
            console.log(res.body)
        })
}

module.exports = {
    getAllCovidData: getAllCovidData,
    getCovidDataByCountry: getCovidDataByCountry,
}

