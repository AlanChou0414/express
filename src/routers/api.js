const express = require('express');
const db = require('../../modules/connect-mysql');

const router = express.Router();

// http://localhost:3001/api/signup
router.post('/signup', (req, res) => {
  const member = req.body;
  const { user_email, user_password } = member;
  const query = 'INSERT INTO member (member_email, member_password) VALUES (?, ?)';
  const value = [user_email, user_password];
  console.log(member);
  db.query(query, value, (err, result) => {
    if (err) throw err;
  });
  res.redirect('/userlist.html');
});

// TODO:
router.post('/signin', (req, res) => {
  const member = req.body;
  const { user_email, user_password } = member;
  const query = 'SELECT `member_email`, `member_password` FROM `member` WHERE (?)';
  const value = [user_email];
  db.query(query, value, (err, result) => {
    if (err) throw err;
  });
  res.redirect('/userlist.html');
});

module.exports = router;
