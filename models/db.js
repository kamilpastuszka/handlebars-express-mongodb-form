var mongoose = require("mongoose");


mongoose.connect("mongodb://localhost/formData");
mongoose.Promise = global.Promise;

mongoose.connection.on("open", function() {
  console.log("Connection with MongoDB has been established");
});

mongoose.connection.on('error',function (err) {
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose connection disconnected');
});

// closing the Mongoose connection when then Node process ends
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose connection disconnected through app termination');
    process.exit(0);
  });
});


module.exports =  mongoose;
