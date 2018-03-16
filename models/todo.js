const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
    name: {
        type: String,
        required: 'Name cannot be blank.'
    },
    completed: {
        type: Boolean,
        default: false
    }, 
    date: {
        type: Date,
        default: Date.now
    }
});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;