"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      products.hasMany(models.product_details, {
        as: "details",
        foreignKey: "productId",
      });
      products.belongsTo(models.banks, {
        as: "bank",
        foreignKey: "bankId",
      });
      // define association here
    }
  }
  products.init(
    {
      name: DataTypes.STRING,
      productId: DataTypes.STRING,
      // link: DataTypes.STRING,
      brand: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      isTailored: {
        type: DataTypes.BOOLEAN,
        defaultVaule: false,
      },
      productCategory: {
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
      // additionalInformation: {
      //   type: DataTypes.JSONB,
      // },
      bankId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "products",
    }
  );
  return products;
};
