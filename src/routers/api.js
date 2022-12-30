const express = require('express');

const router = express.Router();

// databases
const userlist = [{
  id: 1,
  username: 'Alan',
  age: 27,
}];

// http://localhost:3001/api/userslist
router.get('/userslist', (req, res) => {
  res.json({
    status: res.statusCode,
    success: true,
    userlist,
  });
});

router.post('/userslist', (req, res) => {
  const user = req.body;
  userlist.push({
    id: new Date().getTime(),
    ...user,
  });

  res.json({
    status: res.statusCode,
    success: true,
    userlist,
  });
});

module.exports = router;
