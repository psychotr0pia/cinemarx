module.exports = (sequelize, Sequelize) => {
    const Funciones = sequelize.define("FUNCIONES", {
      id_funciones: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      horario:{
        type: Sequelize.TIME,
        allowNull:false
      },
    });
    return Funciones;
  };
  
