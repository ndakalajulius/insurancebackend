require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const policyRoutes = require("./routes/policies");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ MongoDB Connection Error:", err));

// Routes
app.use("/api/policies", policyRoutes);

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));

