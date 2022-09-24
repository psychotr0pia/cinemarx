module.exports = (sequelize, Sequelize) => {
    const Asiento = sequelize.define("ASIENTO", {
      CODIGO_ASIENTO:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        //falta poner el auto increment
        allowNull: false
      },
      CODIGO_SALA: { //fk
        type: Sequelize.STRING,
        allowNull: false
      },
      DISPONIBILIDAD:{
        type: Sequelize.STRING,
        allowNull: false
      },
      FILA: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      COLUMNA: {
        type: Sequelize.STRING,
        allowNull: false
      }

    });
    return Asiento;
  };
  
