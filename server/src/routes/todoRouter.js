var express = require('express');
var app = express();
var todoRouter = express.Router();

// Require Todo model in our routes module
var Todo = require('../models/Todo');

// Create new task route
todoRouter.route('/add/post').post(function (req, res) {
    var todo = new Todo(req.body);
    todo.save()
        .then(todo => {
            res.json('Todo created successfully');
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

// Get tasks route
todoRouter.route('/').get(function (req, res) {
    Todo.find(function (err, todos) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(todos);
        }
    });
});

module.exports = todoRouter;