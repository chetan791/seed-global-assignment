const express = require("express");
const universityModel = require("../model/universityModel");
const universityRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// endpoint to register university
universityRouter.post("/register", async (req, res) => {
  const { name, email, password, address, country, cources } = req.body;
  try {
    verifyEmail = await universityModel.findOne({ email: email });
    if (verifyEmail) {
      res.send({ message: "university already exists" });
    } else {
      bcrypt.hash(password, 10, async (err, hash) => {
        if (err) {
          res.send({ message: err.message });
        } else {
          const university = universityModel.create({
            name,
            email,
            password: hash,
            address,
            country,
            cources,
          });
          await university.save();
          res.send({ message: "university registered successfully" });
        }
      });
    }
  } catch (error) {
    res.send({ message: "internal server error", error });
  }
});

// endpoint to login university
universityRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const university = await universityModel.findOne({ email: email });
    if (university) {
      bcrypt.compare(password, university.password, (err, result) => {
        if (result) {
          const token = jwt.sign(
            { universityID: university._id },
            { expiresIn: "30" },
            "secretkey"
          );
          res.send({ message: "login success", token: token });
        } else {
          res.send({ message: "login failed" });
        }
      });
    } else {
      res.send({ message: "university not found" });
    }
  } catch (error) {
    res.send({ message: "internal server error", error });
  }
});

// endpoint to get all universities
universityRouter.get("/", async (req, res) => {
  try {
    const universities = await universityModel.find();
    res.send({ universities });
  } catch (error) {
    res.send({ message: "internal server error", error });
  }
});

// endpoint to add courses to university
universityRouter.patch("/addcourse", async (req, res) => {
  const { id, course } = req.body;
  try {
    const university = await universityModel.findById(id);
    if (id == university._id) {
      const update = await universityModel.findByIdAndUpdate(
        id,
        { $push: { cources: course } },
        { new: true }
      );
      res.send({ message: "course added successfully", update });
    } else {
      res.send({ message: "You are not authorized" });
    }
  } catch (error) {
    res.send({ message: "internal server error", error });
  }
});

// endpoint to delete courses from university
universityRouter.patch("/deletecourse", async (req, res) => {
  const { id, course } = req.body;
  try {
    const university = await universityModel.findById(id);
    if (id == university._id) {
      const update = await universityModel.findByIdAndUpdate(
        id,
        { $pull: { cources: course } },
        { new: true }
      );
      res.send({ message: "course deleted successfully", update });
    } else {
      res.send({ message: "You are not authorized" });
    }
  } catch (error) {
    res.send({ message: "internal server error", error });
  }
});

// endpoint to delete university
universityRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const university = await universityModel.findById(id);
    if (id == university._id) {
      const update = await universityModel.findByIdAndDelete(id);
      res.send({ message: "university deleted successfully", update });
    } else {
      res.send({ message: "You are not authorized" });
    }
  } catch (error) {
    res.send({ message: "internal server error", error });
  }
});

module.exports = universityRouter;
