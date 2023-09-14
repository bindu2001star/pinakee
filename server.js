const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, this is a GET request!");
});

app.post("/api", (req, res) => {
  const data = req.body;
  console.log("Received POST request with data:", data);
  res.send("POST request successful!");
});

app.put("/api", (req, res) => {
  const data = req.body;
  console.log("Received PUT request with data:", data);
  res.send("PUT request successful!");
});

app.delete("/api", (req, res) => {
  res.send("DELETE request successful!");
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
