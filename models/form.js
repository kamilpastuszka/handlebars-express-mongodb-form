var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FormSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: Number
  },
  message: {
    type: String
  }
});

var Form = mongoose.model('form', FormSchema);

module.exports = Form;
