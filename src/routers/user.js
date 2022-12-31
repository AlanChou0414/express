const express = require('express');
const dayjs = require('dayjs');

const router = express.Router();

// databases
const randomEmail = (n) => {
  let result = '';
  for (let i = 1; i <= n; i++) {
    result += Math.floor(Math.random() * 9) + 1;
  }
  return `${result}@gmail.com`;
};

const data = [
  {
    id: dayjs().format('YYYYMMDDHHmmss'),
    user_email: randomEmail(10),
    user_password: '123456',
    create_at: dayjs().format('YYYY-MM-DD-HH:mm'),
  },
  {
    id: dayjs().format('YYYYMMDDHHmmss'),
    user_email: randomEmail(10),
    user_password: '123456',
    create_at: dayjs().format('YYYY-MM-DD-HH:mm'),
  },
  {
    id: dayjs().format('YYYYMMDDHHmmss'),
    user_email: randomEmail(10),
    user_password: '123456',
    create_at: dayjs().format('YYYY-MM-DD-HH:mm'),
  },
];

// http://localhost:3001/api/user/userlist
router.get('/userlist', (req, res, next) => {
  res.json(data);
});

module.exports = router;
