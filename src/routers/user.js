const express = require('express');
const db = require('../../modules/connect-mysql');

const router = express.Router();

// http://localhost:3001/api/user/userlist
router.get('/userlist', (req, res, next) => {
  db.query('SELECT * FROM member', (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = router;
