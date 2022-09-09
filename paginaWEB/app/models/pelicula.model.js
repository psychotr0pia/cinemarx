module.exports = (sequelize, Sequelize) => {
    const Pelicula = sequelize.define("pelicula", {
      id_pelicula: {
        type: Sequelize.INTEGRER,
        primaryKey: true,
        allowNull: false
      },
      id_catalogo: {//aqui deberia colocarla como FK
        type: Sequelize.STRING,
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
        type: Sequelize.TIME,
        allowNull: false
      },
      restriccion:{
       type: Sequelize.BOOLEAN,
       defaultValue: False,
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
  