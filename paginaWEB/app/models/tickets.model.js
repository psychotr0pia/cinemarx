module.exports = (sequelize, Sequelize) => {
    const Tickets = sequelize.define("TICKET", {
      id_tickets:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
  
