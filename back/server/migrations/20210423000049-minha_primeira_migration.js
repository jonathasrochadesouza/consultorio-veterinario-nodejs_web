'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.createTable('livro_teste', { 
        id: {
          type: Sequelize.INTEGER,
          primarykey: true,
          autoIncrement: true,
          allowNull: false, //Não permite Nullos (not Null) do sql
        },
        descricao: {
          type: Sequelize.STRING,
          allowNull:  false,
        },
        editore: {
          type: Sequelize.INTEGER(20),
          allowNull:  false,
        },
        isbn:  {
          type: Sequelize.STRING(13),
          allowNull: false,
        },
        quantidade: {
          type: Sequelize.INTEGER,
          allowNull:  false,
        },
        assunto: {
            type: Sequelize.INTEGER,
            allowNull:  false,
        },
        autor: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        create_at: {//Toda vez que for criado poode ser identeificado quando foi realizado o processo uma forma de versionar
          type: Sequelize.DATE,
          allowNull: false,
        },
        update_at: {//Toda vez que for alterado poode ser identeificado quando foi realizado o processo uma forma de versionar
          type: Sequelize.DATE,
          allowNull:  false,
        }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('livro_teste');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
