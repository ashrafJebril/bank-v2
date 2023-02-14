const axios = require("axios");
class Apis {
  constructor() {}
  async getProducts() {
    var myHeaders = new Headers();
    myHeaders.append("x-v", "2");
    myHeaders.append("x-min-v", "1");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://secure.api.virginmoney.com.au/cds-au/v1/banking/products",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(JSON.parse(result).data))
      .catch((error) => console.log("error", error));
  }
}

module.exports = Apis;
