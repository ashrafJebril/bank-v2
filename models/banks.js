"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class banks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      banks.hasMany(models.products, {
        as: "products",
        foreignKey: "bankId",
      });
    }
  }
  banks.init(
    {
      name: DataTypes.STRING,

      link: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "banks",
    }
  );
  return banks;
};
