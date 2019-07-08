const axios = require('axios');

class BudgetApi {

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'https://www.budgetyourtrip.com/api/v3/',
      timeout: 5000,
      headers: { "X-API-KEY": process.env.BUDGET_API_KEY }
    });

    this.search = this.search.bind(this);
    this.cost = this.cost.bind(this);
    this.accommodations = this.accommodations.bind(this);
    this.highlights = this.highlights.bind(this);
    this.allCityInfo = this.allCityInfo.bind(this);
  }

  search(req, res) {

    this.axiosInstance.get(`search/locationdata/${req.query.s}`)
      .then(({ data }) => {
        console.log(data);
        res.json(data)
      })
      .catch(err => {
        console.log('Error has occurred:')
        console.log(err);
      });
  }

  cost(req, res) {

    this.axiosInstance.get(`costs/locationinfo/${req.query.c}`)
      .then(({ data }) => {
        console.log(data);
        res.json(data)
      })
      .catch(err => {
        console.log('Error has occurred:')
        return console.log(err);
      });

  }

  accommodations(req, res) {

    this.axiosInstance.get(`accommodation/location/${req.query.a}`)
      .then(({ data }) => {
        console.log(data);
        res.json(data)
      })
      .catch(err => {
        console.log('Error has occurred:')
        return console.log(err);
      });

  }

  highlights(req, res) {

    this.axiosInstance.get(`costs/highlights/${req.query.h}`)
      .then(({ data }) => {
        console.log(data);
        res.json(data)
      })
      .catch(err => {
        console.log('Error has occurred:')
        return console.log(err);
      });

  }

  allCityInfo(req, res) {
    Promise.all([this.cost({ query: { c: req.query.a } }), this.accommodations({ query: { a: req.query.a } }), this.highlights({ query: { h: req.query.a } })])
      .then(data => {
        res.json(data);
      })
      .then(data => {
        res.json(data);
      })
  }


}

module.exports = BudgetApi;