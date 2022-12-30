const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
  res.json({
    message: 'This is post router',
  });
});

module.exports = router;
