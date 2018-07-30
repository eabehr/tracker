var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for a single Todo
var Todo = new Schema({
  title: {
    type: String
  },
}, {
    collection: 'todos'
});

module.exports = mongoose.model('Todo', Todo);