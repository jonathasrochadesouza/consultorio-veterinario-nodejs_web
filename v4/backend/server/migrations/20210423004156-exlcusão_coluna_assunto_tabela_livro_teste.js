'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('livro_teste', 'assunto');
  },

  down: async (queryInterface, Sequelize) => {
   
  }
};
