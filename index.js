const express = require("express");
const app = express();
const Api = require("./apis");

const myApi = new Api();

getData = async () => {
  await myApi.getProducts();
};
getData();
app.listen(8000, "127.0.0.1", () => {
  console.log("Listing");
});
