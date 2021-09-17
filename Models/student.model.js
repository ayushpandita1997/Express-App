var mongoose = require('mongoose');

var stuDataSchema = mongoose.Schema({
    stuFirstName: String,
    stuLastName: String,
    stuAge: Number,
    stuID: Number,
    stuDOB: String
  });
  
  var StudentModel = mongoose.model('Student',stuDataSchema);

  module.exports = StudentModel;