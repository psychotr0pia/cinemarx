module.exports = (sequelize, Sequelize) => {
    const Cliente = sequelize.define("cliente", {
      rut: {
        type: Sequelize.INTEGRER,
        primarykey: true,
        allowNull:false
      },
      id_ticket: {
        type: Sequelize.INTEGRER,
        allowNull:false
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull:false
      },
      apellido:{
        type: Sequelize.STRING,
        allowNull:false
      },
      edad:{
        type: Sequelize.STRING,
        allowNull:false
      }

    });
    return Cliente;
  };
  