var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for a single Todo
var Todo = new Schema({
  title: {
    type: String
  },
  // recurring: boolean
  //    completed: boolean
  //completionHistory
  cadence: {
    type: String
  },
  // daily, weekly, monthly
  frequency: {
    type: Number
  }

}, {
    collection: 'todos'
});

module.exports = mongoose.model('Todo', Todo);