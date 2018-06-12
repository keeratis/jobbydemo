const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterCompany(data) {
  let errors = {};

  data.fname = !isEmpty(data.fname) ? data.fname : "";
  data.lname = !isEmpty(data.lname) ? data.lname : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.companyName = !isEmpty(data.companyName) ? data.companyName : "";
  data.idNo = !isEmpty(data.idNo) ? data.idNo : "";
  data.tel = !isEmpty(data.tel) ? data.tel : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (Validator.isEmpty(data.fname)) {
    errors.fname = "โปรดใส่ชื่อ";
  }
  if (Validator.isEmpty(data.lname)) {
    errors.lname = "โปรดใส่นามสกุล";
  }
  if (Validator.isEmpty(data.companyName)) {
    errors.companyName = "โปรดใส่ชื่อบริษัท";
  }
  if (Validator.isEmpty(data.idNo, { min: 13, max: 13 })) {
    errors.idNo = "โปรดใส่รหัสบัตรประชาชน";
  }
  if (Validator.isEmpty(data.tel)) {
    errors.tel = "โปรดเบอร์โทรศัพท์";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "โปรดใส่อีเมล";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "อีเมลไม่ถูกต้อง";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "โปรดใส่รหัสผ่าน";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "รหัสผ่านต้องมากกว่า 6 ตัว";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "โปรดยืนยันรหัสผ่าน";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "รหัสผ่าน และ ยืนยันรหัสผ่าน ต้องเหมือนกัน";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
