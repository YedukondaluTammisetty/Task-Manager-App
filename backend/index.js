const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");

// Middleware
app.use(express.json());
app.use(cors());

// Your API routes
app.use("/api/tasks", require("./Routes/taskRoutes"));

// Serve frontend (React build)
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
