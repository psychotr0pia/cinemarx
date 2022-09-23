module.exports = (sequelize, Sequelize) => {
    const Cliente = sequelize.define("CLIENTE", {
      RUT: {
        type: Sequelize.INTEGER,
        primarykey: true,
        allowNull:false
      },
      ID_TICKET: {
        type: Sequelize.INTEGER,
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
  
