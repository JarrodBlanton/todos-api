'use strict'

const express = require('express');
const mongoose = require('mongoose');
const app = express();

/** ROUTES */
app.get('/', (req, res) => res.send('Hello World!'));

app.listen('8000', () => console.log('Listening on port 8000'));