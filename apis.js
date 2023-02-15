const axios = require("axios");
class Apis {
  constructor() {}
  async getProducts(link) {
    var myHeaders = new Headers();
    myHeaders.append("x-v", "3");
    myHeaders.append("x-min-v", "1");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    return await fetch(`${link}/banking/products`, requestOptions);
  }

  async getProductDetails(id) {
    console.log(id);
    var myHeaders = new Headers();
    myHeaders.append("x-v", "2");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `https://secure.api.virginmoney.com.au/cds-au/v1/banking/products/${id}`,
      requestOptions
    );
    // .then((response) => response.text())
    // .then((result) => console.log(result))
    // .catch((error) => console.log("error", error));
  }
}

module.exports = Apis;
