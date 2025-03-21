const express = require("express");
const router = express.Router();
const Policy = require("../models/Policy");

// Create Policy
router.post("/", async (req, res) => {
  try {
    const policy = new Policy(req.body);
    await policy.save();
    res.status(201).json(policy);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get All Policies
router.get("/", async (req, res) => {
  const policies = await Policy.find();
  res.json(policies);
});

// Get Single Policy
router.get("/:id", async (req, res) => {
  try {
    const policy = await Policy.findById(req.params.id);
    if (!policy) return res.status(404).json({ message: "Not found" });
    res.json(policy);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update Policy
router.put("/:id", async (req, res) => {
  try {
    const policy = await Policy.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(policy);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete Policy
router.delete("/:id", async (req, res) => {
  try {
    await Policy.findByIdAndDelete(req.params.id);
    res.json({ message: "Policy deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
