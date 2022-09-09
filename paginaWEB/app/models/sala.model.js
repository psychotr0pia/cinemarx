module.exports = (sequelize, Sequelize) => {
    const Sala = sequelize.define("sala", {
      codigo_sala: {
        type: Sequelize.INTEGRER,
        primaryKey: true,
        allowNull: false
      },
      id_pelicula: {
        type: Sequelize.INTEGRER,
        allowNull: false
      },
      disponibilidad: {
        type: Sequelize.STRING,
        allowNull:false
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
    return Sala;
  };
  