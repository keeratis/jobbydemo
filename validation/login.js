const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email ไม่ถูกต้อง";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "โปรดใส่ Email";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "โปรดใส่รหัสผ่าน";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
