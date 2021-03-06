const path = require("path");
const fs = require("fs");
const request = require("request");

const chirps = [
  {
    id: 1,
    username: "jonny",
    chirp: "hey im jonny",
  },
  {
    id: 2,
    username: "ted",
    chirp: "hey im ted",
  },
  {
    id: 3,
    username: "scruffy",
    chirp: "hey im scruffy",
  },
  {
    id: 4,
    username: "jim",
    chirp: "hey im jim",
  },
  {
    id: 5,
    username: "squirrel",
    chirp: "hey im squirrel",
  },
];

const chirpData = JSON.stringify(chirps);

const chirpPath = path.join(__dirname, "../chirps.json");

fs.writeFileSync(chirpPath, chirpData);

const chirpsFromFile = fs.readFileSync(chirpPath);

console.log(JSON.parse(chirpsFromFile));
