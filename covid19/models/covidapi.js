const unirest = require("unirest");

//Get all data from covid-19 Global
const getAllCovidData = () => {
    return new Promise((resolve, reject) => {
        unirest
            .get('https://api.covid19api.com/summary')
            .then((res) => {
                if (res != undefined)
                    resolve(res.body)
                else
                    reject('No data found')
            })
    })
}

//Get By Country
const getCovidDataByCountry = (pCountry) => {
    return new Promise((resolve, reject) => {
        unirest
            .get(`https://api.covid19api.com/country/${pCountry}/status/confirmed/live`)
            .then((res) => {
                if (res != undefined)
                    resolve(res.body)
                else
                    reject('No country data found')
            })
    })

}

module.exports = {
    getAllCovidData: getAllCovidData,
    getCovidDataByCountry: getCovidDataByCountry,
}

