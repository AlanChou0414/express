const express = require('express');

const router = express.Router();

// databases
const data = [{
  user_email: 'good@gmail.com',
  user_password: '123456',
}];

// http://localhost:3001/api/signup
router.get('/signup', (req, res) => {
  const member = req.body;
  data.push({ member });
  res.json({ member });
});

router.post('/signup', (req, res) => {
  const member = req.body;
  data.push(member);
  console.log(data);
  res.redirect('/signup.html');
  res.end();
});

module.exports = router;
