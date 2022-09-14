module.exports = (sequelize, Sequelize) => {
    const Tickets = sequelize.define("ticket", {
      id_tickets:{
        type: Sequelize.INTEGRER,
        primaryKey: true,
        allowNull: false
      },
      id_funciones: { //fk
        type: Sequelize.INTEGRER,
        allowNull: false
      },
      codigo_asiento:{
        type: Sequelize.INTEGRER, //AUTO_INCREMENT Y FK
        allowNull: false
      },
      precio: {
        type: Sequelize.INTEGRER,
        allowNull: false
      },
      fecha_compra: {
        type: Sequelize.DATE,
        allowNull: false
      }

    });
    return Tickets;
  };
  