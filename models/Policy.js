const mongoose = require("mongoose");

const PolicySchema = new mongoose.Schema({
  policyNumber: { type: String, required: true, unique: true },
  holderName: { type: String, required: true },
  premium: { type: Number, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
});

module.exports = mongoose.model("Policy", PolicySchema);
