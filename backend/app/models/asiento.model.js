module.exports = (sequelize, Sequelize) => {
    const Asiento = sequelize.define("ASIENTO", {
      CODIGO_ASIENTO:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      DISPONIBILIDAD:{
        type: Sequelize.STRING,
        allowNull: false
      },
      FILA: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      COLUMNA: {
        type: Sequelize.STRING,
        allowNull: false
      },
    });
    return Asiento;
  };
  
