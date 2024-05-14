const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EnquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  universityID: {
    type: Schema.Types.ObjectId,
    ref: "university",
    required: true,
  },
  studentID: {
    type: Schema.Types.ObjectId,
    ref: "student",
    required: true,
  },
});

const EnquiryModel = mongoose.model("Enquiry", EnquirySchema);

module.exports = EnquiryModel;
