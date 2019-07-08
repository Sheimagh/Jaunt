// const axios = require('axios');
// const axiosInstance = axios.create({
//   baseURL: 'https://www.budgetyourtrip.com/api/v3/',
//   timeout: 5000,
//   headers: { "X-API-KEY": process.env.BUDGET_API_KEY }
// });

// module.exports = {
//   search: (req, res) => {

//     axiosInstance.get(`search/locationdata/${req.query.s}`)
//       .then(({ data }) => {
//         console.log(data);
//         res.json(data)
//       })
//       .catch(err => {
//         console.log('Error has occurred:')
//         console.log(err);
//       });
//   },
//   cost: (req, res) => {

//     axiosInstance.get(`costs/locationinfo/${req.query.c}`)
//       .then(({ data }) => {
//         console.log(data);
//         res.json(data)
//       })
//       .catch(err => {
//         console.log('Error has occurred:')
//         console.log(err);
//       });

//   },
//   accommodations: (req, res) => {

//     axiosInstance.get(`accommodation/location/${req.query.a}`)
//       .then(({ data }) => {
//         console.log(data);
//         res.json(data)
//       })
//       .catch(err => {
//         console.log('Error has occurred:')
//         console.log(err);
//       });

//   },
//   highlights: (req, res) => {

//     axiosInstance.get(`costs/highlights/${req.query.h}`)
//       .then(({ data }) => {
//         console.log(data);
//         res.json(data)
//       })
//       .catch(err => {
//         console.log('Error has occurred:')
//         console.log(err);
//       });

//   }
// }
const BudgetApi = require('../utils/budgetApiClass');
const { search, cost, accommodations, highlights, allCityInfo } = new BudgetApi();

module.exports = {
  search,
  cost,
  accommodations,
  highlights,
  allCityInfo
}