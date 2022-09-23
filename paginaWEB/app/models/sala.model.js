module.exports = (sequelize, Sequelize) => {
    const Salas = sequelize.define("SALA", {
      CODIGO_SALA: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      DISPONIBILIDAD: {
        type: Sequelize.STRING(100),
        allowNull:false
      },
      CANTIDAD_DE_ASIENTOS:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      tipo_sala: {
        type: Sequelize.STRING,
        defaultValue: "normal",
        allowNull:false
      },
      precio_sala:{
        type: Sequelize.INTEGER,
        defaultValue: 3500,
        allowNull:false
      },
    });
    return Salas;
  };
  
