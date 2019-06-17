var mongoose = require("mongoose");
var leaveSchema = new mongoose.Schema(
  {
    subject: { type: String, required: "subject cant be blank" },
    from: Date,
    to: Date,
    days: Number,
    status: Boolean,
    stud: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student"
      },
      username: String
    }
  },
  { timestamps: {} }
);

module.exports = mongoose.model("Leave", leaveSchema);
