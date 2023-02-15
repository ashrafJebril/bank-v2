const express = require("express");
const app = express();
const Controller = require("./controller");

const myController = new Controller();

// myController.getAllBanksProducts();

myController.getAllBanksProducts();
getData = async () => {
  await myController.saveProducts();
};

getProductsWithDetails = async () => {
  return await myController.getProductsWithDetials();
};
app.get("/products", async (req, res, next) => {
  res.send(await getProductsWithDetails());
});
getData();
app.listen(8000, "127.0.0.1", () => {
  console.log("Listing");
});
