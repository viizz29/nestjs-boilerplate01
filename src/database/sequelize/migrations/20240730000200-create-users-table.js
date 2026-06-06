'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable(
        'users',
        {
          user_id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.literal('gen_random_uuid()'),
          },

          name: {
            allowNull: false,
            type: Sequelize.STRING(255),
          },

          email: {
            allowNull: false,
            type: Sequelize.STRING(255),
            unique: true,
          },

          password_hash: {
            allowNull: false,
            type: Sequelize.STRING(255),
          },

          role: {
            type: Sequelize.STRING(50),
            allowNull: false,
            defaultValue: 'user',
          },

          created_at: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
          },
          updated_at: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
          },
        },
        { transaction },
      );
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.dropTable('users', { transaction });
    });
  },
};
