"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Handy",
          profession: "Admin microservice",
          role: "admin",
          email: "handy@gmail.com",
          password: await bcrypt.hash("password", 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Nugraha",
          profession: "Backend Developer",
          role: "student",
          email: "nugraha@gmail.com",
          password: await bcrypt.hash("password", 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("users", null, {});
  },
};
