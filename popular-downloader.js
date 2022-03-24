const path = require("path");
const fs = require("fs");
const rp = require("request-promise");

// let dataPath = path.join(__dirname, "./popular-articles.json");

rp("https://reddit.com/r/popular.json")
  .then((data) => JSON.parse(data))
  .then((articles) => {
    articles.data.children.forEach((article) => {
      if (
        path.extname(article.data.url) == ".jpg" ||
        path.extname(article.data.url) == ".png" ||
        path.extname(article.data.url) == ".gif"
      ) {
        rp(article.data.url, { encoding: "base64" })
          .then((img) => {
            const imgPath = `./downloads/${article.data.id}${path.extname(article.data.url)}`;
            fs.writeFileSync(imgPath, img, { encoding: "base64" });
          })
          .catch((err) => console.log(err));
      }
    });
  });
