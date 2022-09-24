module.exports = (sequelize, Sequelize) => {
    const Funciones = sequelize.define("FUNCION", {
      id_funciones: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      rut: { //fk
        type: Sequelize.INTEGER,
        allowNull: false
      },
      id_pelicula: { //fk
        type: Sequelize.INTEGER,
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
  
