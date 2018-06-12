const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load Input Validation
const validateRegisterStudent = require("../../validation/register_student");
const validateRegisterCompany = require("../../validation/register_company");

const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

// @route   POST api/users/register_student
// @desc    Register user
// @access  Public
router.post("/register_student", (req, res) => {
  const { errors, isValid } = validateRegisterStudent(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = "Email นี้ถูกใช้แล้ว";
      return res.status(400).json(errors);
    } else {
      const newStudent = new User({
        email: req.body.email,
        password: req.body.password,
        password2: req.body.password2,
        fname: req.body.fname,
        lname: req.body.lname,
        nickname: req.body.nickname,
        birtDate: req.body.birtDate,
        gender: req.body.gender,
        university: req.body.university,
        tel: req.body.tel,
        lineId: req.body.lineId,
        exp: req.body.exp,
        pic: req.body.pic,
        ability: req.body.ability
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newStudent.password, salt, (err, hash) => {
          if (err) throw err;
          newStudent.password = hash;
          newStudent
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});
router.post("/register_company", (req, res) => {
  const { errors, isValid } = validateRegisterCompany(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = "Email นี้ถูกใช้แล้ว";
      return res.status(400).json(errors);
    } else {
      const newCompany = new User({
        email: req.body.email,
        password: req.body.password,
        password2: req.body.password2,
        fname: req.body.fname,
        lname: req.body.lname,
        idNo: req.body.idNo,
        idFile: req.body.idFile,
        companyName: req.body.companyName,
        companyDetail: req.body.companyDetail,
        tel: req.body.tel,
        moreDetail: req.body.moreDetail
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newCompany.password, salt, (err, hash) => {
          if (err) throw err;
          newCompany.password = hash;
          newCompany
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});
// @route   GET api/users/login
// @desc    Login User / Returning JWT Token
// @access  Public
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check for user
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }

    // Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User Matched
        const payload = { id: user.id, fname: user.fname }; // Create JWT Payload

        // Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        errors.password = "รหัสผ่านไม่ถูกต้อง";
        return res.status(400).json(errors);
      }
    });
  });
});

// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

module.exports = router;
