module.exports = (sequelize, Sequelize) => {
    const Tickets = sequelize.define("TICKET", {
      id_tickets:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      id_funciones: { //fk
        type: Sequelize.INTEGER,
        allowNull: false
      },
      codigo_asiento:{
        type: Sequelize.INTEGER, //AUTO_INCREMENT Y FK
        allowNull: false
      },
      precio: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      fecha_compra: {
        type: Sequelize.DATE,
        allowNull: false
      }

    });
    return Tickets;
  };
  
