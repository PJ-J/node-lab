const path = require("path");
const fs = require("fs");
const rp = require("request-promise");

let dataPath = path.join(__dirname, "./popular-articles.json");

rp("https://reddit.com/r/popular.json")
  .then(data => JSON.parse(data))
  .then(articles => {
    let articleArr = [];

    articles.data.children.forEach(article => {
      const articleObj = {
        title: article.data.title,
        url: article.data.url,
        author: article.data.author
      };
      articleArr.push(articleObj);
    });
    fs.writeFileSync(dataPath, JSON.stringify(articleArr));
  })
  .catch(err => console.log(err));

// JSON.parse(body).data.children.forEach((item) => {
//   let obj = {
//     title: item.data.title,
//     url: item.data.url,
//     author: item.data.author,
//   };
//   data.push(obj);
// });
// fs.appendFileSync(dataPath, JSON.stringify(data), "utf-8", (err) => {
//   if (err) console.log(err);
// });

