const express = require("express");
const router = express.Router();
const Policy = require("../models/Policy");

// 🔹 GET All Policies
router.get("/", async (req, res) => {
  try {
    const policies = await Policy.find();
    res.json(policies);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// 🔹 CREATE Policy
router.post("/", async (req, res) => {
  try {
    const policy = new Policy(req.body);
    await policy.save();
    res.status(201).json(policy);
  } catch (err) {
    res.status(400).json({ error: "Error creating policy" });
  }
});

// 🔹 UPDATE Policy
router.put("/:id", async (req, res) => {
  try {
    const policy = await Policy.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(policy);
  } catch (err) {
    res.status(400).json({ error: "Error updating policy" });
  }
});

// 🔹 DELETE Policy
router.delete("/:id", async (req, res) => {
  try {
    await Policy.findByIdAndDelete(req.params.id);
    res.json({ message: "Policy deleted" });
  } catch (err) {
    res.status(500).json({ error: "Error deleting policy" });
  }
});

module.exports = router;

