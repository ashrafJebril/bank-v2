const controller = require("./controller");
const products_details = require("./models").product_details;
const products = require("./models").products;
const fetch = (url, config) =>
  import("node-fetch").then(({ default: fetch }) => fetch(url, config));
var requestOptions = {
  method: "GET",
  headers: {
    "x-v": 3,
    "x-min-v": 1,
  },
  redirect: "follow",
};
class Apis {
  constructor() {}
  async bankProducts(link, id) {
    await fetch(`${link}/banking/products`, requestOptions)
      .then((response) => response.json()) // parse response as JSON
      .then(async (data) => {
        const productsData = data.data.products.map((product) => {
          return {
            productId: product.productId,
            name: product.name,
            brand: product.brand,
            link: link,
            description: product.description,
            isTailored: product.isTailored,
            productCategory: product.productCategory,
            effectiveFrom: product.effectiveFrom,
            effectiveTo: product.effectiveTo,
            brandName: product.brandName,
            applicationUri: product.applicationUri,
            bankId: id,
          };
        });
        await products.bulkCreate(productsData);
        // const productsAfterAdded = await products.findAll();

        // await this.recursive(productsAfterAdded);
      })
      .catch((error) => console.log("error", error));
  }

  async recursive(data) {
    if (data.length <= 0) {
      return;
    }
    const chunkedData = data.pop();
    this.getProductDetails(
      chunkedData._previousDataValues.productId,
      chunkedData._previousDataValues.link
    );

    await this.recursive(data);
  }
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
        try {
          products_details.create(result.data);
        } catch (error) {
          console.log(error);
        }
      })
      .catch((err) => console.log(err.message));
  }
}

module.exports = new Apis();
