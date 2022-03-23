const path = require("path");
const fs = require("fs");
const request = require("request");

let dataPath = path.join(__dirname, "./popular-articles.json");

request("https://reddit.com/r/popular.json", (err, res, body) => {
  if (err) console.log(err);

  let data = [];

  JSON.parse(body).data.children.forEach((item) => {
    let obj = {
      title: item.data.title,
      url: item.data.url,
      author: item.data.author,
    };
    data.push(obj);
  });
  fs.appendFileSync(dataPath, JSON.stringify(data), "utf-8", (err) => {
    if (err) console.log(err);
  });
});
