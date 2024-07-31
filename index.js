const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(
  cors({
    origin: "*",
  })
);

app.post("/", async (req, res) => {
  const { url } = req.body;
  console.log("url  ",url)
  const response = await axios.get(url);
  
  res.send(response.data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
