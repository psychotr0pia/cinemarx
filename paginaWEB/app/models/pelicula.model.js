module.exports = (sequelize, Sequelize) => {
    const Pelicula = sequelize.define("PELICULA", {
      ID_PELICULA: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      TITULO:{
        type: Sequelize.STRING,
        allowNull: false
      },
      DIRECTOR:{
        type: Sequelize.STRING,
        allowNull: false
      },
      DURACION:{
        type: Sequelize.TIME,
        allowNull: false
      },
      RESTRICCION:{
       type: Sequelize.BOOLEAN,
       defaultValue: 0,
       allowNull: false
      },
      SINOPSIS:{
        type: Sequelize.STRING,
        allowNull: false
      },
      ELENCO:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      CALIFICACION:{
        type: Sequelize.STRING,
        defaultValue: "Todo Publico",
        allowNull: false,
      }
    }
    );
    return Pelicula;
  };
  
