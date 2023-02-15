const banks = [
  "https://api.voltbank.com.au/cds-au/v1",
  "https://api.up.com.au/cds-au/v1",
  "https://online.woolworthsteambank.com.au/OpenBanking/cds-au/v1",
  "https://public.cdr.tyro.com/cds-au/v1",
  "https://ob.tmbl.com.au/unibank/cds-au/v1",
  "https://onlinebanking.themaccu.com.au/OpenBanking/cds-au/v1",
  "https://ibanking.unitybank.com.au/openbanking/cds-au/v1",
  "https://ob.tmbl.com.au/tmbank/cds-au/v1",
  "https://banking.transportmutual.com.au/OpenBanking/cds-au/v1",
  "https://cdrbank.racq.com.au/cds-au/v1",
  "https://api.cds.nicu.com.au/cds-au/v1",
  "https://secure.api.virginmoney.com.au/cds-au/v1",
  "https://api.cdr.serviceone.com.au/cds-au/v1",
  "https://onlinebanking.wawcu.com.au/OpenBanking/cds-au/v1",
  "https://digital-api.stgeorge.com.au/cds-au/v1",
  "https://public.open.rslmoney.com.au/cds-au/v1",
  "https://public.cdr-api.summerland.com.au/cds-au/v1",
  "https://ib.cwcu.com.au/openbanking/cds-au/v1",
  "https://internetbanking.lcu.com.au/openbanking/cds-au/v1",
  "https://prd.bnk.com.au/cds-au/v1",
  "https://openbanking.api.rabobank.com.au/public/cds-au/v1",
  "https://public.cdr-api.queenslandcountry.bank/cds-au/v1",
  "https://onlinebanking.horizonbank.com.au/openbanking/cds-au/v1",
  "https://banking.macquariecu.com.au/OpenBanking/cds-au/v1",
  "https://online.geelongbank.com.au/OpenBanking/cds-au/v1",
];
const myProducts = [];
const products = require("./models").products;
const Apis = require("./apis");
const productDetails = require("./models").product_details;
class Controller {
  constructor() {}
  async getProductsWithDetials() {
    try {
      const data = await products.findAll({
        include: [
          {
            as: "details",
            model: productDetails,
          },
        ],
      });
      return data;
    } catch (error) {}
  }
  getAllBanksProducts() {
    this.popArray(banks, this.saveProducts);
  }
  async popArray(arr, func) {
    if (arr.length === 0) {
      await products.bulkCreate(myProducts.flat());
      return; // base case: array is empty, so stop recursion
    } else {
      await func(arr.shift());
      //   await this.saveProductsDetails(arr.pop().productId);
      await this.popArray(arr, func); // recursively call the function with the updated array
    }
  }
  async popArrayForProductDetails(arr) {
    if (arr.length === 0) {
      return; // base case: array is empty, so stop recursion
    } else {
      const id = arr.shift();

      const myApi = new Apis();

      try {
        await myApi.getProductDetails(id._previousDataValues.productId);
      } catch (error) {
        console.log(error);
      }

      //   await this.saveProductsDetails(arr.pop().productId);
      await this.popArrayForProductDetails(arr); // recursively call the function with the updated array
    }
  }
  async saveProducts(link) {
    const myApi = new Apis();
    const data = await myApi.getProducts(link);

    try {
      const result = await data.json();
      products.create({
        name: result.data.name,
      });
      console.log(result.data.products);
      myProducts.push(result.data.products);
    } catch (error) {}

    // try {
    //   await products.bulkCreate(result.data.products);
    // } catch (error) {
    //   console.log(error.message);
    // }
    // await this.popArray(result.data.products);
  }

  async saveProductsDetails(id) {
    const allProducts = products.findAll().then(async (product) => {
      this.popArrayForProductDetails(product);
    });

    // const result = await data.json();

    // try {
    //   await productDetails.create(result.data);
    // } catch (error) {
    //   console.log(error.message);
    // }
  }
}

module.exports = Controller;
