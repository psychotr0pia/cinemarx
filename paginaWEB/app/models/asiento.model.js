module.exports = (sequelize, Sequelize) => {
    const Asiento = sequelize.define("asiento", {
      codigo_asiento:{
        type: Sequelize.INTEGRER,
        primaryKey: true,
        //falta poner el auto increment
        allowNull: false
      },
      codigo_sala: { //fk
        type: Sequelize.STRING,
        allowNull: false
      },
      disponibilidad:{
        type: Sequelize.STRING,
        allowNull: false
      },
      fila: {
        type: Sequelize.INTEGRER,
        primaryKey: true,
        allowNull: false
      },
      columna: {
        type: Sequelize.STRING,
        allowNull: false
      }

    });
    return Asiento;
  };
  