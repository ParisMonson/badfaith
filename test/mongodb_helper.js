var mongoose = require("mongoose");
// const userSeeds = require('userSeeds')

beforeAll(function (done) {
  mongoose.connect("mongodb://0.0.0.0/badfaith_test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  var db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  db.on("open", function () {
    done();
  });
});

afterAll(function (done) {
  mongoose.connection.close(true, function () {
    done();
  });
});
