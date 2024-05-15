const express = require("express");
const studentRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const StudentModel = require("../model/studentModel");

// endpoint to register student
studentRouter.post("/register", async (req, res) => {
  const { name, email, password, age, gender } = req.body;
  try {
    verifyEmail = await StudentModel.findOne({ email: email });
    if (verifyEmail) {
      res.send({ message: "user already exists please login" });
    } else {
      bcrypt.hash(password, 10, async (err, hash) => {
        if (err) {
          res.send({ message: err.message });
        } else {
          const student = await StudentModel.create({
            name,
            email,
            password: hash,
            age,
            gender,
          });
          student.save();
          res.send({ message: "student registered successfully" });
        }
      });
    }
  } catch (error) {
    res.send({ message: "internal server error", error });
  }
});

// endpoint to login student
studentRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const student = await StudentModel.findOne({ email: email });
    if (student) {
      bcrypt.compare(password, student.password, (err, result) => {
        if (result) {
          const token = jwt.sign(
            {
              studentID: student._id,
              name: student.name,
              email: student.email,
            },
            "secretkey",
            {
              expiresIn: "30d",
            }
          );
          res.send({
            message: "login success",
            response: { token: token, name: student.name },
          });
        } else {
          res.send({ message: "wrong credentials" });
        }
      });
    } else {
      res.send({ message: "student not found" });
    }
  } catch (error) {
    res.send({ message: "internal server error", error });
  }
});

// endpoint to get all students
studentRouter.get("/", async (req, res) => {
  try {
    const students = await StudentModel.find();
    res.send(students);
  } catch (error) {
    res.send({ message: "internal server error", error });
  }
});

module.exports = studentRouter;
