"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     * "brand": "dolor consequat ipsum",
        "description": "non enim Except",
        "isTailored": false,
        "lastUpdated": "voluptate deserunt sed",
        "name": "culpa sed quis id tempor",
        "productCategory": "TRADE_FINANCE",
        "productId": "irure in",
        "effectiveFrom": "velit voluptate in dolor",
        "effectiveTo": "est ex sed",
        "brandName": "officia",
        "applicationUri": "magna",
     */
    await queryInterface.addColumn("products", "brand", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("products", "description", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("products", "isTailored", {
      type: Sequelize.BOOLEAN,
      defaultVaule: false,
    });
    await queryInterface.addColumn("products", "productCategory", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("products", "effectiveFrom", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("products", "effectiveTo", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("products", "brandName", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("products", "applicationUri", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("products", "additionalInformation", {
      type: Sequelize.JSON,
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
