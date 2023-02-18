const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);
// myController.getAllBanksProducts();
const controller = require("./controller.js");
// myController.getAllBanksProducts();
getData = async () => {
  // await myController.saveProducts();
};
const api = require("./apis");
api.getProducts();
getProductsWithDetails = async () => {
  // return await myController.getProductsWithDetials();
};
app.get("/banks-v2/banks", async (req, res) => {
  const result = await controller.create();
  res.status(result.status);
  delete result.status;
  res.send(result);
});
app.get("/banks-v2/products", async (req, res, next) => {
  res.send(await getProductsWithDetails());
});
app.get("/banks-v2/bank-products/:id", async (req, res) => {
  const result = await controller.getProductsByBankId(req.params.id);
  res.status(result.status);
  delete result.status;
  res.send(result);
});
app.get("/banks-v2/bank/:id", async (req, res) => {
  const result = await controller.getBankById(req.params.id);
  res.status(result.status);
  delete result.status;
  res.send(result);
});
app.get("/banks-v2/product/:id", async (req, res) => {
  const result = await controller.getProductDetailsById(req.params.id);
  res.status(result.status);
  delete result.status;
  res.send(result);
});
getData();
app.listen(5000, "127.0.0.1", () => {
  console.log("Listing");
});
