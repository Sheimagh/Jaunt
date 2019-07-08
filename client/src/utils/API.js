import axios from "axios";

export default {
  // Gets Cities from Budget API
  getCities: function (city) {
    return axios.get(`/api/budget/search?s=${encodeURIComponent(city)}`);
  },
  // Get cost for specific city
  getCost: function (geoCode) {
    return axios.get(`/api/budget/cost?c=${encodeURIComponent(geoCode)}`);
  },
  // Get accommodations for specific city
  getAccommodations: function (geoCode) {
    return axios.get(`/api/budget/accommodations?a=${encodeURIComponent(geoCode)}`);
  },
  // Get highlights for specific city
  getHighlights: function (geoCode) {
    return axios.get(`/api/budget/highlights?h=${encodeURIComponent(geoCode)}`);
  },
  getAllCityInfo: function (geoCode) {
    return axios.get(`/api/budget/allcityinfo?a=${encodeURIComponent(geoCode)}`);
  }
};
