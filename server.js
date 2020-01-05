require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();
app.use(express.static(path.join(__dirname, "client/build")));
const port = process.env.PORT || 5000;

require("./routes")(app);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});
app.listen(port, () =>
  console.info("Server started. Listening to port: " + port)
);
