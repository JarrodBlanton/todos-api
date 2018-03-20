const express = require('express');
const router = express.Router();
const db = require('../models');
const bodyParser = require('body-parser');

/** /api/todos */

// INDEX
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

// CREATE a TODO
router.post('/', function(req, res) {
    db.Todo.create(req.body)
        .then(newtodo => {
            res.status(201).json(newtodo);
        }).catch(err => {
            res.send(err);
        });
});

// UPDATE a TODO
router.put('/:id', function(req, res) {
    // Get id and match in DB -> make changes -> save
})

module.exports = router;