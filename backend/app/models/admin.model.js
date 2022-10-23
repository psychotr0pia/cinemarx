module.exports = (sequelize, Sequelize) => {
    const Admin = sequelize.define("admin", {
      rut: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING(100),
        allowNull: false
      }
    });
    return Admin;
  };
  
