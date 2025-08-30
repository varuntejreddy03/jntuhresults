// api/result.js
const fetch = require("node-fetch"); // only needed if Node <18

module.exports = async function handler(req, res) {
  // Enable CORS for all origins
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Only allow GET requests
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const roll = req.query.rollNumber;
  if (!roll) {
    return res.status(400).json({ error: "rollNumber query parameter is required" });
  }

  const apiUrl = `https://jntuhresults.dhethi.com/api/getAcademicResult?rollNumber=${roll}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch from JNTUH API");
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
