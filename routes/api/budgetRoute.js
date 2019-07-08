const express = require('express');
const router = express.Router();
const { budgetController } = require('../../controllers');


// Matches with "/api/budget"
router.route('/search')
  .get(budgetController.search)
router.route('/cost')
  .get(budgetController.cost)
router.route('/accommodations')
  .get(budgetController.accommodations)
router.route('/highlights')
  .get(budgetController.highlights)
router.route('/allcityinfo')
  .get(budgetController.allCityInfo)

module.exports = router;