const axios = require("axios");
const controller = require("./controller");
const products_details = require("./models").product_details;
const products = require("./models").products;
const fetch = (url, config) =>
  import("node-fetch").then(({ default: fetch }) => fetch(url, config));
class Apis {
  constructor() {}
  async getProducts(link) {
    var requestOptions = {
      method: "GET",
      headers: {
        "x-v": 3,
        "x-min-v": 1,
      },
      redirect: "follow",
    };
    const banksList = await controller.getAllBanks();
    await products.destroy({
      where: {},
      truncate: true,
    });
    await products_details.destroy({
      where: {},
      truncate: true,
    });
    banksList.map(async (bank) => {
      await fetch(`${bank.dataValues.link}/banking/products`, requestOptions)
        .then((response) => response.json())
        .then(async (result) => {
          if (result.data && result.data.products.length) {
            const list = result.data.products.map((product) => {
              delete product.additionalInformation;
              delete product.cardArt;
              product.bankId = bank.dataValues.id;
              return product;
            });
            console.log("here", list);
            await controller.creatBanksProducts(list);
            list.map(async (product) => {
              await this.getProductDetails(
                product.productId,
                bank.dataValues.link
              );
            });
          }
        })
        .catch((err) => console.log(err.message));
    });
  }

  async getProductDetails(id, link) {
    var requestOptions = {
      method: "GET",
      headers: {
        "x-v": 3,
        "x-min-v": 1,
      },
      redirect: "follow",
    };
    await fetch(`${link}/banking/products/${id}`, requestOptions)
      .then((response) => response.json())
      .then(async (result) => {
        controller.createProductDetails(result.data);
      })
      .catch((err) => console.log(err.message));
  }
}

module.exports = new Apis();
