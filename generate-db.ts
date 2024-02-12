// from https://stackoverflow.com/a/17190385
import csvtojson from "csvtojson";

csvtojson()
  .fromFile("aisc-shapes-database-v15.0.csv")
  .then(function (beams) {
    const fs = require("fs");
    const jsonData = JSON.stringify({ beams });
    fs.writeFileSync("db.json", jsonData);
  });
