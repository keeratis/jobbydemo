const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  fname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  tel: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  nickname: {
    type: String
  },
  gender: {
    type: String
  },
  university: {
    type: String
  },
  tel: {
    type: String
  },
  lineId: {
    type: String
  },
  exp: {
    type: String
  },
  pic: {
    type: String
  },
  ability: {
    type: String
  },
  idNo: {
    type: String
  },
  idFile: {
    type: String
  },
  companyName: {
    type: String
  },
  companyDetail: {
    type: String
  },
  moreDetail: {
    type: String
  }
});

module.exports = User = mongoose.model("users", UserSchema);
