const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const enrolledSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  universityID: {
    type: Schema.Types.ObjectId,
    ref: "university",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  course: {
    type: String,
    required: true,
  },
  studentID: {
    type: Schema.Types.ObjectId,
    ref: "student",
    required: true,
  },
});

const EnrolledModel = mongoose.model("enrolled", enrolledSchema);

module.exports = EnrolledModel;
