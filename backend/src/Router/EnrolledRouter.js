const express = require("express");
const EnrolledModel = require("../model/EnrolledModel");
const EnrolledRouter = express.Router();

// endpoint to create Enrolled students
EnrolledRouter.post("/create", async (req, res) => {
  const { name, email, studentID, course, universityID } = req.body;

  try {
    const Enrolled = await EnrolledModel.create({
      name,
      email,
      studentID,
      course,
      universityID,
    });
    await Enrolled.save();
    res.send({ message: "Enrolled created successfully" });
  } catch (error) {
    res.send({ message: "internal server error", error });
  }
});


// endpoint to get all Enrolled students
EnrolledRouter.get("/:id", async (req, res) => {
  try {
    const Enrolled = await EnrolledModel.find({ universityID: req.params.id });
    res.send(Enrolled);
  } catch (error) {
    res.send({ message: "internal server error", error });
  }
});

// endpoint to get all applied universities
EnrolledRouter.get("/", async (req, res) => {
  try {
    const Enrolled = await EnrolledModel.find({studentID:req.params.id});
    res.send(Enrolled);
  } catch (error) {
    res.send({ message: "internal server error", error });
  }
});

module.exports = EnrolledRouter;
