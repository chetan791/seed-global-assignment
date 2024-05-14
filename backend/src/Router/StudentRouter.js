const express = require("express");
const studentRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const StudentModel = require("../model/studentmodel");

// endpoint to register student
studentRouter.post("/register", async (req, res) => {
  const { name, email, password, age, gender } = req.body;
  try {
    verifyEmail = await StudentModel.findOne({ email: email });
    if (verifyEmail) {
      res.send({ message: "student already exists" });
    } else {
      bcrypt.hash(password, 10, async (err, hash) => {
        if (err) {
          res.send({ message: err.message });
        } else {
          const student = StudentModel.create({
            name,
            email,
            password: hash,
            age,
            gender,
          });
          await student.save();
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
          const token = jwt.sign({ studentID: student._id,name:student.name,email:student.email }, "secretkey", {
            expiresIn: "30",
          });
          res.send({ message: "login success", token: token });
        } else {
          res.send({ message: "login failed" });
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
