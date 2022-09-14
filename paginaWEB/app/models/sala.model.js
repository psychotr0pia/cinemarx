module.exports = (sequelize, Sequelize) => {
    const Salas = sequelize.define("sala", {
      codigo_sala: {
        type: Sequelize.INTEGRER,
        primaryKey: true,
        allowNull: false
      },
      disponibilidad: {
        type: Sequelize.STRING,
        allowNull:false
      },
      cantidad_asiento:{
        type: Sequelize.Integrer,
        allowNull: false
      },
      tipo_sala: {
        type: Sequelize.STRING,
        defaultValue: "normal",
        allowNull:false
      },
      precio_sala:{
        type: Sequelize.INTEGRER,
        defaultValue: 3500,
        allowNull:false
      },
    });
    return Salas;
  };
  