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
      name: DataTypes.STRING,
      productId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "product_details",
    }
  );
  return product_details;
};
