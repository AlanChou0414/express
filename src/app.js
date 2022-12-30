const express = require('express');

require('dotenv').config();

// const middlewares = require('./middlewares');
const apiRouter = require('./routers/api');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'This is server',
  });
});

app.use('/api', apiRouter);

module.exports = app;
