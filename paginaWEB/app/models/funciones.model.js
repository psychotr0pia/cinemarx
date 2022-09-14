module.exports = (sequelize, Sequelize) => {
    const Funciones = sequelize.define("funcion", {
      id_funciones: {
        type: Sequelize.INTEGRER,
        primaryKey: true,
        allowNull: false
      },
      rut: { //fk
        type: Sequelize.INTEGRER,
        allowNull: false
      },
      id_pelicula: { //fk
        type: Sequelize.INTEGRER,
        allowNull: false
      },
      codigo_sala:{ //fk
        type: Sequelize.STRING,
        allowNull: false
      },
      horario:{
        type: Sequelize.TIME,
        allowNull:false
      },
    });
    return Funciones;
  };
  