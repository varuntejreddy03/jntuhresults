const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/result", async (req, res) => {
  const roll = req.query.rollNumber;
  const apiUrl = `https://jntuhresults.dhethi.com/api/getAcademicResult?rollNumber=${roll}`;

  try {
    const response = await fetch(apiUrl); // using built-in fetch
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch from JNTUH API" });
  }
});

//app.listen(3000, () => console.log("✅ Proxy running at http://localhost:3000"));
module.exports = app;