var express = require('express');
var app = express();
var todoRouter = express.Router();

// Require Todo model in our routes module
var Todo = require('../models/Todo');

// Create new task route
todoRouter.route('/create/post').post(function (req, res) {
    var todo = new todo(req.body);
    todo.save()
        .then(todo => {
            res.json('Todo created successfully');
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

module.exports = todoRouter;