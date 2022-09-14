module.exports = (sequelize, Sequelize) => {
    const Admin = sequelize.define("admin", {
      Rut: {
        type: Sequelize.INTEGRER,
        primaryKey: true,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
    return Admin;
  };
  