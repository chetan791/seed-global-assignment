const express = require("express");
const EnquiryModel = require("../model/EnquriesModel");
const auth = require("../middleware/auth.middleware");
const EnqueriesRouter = express.Router();

EnqueriesRouter.use(auth);
// endpoint to create Enqueries by student
EnqueriesRouter.post("/create/:id", async (req, res) => {
  const { name, email, message, studentID, course } = req.body;

  const universityID = req.params.id;

  try {
    const Enquiry = await EnquiryModel.create({
      name,
      email,
      message,
      universityID,
      studentID,
      course,
    });
    Enquiry.save();
    res.send({ message: "inquery created successfully", Enquiry });
  } catch (error) {
    res.send({ message: "internal server error", error });
  }
});

// endpoint to get all Enqueries of a particular university or student
EnqueriesRouter.get("/", async (req, res) => {
  const { studentID, universityID } = req.body;
  try {
    const Enqueries = await EnquiryModel.find(
      universityID ? { universityID: universityID } : { studentID: studentID }
    ).populate("universityID", "name");
    res.send(Enqueries);
  } catch (error) {
    res.send({ message: "internal server error", error });
  }
});

// endpoint to accept or reject the student by universities
EnqueriesRouter.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  const { status, universityID } = req.body;
  try {
    const Enquiry = await EnquiryModel.findById(id);
    if (universityID == Enquiry.universityID) {
      const update = await EnquiryModel.findByIdAndUpdate(
        id,
        { status: status },
        { new: true }
      );
      res.send({ message: "Enquiry updated successfully", update });
    } else {
      res.send({ message: "You are not authorized" });
    }
  } catch (error) {
    res.send({ message: "internal server error", error });
  }
});

module.exports = EnqueriesRouter;
