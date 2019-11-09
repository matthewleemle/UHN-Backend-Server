var database = require("../database");
var mongoose = database.getmongoose();
var Schema = mongoose.Schema;

const model = mongoose.model("users", new Schema({
  username: String,
  password: String,
  email: String,
  phone: String
}));

module.exports = {
  model
}
