const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    service: "production-demo",
    status: "running"
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy"
  });
});

const port = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on ${port}`);
  });
}

module.exports = app;
