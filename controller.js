const model = require("./models").banks;
const products = require("./models").products;
const product_details = require("./models").product_details;
const { sequelize } = require("./models");

const Api = require("./apis");
const banks = [
  { name: "ANZ Bank", link: "https://api.anz/cds-au/v1" },
  {
    name: "National Australia Bank",
    link: "https://openbank.api.nab.com.au/cds-au/v1",
  },
  { name: "Westpac", link: "https://digital-api.westpac.com.au/cds-au/v1" },
  {
    name: "Bank of Queensland",
    link: "https://secure.api.boq.com.au/cds-au/v1",
  },
  { name: "Macquarie Bank", link: "https://api.macquariebank.io/cds-au/v1" },
  {
    name: "Bendigo Bank",
    link: "https://api.cdr.bendigobank.com.au/cds-au/v1",
  },
  {
    name: "AMP",
    link: "https://api.cdr-api.amp.com.au/cds-au/v1",
  },
  // {
  //   name: "Suncorp Bank",
  //   link: "https://api-pub-cdr.suncorpbank.com.au/cds-au/v1",
  // },
  // {
  //   name: "commbank",
  //   link: "https://api.commbank.com.au/public/cds-au/v1/",
  // },
  // { name: "voltbank", link: "https://api.voltbank.com.au/cds-au/v1" },
  // { name: "Up", link: "https://api.up.com.au/cds-au/v1" },
  // {
  //   name: "Woolworthsteambank",
  //   link: "https://online.woolworthsteambank.com.au/OpenBanking/cds-au/v1",
  // },
  // { name: "Tyro", link: "https://public.cdr.tyro.com/cds-au/v1" },
  // {
  //   name: "OpenBanking",
  //   link: "https://onlinebanking.themaccu.com.au/OpenBanking/cds-au/v1",
  // },
  // {
  //   name: "Unitybank",
  //   link: "https://ibanking.unitybank.com.au/openbanking/cds-au/v1",
  // },
  // {
  //   name: "Teachers Mutual Bank",
  //   link: "https://ob.tmbl.com.au/tmbank/cds-au/v1",
  // },
  // {
  //   name: "Transport Mutual Credit Union",
  //   link: "https://banking.transportmutual.com.au/OpenBanking/cds-au/v1",
  // },
  // { name: "RACQ Bank", link: "https://cdrbank.racq.com.au/cds-au/v1" },
  // {
  //   name: "Virgin Money Australia",
  //   link: "https://secure.api.virginmoney.com.au/cds-au/v1",
  // },
  // {
  //   name: "serviceone",
  //   link: "https://api.cdr.serviceone.com.au/cds-au/v1",
  // },
  // {
  //   name: "Warwick Credit Union",
  //   link: "https://onlinebanking.wawcu.com.au/OpenBanking/cds-au/v1",
  // },
  // {
  //   name: "St.George Bank",
  //   link: "https://digital-api.stgeorge.com.au/cds-au/v1",
  // },
  // {
  //   name: "RSL Bank",
  //   link: "https://public.open.rslmoney.com.au/cds-au/v1",
  // },
  // {
  //   name: "Summerland Credit Union",
  //   link: "https://public.cdr-api.summerland.com.au/cds-au/v1",
  // },
  // {
  //   name: "Central West Credit Union",
  //   link: "https://ib.cwcu.com.au/openbanking/cds-au/v1",
  // },
  // { name: "Goldfields Money", link: "https://prd.bnk.com.au/cds-au/v1" },
  // {
  //   name: "Horizon Bank",
  //   link: "https://onlinebanking.horizonbank.com.au/openbanking/cds-au/v1",
  // },
  // {
  //   name: "Macquarie Credit Union",
  //   link: "https://banking.macquariecu.com.au/OpenBanking/cds-au/v1",
  // },
  // {
  //   name: "Geelong Bank",
  //   link: "https://online.geelongbank.com.au/OpenBanking/cds-au/v1",
  // },
  // {
  //   name: "South West Credit Union",
  //   link: "https://internetbanking.swcredit.com.au/OpenBanking/cds-au/v1",
  // },
  // { name: "ING", link: "https://apic.ing.com.au/cds-au/v1" },
  // {
  //   name: "Bank of China Australia",
  //   link: "https://obdevp.bank-of-china.net.au/cds-au/v1",
  // },
  // {
  //   name: "Circle Alliance Bank",
  //   link: "https://api.cdr.circle.com.au/cds-au/v1",
  // },
  // { name: "P&N Bank", link: "https://public.cdr-api.pnbank.com.au/cds-au/v1" },
  // {
  //   name: "MOVE Bank",
  //   link: "https://api.movebank.com.au/OpenBanking/cds-au/v1",
  // },
  // {
  //   name: "Police Credit Union",
  //   link: "https://api.policecu.com.au/openbanking/cds-au/v1",
  // },
  // { name: "BCU", link: "https://public.cdr-api.bcu.com.au/cds-au/v1" },
  // { name: "Bank Australia", link: "https://cds.api.bankaust.com.au/cds-au/v1" },
  // { name: "UBank", link: "https://openbank.api.ubank.com.au/cds-au/v1" },
  // {
  //   name: "First Choice Credit Union",
  //   link: "https://public.cdr-api.firstchoicecu.com.au/cds-au/v1",
  // },
  // {
  //   name: "Orange Credit Union Limited",
  //   link: "https://online.orangecu.com.au/openbanking/cds-au/v1",
  // },
  // { name: "IMB", link: "https://openbank.openbanking.imb.com.au/cds-au/v1" },
  // {
  //   name: "Bank of Queensland Specialist (BOQS)",
  //   link: "https://secure.api.boqspecialist.com.au/cds-au/v1",
  // },
  // {
  //   name: "BDCU Alliance Bank",
  //   link: "https://api.cdr.bdcualliancebank.com.au/cds-au/v1",
  // },
  // {
  //   name: "Newcastle Permanent Building Society",
  //   link: "https://api.newcastlepermanent.com.au/cds-au/v1",
  // },
  // {
  //   name: "Arab Bank Australia Ltd",
  //   link: "https://openbanking-api.arabbank.com.au/public/cds-au/v1",
  // },
  // {
  //   name: "People's Choice",
  //   link: "https://ob-public.peopleschoice.com.au/cds-au/v1",
  // },
  // {
  //   name: "MyLife MyFinance",
  //   link: "https://api.openbanking.mylifemyfinance.com.au/cds-au/v1",
  // },
  // {
  //   name: "Credit Union SA",
  //   link: "https://openbanking.api.creditunionsa.com.au/cds-au/v1",
  // },
  // {
  //   name: "Defence Bank",
  //   link: "https://product.defencebank.com.au/cds-au/v1",
  // },
  // {
  //   name: "Goulburn Murray Credit Union",
  //   link: "https://secure.gmcu.com.au/openbanking/cds-au/v1",
  // },
  // {
  //   name: "Southern Cross Credit Union",
  //   link: "https://mvp1.sccu.com.au/OpenBanking/cds-au/v1",
  // },
  // {
  //   name: "Community First Credit Union",
  //   link: "https://netbank.communityfirst.com.au/cf-openbanking/cds-au/v1",
  // },

  // {
  //   name: "South West Slopes Credit Union",
  //   link: "https://online.swscu.com.au/OpenBanking/cds-au/v1",
  // },
  // {
  //   name: "Coastline Credit Union",
  //   link: "https://public.cdr-api.coastline.com.au/cds-au/v1,3",
  // },
  // {
  //   name: "Qudos Bank",
  //   link: "https://public.cdr-api.qudosbank.com.au/cds-au/v1,3",
  // },
  // {
  //   name: "Bank of Melbourne",
  //   link: "https://digital-api.bankofmelbourne.com.au/cds-au/v1,3",
  // },
  // {
  //   name: "Gateway Bank",
  //   link: "https://public.cdr-api.gatewaybank.com.au/cds-au/v1,3",
  // },
  // {
  //   name: "Broken Hill Community Credit Union",
  //   link: "https://public.cdr-api.bhccu.com.au/cds-au/v1,3",
  // },
  // {
  //   name: "Police Bank",
  //   link: "https://product.api.policebank.com.au/cds-au/v1,3",
  // },
  // {
  //   name: "Nova Alliance Bank",
  //   link: "https://api.cdr.novaalliancebank.com.au/cds-au/v1,3",
  // },
  // {
  //   name: "Adelaide Bank",
  //   link: "https://api.cdr.adelaidebank.com.au/cds-au/v1,3",
  // },
  // { name: "Westpac", link: "https://digital-api.westpac.com.au/cds-au/v1,3" },
  // { name: "BankSA", link: "https://digital-api.banksa.com.au/cds-au/v1,3" },
  // {
  //   name: "Greater Bank",
  //   link: "https://public.cdr-api.greater.com.au/cds-au/v1,3",
  // },
  // { name: "Rural Bank", link: "https://api.cdr.ruralbank.com.au/cds-au/v1,3" },
  // {
  //   name: "Great Southern Bank",
  //   link: "https://api.open-banking.greatsouthernbank.com.au/cds-au/v1,3",
  // },
  // {
  //   name: "Illawarra Credit Union",
  //   link: "https://onlineteller.cu.com.au/OpenBanking/cds-au/v1,3",
  // },
  // {
  //   name: "Beyond Bank Australia",
  //   link: "https://public.cdr.api.beyondbank.com.au/cds-au/v1,3",
  // },

  // {
  //   name: "Fire Service Credit Union",
  //   link: "https://public.cdr-api.fscu.com.au/cds-au/v1,3",
  // },
  // {
  //   name: "Regional Australia Bank",
  //   link: "https://public-data.cdr.regaustbank.io/cds-au/v1,3",
  // },

  // { name: "Leveraged", link: "https://api.cdr.leveraged.com.au/cds-au/v1,3" },
  // {
  //   name: "MyState Bank",
  //   link: "https://openbank.api.mystate.com.au/cds-au/v1,3",
  // },
  // {
  //   name: "The Capricornian Ltd",
  //   link: "https://onlinebanking.capricornian.com.au/OpenBanking/cds-au/v1,3",
  // },
  // {
  //   name: "AWA Alliance Bank",
  //   link: "https://api.cdr.awaalliancebank.com.au/cds-au/v1,3",
  // },
  // {
  //   name: "Traditional Credit Union Limited",
  //   link: "https://prd.tcu.com.au/cds-au/v1,3",
  // },

  // {
  //   name: "G&C Mutual Bank",
  //   link: "https://ibank.gcmutualbank.com.au/openbanking/cds-au/v1,3",
  // },
  // { name: "Bank First", link: "https://public.open.judo.bank/cds-au/v1,3" },
  // {
  //   name: "Judo Bank",
  //   link: "https://public.cdr.bankfirst.com.au/cds-au/v1,3",
  // },

  // {
  //   name: "Australian Mutual Bank",
  //   link: "https://internetbanking.australianmutual.bank/openbanking/cds-au/v1,3",
  // },
  // {
  //   name: "Cairns Bank",
  //   link: "https://ibanking.cairnsbank.com.au/openbanking-penny/cds-au/v1,3",
  // },
  // {
  //   name: "QBank",
  //   link: "https://banking.qbank.com.au/openbanking/cds-au/v1,3",
  // },
  // {
  //   name: "Bank of Sydney",
  //   link: "https://openbank.api.banksyd.com.au/cds-au/v1,3",
  // },
  // {
  //   name: "Hume Bank",
  //   link: "https://ibank.humebank.com.au/openbanking/cds-au/v1,3",
  // },
  // {
  //   name: "86 400 Bank",
  //   link: "https://public.cdr-api.86400.com.au/cds-au/v1,3",
  // },
  // {
  //   name: "AusWide Bank",
  //   link: "https://api.auswidebank.com.au/OpenBanking/cds-au/v1,3",
  // },
  // {
  //   name: "Australian Military Bank",
  //   link: "https://public.open.australianmilitarybank.com.au/cds-au/v1,3",
  // },
  // {
  //   name: "Delphi Bank",
  //   link: "https://api.cdr.delphibank.com.au/cds-au/v1,3",
  // },

  // { name: "ME Bank", link: "https://api.mebank.com.au/cds-au/v1,3" },

  // {
  //   name: "BankVic",
  //   link: "https://ib.bankvic.com.au/openbanking/cds-au/v1,3",
  // },
];

class Controller {
  constructor(banks) {
    this.banks = banks;
  }
  async bulkInsertRecursive(data) {
    if (data.length <= 0) {
      const productsAfterAdded = await products.findAll();
      console.log(productsAfterAdded);
      return;
    }
    const chunkedData = data.pop();

    Api.bankProducts(
      chunkedData._previousDataValues.link,
      chunkedData._previousDataValues.id
    );

    await this.bulkInsertRecursive(data);
  }

  async create() {
    try {
      await model.destroy({
        where: {},
        truncate: true,
      });
      await sequelize.query("TRUNCATE TABLE products");
      const result = await model.bulkCreate(this.banks);
      await this.bulkInsertRecursive(result);

      console.log(error);

      return { status: 200, data: result };
    } catch (error) {
      return { status: 500, message: error.message };
    }
  }

  async getAllBanks() {
    try {
      return await model.findAll();
    } catch (error) {
      console.log(error.message);
      // throw new Error(error.message);
    }
  }
  async getBankById(id) {
    try {
      const result = await model.findOne({
        where: { id: id },
        include: [{ model: products, as: "products" }],
      });
      return { status: 200, data: result };
    } catch (error) {
      return { status: 500, message: error.message };
    }
  }

  async creatBanksProducts(productsList) {
    try {
      await products.bulkCreate(productsList);
      console.log("products");
    } catch (error) {
      console.log(error.message);
      // throw new Error(error.message);
    }
  }
  async getProductsByBankId(id) {
    try {
      const result = await products.findAll({
        where: { bankId: id },
        include: [
          {
            model: model,
            as: "bank",
          },
        ],
      });
      return { status: 200, data: result };
    } catch (err) {
      return { status: 500, message: err.message };
    }
  }

  async getAllProducts() {
    try {
      const result = await products.findAll({
        include: [
          {
            model: model,
            as: "bank",
          },
        ],
      });
      return { status: 200, data: result };
    } catch (err) {
      return { status: 500, message: err.message };
    }
  }

  async createProductDetails(porudrc_details) {
    console.log(porudrc_details);
    try {
      await product_details.create(porudrc_details);
    } catch (error) {
      console.log(error.message);
      // throw new Error(error.message);
    }
  }

  async getProductDetailsById(id) {
    const result = await product_details.findAll({
      where: { productId: id },
    });
    return { status: 200, data: result };
  }
  catch(err) {
    return { status: 500, message: err.message };
  }
}

module.exports = new Controller(banks);
