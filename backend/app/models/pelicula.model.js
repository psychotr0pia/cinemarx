module.exports = (sequelize, Sequelize) => {
    const Pelicula = sequelize.define("pelicula", {
      id_pelicula: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      titulo:{
        type: Sequelize.STRING,
        allowNull: false
      },
      director:{
        type: Sequelize.STRING,
        allowNull: false
      },
      duracion:{
        type: Sequelize.INTEGER, //duracion en segundos
        allowNull: false
      },
      restriccion:{
       type: Sequelize.INTEGER,
       defaultValue: 0,
       allowNull: false
      },
      sinopsis:{
        type: Sequelize.STRING,
        allowNull: false
      },
      elenco:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      calificacion:{
        type: Sequelize.STRING,
        defaultValue: "Todo Publico",
        allowNull: false,
      }
    }
    );
    return Pelicula;
  };
  
