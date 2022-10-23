module.exports = (sequelize, Sequelize) => {
    const Cliente = sequelize.define("CLIENTE", {
      RUT: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull:false
      },
      NOMBRE: {
        type: Sequelize.STRING(100),
        allowNull:false
      },
      APELLIDO:{
        type: Sequelize.STRING(100),
        allowNull:false
      },
      EDAD:{
        type: Sequelize.DATEONLY,
        allowNull:false
      }

    });
    return Cliente;
  };
  
