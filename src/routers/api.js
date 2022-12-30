const express = require('express');

const router = express.Router();

const data = [{
  id: 1,
  title: 'Banana',
}];

// http://localhost:3001/api/products
router.get('/products', (req, res, next) => {
  res.json(data);
});

module.exports = router;
