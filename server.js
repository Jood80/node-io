import fs from "fs";
import { parse } from "csv-parse";

const habitablePlanets = [];

const isHabitablePlanet = (planet) => {
  return planet['koi_disposition'] === 'CONFIRMED'
}

fs.createReadStream("kepler_data.csv")
  .pipe(parse({
    comment: "#",
    columns: true,
    relax: true,
  }))
  .on("data", (data) => {
    if(isHabitablePlanet(data)) {
      habitablePlanets.push(data)
    }
  })
  .on("error", (err) => console.log(err))
  .on("close", () => {
    console.log("Records in buffer format", habitablePlanets)
  });

