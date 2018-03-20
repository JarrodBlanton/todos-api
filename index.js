'use strict'

const express = require('express');
const mongoose = require('mongoose');

const todoRoutes = require('./routes/todos');

const app = express();

/** ROUTES */
app.get('/', (req, res) => res.send('Hello World!'));

// Require all other routes
app.use('/api/todos', todoRoutes);

app.listen('8000', () => console.log('Listening on port 8000'));

// Need to export app in order to run tests!
module.exports = app;