'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable(
        'notes',
        {
          note_id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.literal('gen_random_uuid()'),
          },

          user_id: {
            allowNull: false,
            type: Sequelize.UUID,
            references: {
              model: 'users',
              key: 'user_id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },

          title: {
            allowNull: false,
            type: Sequelize.STRING(255),
          },

          content: {
            allowNull: true,
            type: Sequelize.TEXT,
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
      await queryInterface.dropTable('notes', { transaction });
    });
  },
};
