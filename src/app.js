const express = require('express');

require('dotenv').config();

const apiRouter = require('./routers/api');
const userRouter = require('./routers/user');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', apiRouter);
app.use('/api/user', userRouter);

module.exports = app;
