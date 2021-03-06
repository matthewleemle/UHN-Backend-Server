var mongoose = require("../database/mongoose");
var mongoose = mongoose.getmongoose();
var Schema = mongoose.Schema;

const arrayLimit = (val) => {
  return val.length <= 6;
}


const model = mongoose.model("help_requests", new Schema({
  userId: String,
  responderIds: {
    type:[{_id: false, id: String}],
    validate: [arrayLimit, '{PATH} exceeds the limit of 6']
  },
  status: {
    type: String,
    enum: ["open", "sent_to_responder", "taken", "arrived", "resolved"]
  },
  userResponders: [{ _id: false, id: String }]
},
{
  timestamps: {
    createdAt: "createdAt",
    updatedAt: "updatedAt"
  },
  versionKey: false
}));



module.exports = {
  model
}
