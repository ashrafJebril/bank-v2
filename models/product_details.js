"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      product_details.belongsTo(models.products, {
        as: "product",
        foreignKey: "productId",
      });
    }
  }
  product_details.init(
    {
      brand: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      isTailored: {
        type: DataTypes.BOOLEAN,
      },
      lastUpdated: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
      },
      productCategory: {
        type: DataTypes.STRING,
      },
      productId: {
        type: DataTypes.STRING,
      },
      effectiveFrom: {
        type: DataTypes.STRING,
      },
      effectiveTo: {
        type: DataTypes.STRING,
      },
      brandName: {
        type: DataTypes.STRING,
      },
      applicationUri: {
        type: DataTypes.STRING,
      },
      additionalInformation: {
        type: DataTypes.JSON,
      },
      cardArt: {
        type: DataTypes.JSON,
      },
      bundles: {
        type: DataTypes.JSON,
      },
      features: {
        type: DataTypes.JSON,
      },
      constraints: {
        type: DataTypes.JSON,
      },
      eligibility: {
        type: DataTypes.JSON,
      },
      fees: {
        type: DataTypes.JSON,
      },
      depositRates: {
        type: DataTypes.JSON,
      },
      lendingRates: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "product_details",
    }
  );
  return product_details;
};
