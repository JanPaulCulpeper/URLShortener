const express = require("express");
const bodyparser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json({ limit: "50mb" }));

app.listen(PORT, (err) => {
  if (err) throw err;

  console.log(` The app is running on port: ${PORT}`);
});
