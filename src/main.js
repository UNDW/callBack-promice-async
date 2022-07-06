import * as ArticlesModel from "./articles.js";

ArticlesModel.all().then((articles) => {
  console.log("articles count = " + articles.length);
  let ind = Math.floor(Math.random() * articles.length);
  console.log("select index " + ind + ", id = " + articles[ind].id);

  ArticlesModel.get(articles[ind].id)
    .then((article) => {
      console.log(article);
    })
    .catch((error) => {
      console.log(error + " in articles one");
    });

  ArticlesModel.remove(articles[ind].id)
    .then((res) => {
      console.log("что с удалением? - " + res);
    })
    .catch((error) => {
      console.log(error + " in articles delete");
    });

  ArticlesModel.all()
    .then((articles) => {
      console.log("articles count = " + articles.length);
    })
    .catch((error) => {
      console.log(error + " in articles list");
    });
});
