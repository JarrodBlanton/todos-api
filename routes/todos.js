const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', function(req, res) {
    db.Todo.find()
        .then(todos => {
            res.json(todos);
        })
        .catch(err => {
            res.send(err);
        })
    res.send('Hello from TODOS Routes');
});

module.exports = router;