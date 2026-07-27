const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "NexaAI Backend Running"
  });
});

app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
