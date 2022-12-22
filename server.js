import fs from "fs";

const records = [];
fs.createReadStream("kepler_data.csv")
  .on("data", (data) => records.push(data))
  .on("error", (err) => console.log(err))
  .on("close", () => {
    console.log("Records in buffer format", records);
    console.log("--------------------------------");
    console.log(` Records in CSV format, ${records}`);
  });

