require("dotenv").config();
const axios = require("axios");
module.exports = app => {
  //Routes
  app.get("/api/weather/:loc", (req, res) => {
    axios
      .get(
        process.env.REACT_APP_DSKY_URL +
          process.env.REACT_APP_DSKY_KEY +
          "/" +
          req.params.loc +
          "?units=auto"
      )
      .then(ds => {
        const temp = ds.data.currently.temperature.toFixed(1);
        const units = ds.data.flags.units === "us" ? "F" : "C";
        const icon = ds.data.currently.icon.toUpperCase().replace(/-/g, "_");
        res.send({
          temperature: temp,
          units: units,
          summary: ds.data.currently.summary,
          icon: icon
        });
      })
      .catch(err => res.send(err));
  });
  app.get("/api/test", (req, res) => {
    res.send("k");
  });
};
