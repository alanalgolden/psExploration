const express = require("express");
const app = express();
const apiFunctions = require("./apiFunctions");
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post("/process-data", async (req, res) => {
  try {
    const result = await apiFunctions.processData(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
