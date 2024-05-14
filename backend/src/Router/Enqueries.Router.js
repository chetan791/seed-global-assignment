const express = require("express");
const EnquiryModel = require("../model/EnquriesModel");
const EnqueriesRouter = express.Router();

// endpoint to create Enqueries
EnqueriesRouter.post("/create", async (req, res) => {
  const { name, email, message,universityID,studentID } = req.body;

  try {
    const Enquiry = await EnquiryModel.create({
      name,
      email,
      message,
      universityID,
      studentID
    });
    await Enquiry.save();
    res.send({ message: "inquery created successfully" });
  } catch (error) {
    res.send({ message: "internal server error", error });
  }
});

// endpoint to get all Enqueries
EnqueriesRouter.get("/:id", async (req, res) => {
  try {
    const Enqueries = await EnquiryModel.find({ university: req.params.id });
    res.send(Enqueries);
  } catch (error) {
    res.send({ message: "internal server error", error });
  }
});

module.exports = EnqueriesRouter;
