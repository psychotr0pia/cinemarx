module.exports = (sequelize, Sequelize) => {
    const Client = sequelize.define("client", {
      rut: {
        type: Sequelize.INTEGRER
      },
      address: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      }
    });
    return Client;
  };
  