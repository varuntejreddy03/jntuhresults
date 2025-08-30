const fetch = require("node-fetch"); // optional if Node <18

module.exports = async function handler(req, res) {
  const roll = req.query.rollNumber;
  if (!roll) {
    return res.status(400).json({ error: "rollNumber query is required" });
  }

  const apiUrl = `https://jntuhresults.dhethi.com/api/getAcademicResult?rollNumber=${roll}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch from JNTUH API" });
  }
};
