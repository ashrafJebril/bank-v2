const express = require("express");
const app = express();
const cors = require("cors");
const banks = require("./models").banks;

app.use(
  cors({
    origin: "*",
  })
);
// myController.getAllBanksProducts();
const controller = require("./controller.js");
// myController.getAllBanksProducts();
getData = async () => {
  await controller.create();

  // await myController.saveProducts();
};
getData();
const api = require("./apis");

getProductsWithDetails = async () => {
  // return await myController.getProductsWithDetials();
};
app.get("/banks-v2/banks", async (req, res) => {
  const result = await controller.getAllBanks();
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
app.get("/banks-v2/init", async (req, res) => {
  await api.getProducts();
  res.send({ message: "done" });
});

app.listen(3030, "127.0.0.1", () => {
  console.log("Listing");
});
