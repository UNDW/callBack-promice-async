import * as ArticlesModel from "./articles.js";
(async function main() {
  //ALL
  let allArticles = [];
  let ind = 0;
  try {
    allArticles = await ArticlesModel.all();
    console.log("articles count = " + allArticles.length);
    ind = Math.floor(Math.random() * allArticles.length);
    console.log("select index " + ind + ", id = " + allArticles[ind].id);
  } catch (error) {
    console.log(error + " in articles list");
    return;
  }
  //GET
  try {
    const getArticles = await ArticlesModel.get(allArticles[ind].id);
    console.log(getArticles);
  } catch (error) {
    console.log(error + " in articles one");
  }
  //REMOVE
  try {
    const removeArticles = await ArticlesModel.remove(allArticles[ind].id);
    console.log("что с удалением? - " + removeArticles);
  } catch (error) {
    console.log(error + " in articles delete");
  }
  // ALL AFTER DELETE
  try {
    console.log("articles count = " + allArticles.length);
  } catch (error) {
    console.log(error + " in articles list after delete");
  }
})();
