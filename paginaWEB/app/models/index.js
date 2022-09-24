// Importe de dependencias
const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
// Inicialización de Sequelize
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
//Validar coneccion a base de datos
/*
Sequelize.authenticate().
then(() => {
  console.log("Conectado a base de datos")
})
.catch(err => {
  console.log("Error"+err)
})
*/
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
// Importa modelos a Sequelize
db.admin = require("./admin.model.js")(sequelize,Sequelize);
db.asiento = require("./asiento.model.js")(sequelize, Sequelize);
db.cliente = require("./cliente.model.js")(sequelize,Sequelize);
db.funciones= require("./funciones.model.js")(sequelize,Sequelize);
db.pelicula = require("./pelicula.model.js")(sequelize, Sequelize);
db.sala = require("./sala.model.js")(sequelize,Sequelize);
db.tickets = require("./tickets.model.js")(sequelize, Sequelize);

//relaciones. Falta poner ON DELETE y ON UPDATE
db.sala.hasMany(db.asiento, {
  foreignKey: 'CODIGO_SALA'
});
db.asiento.belongsTo(db.sala);

module.exports = db;
