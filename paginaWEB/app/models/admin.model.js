module.exports = (sequelize, Sequelize) => {
    const Admin = sequelize.define("ADMIN", {
      RUT: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      PASSWORD: {
        type: Sequelize.STRING(100),
        allowNull: false
      }
    });
    return Admin;
  };
  
