const express = require('express');
const router = express.Router();
const budgetApi = require('./budgetRoute');

router.use('/budget', budgetApi);

module.exports = router;