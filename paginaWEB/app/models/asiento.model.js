module.exports = (sequelize, Sequelize) => {
    const Asiento = sequelize.define("asiento", {
      fila: {
        type: Sequelize.INTEGRER,
        primaryKey: true,
        allowNull: false
      },
      columna: {
        type: Sequelize.STRING,
        allowNull: falase
      },
      codigo_sala: {
        type: Sequelize.STRING,
        allowNull: false
      },
      disponibilidad:{
        type: Sequelize.STRING,
        allowNull: falase
      }
    });
    return Asiento;
  };
  