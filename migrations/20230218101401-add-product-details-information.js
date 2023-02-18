"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn("product_details", "brand", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("product_details", "description", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("product_details", "isTailored", {
      type: Sequelize.BOOLEAN,
    });
    await queryInterface.addColumn("product_details", "lastUpdated", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("product_details", "productCategory", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("product_details", "effectiveFrom", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("product_details", "effectiveTo", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("product_details", "brandName", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("product_details", "applicationUri", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("product_details", "additionalInformation", {
      type: Sequelize.JSON,
    });
    await queryInterface.addColumn("product_details", "cardArt", {
      type: Sequelize.JSON,
    });
    await queryInterface.addColumn("product_details", "bundles", {
      type: Sequelize.JSON,
    });
    await queryInterface.addColumn("product_details", "features", {
      type: Sequelize.JSON,
    });
    await queryInterface.addColumn("product_details", "constraints", {
      type: Sequelize.JSON,
    });
    await queryInterface.addColumn("product_details", "eligibility", {
      type: Sequelize.JSON,
    });
    await queryInterface.addColumn("product_details", "fees", {
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
