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
db.admin = require("./admin.model.js")(sequelize, Sequelize);
db.asiento = require("./asiento.model.js")(sequelize, Sequelize);
db.cliente = require("./cliente.model.js")(sequelize, Sequelize);
db.funciones = require("./funciones.model.js")(sequelize, Sequelize);
db.pelicula = require("./pelicula.model.js")(sequelize, Sequelize);
db.sala = require("./sala.model.js")(sequelize, Sequelize);
db.tickets = require("./tickets.model.js")(sequelize, Sequelize);


// 1 a 1 hasOne
// 1 a n hasMany
// n a n belongsToMany


// Pelicula a cine 1 a n
db.pelicula.hasMany(db.funciones, {
  foreignKey: {
    name: 'id_pelicula', type: Sequelize.INTEGER, allowNull: false
  },
  onDelete: "CASCADE", onUpdate: "CASCADE"
});

//admin a funciones 1 a 1
db.admin.hasOne(db.funciones, {
  foreignKey: {
    name: 'rut', type: Sequelize.INTEGER, allowNull: false
  },
  onDelete: "CASCADE", onUpdate: "CASCADE"
});

//funciones a salas n a 1 
db.sala.hasMany(db.funciones, {
  foreignKey: {
    name: 'codigo_sala', type: Sequelize.INTEGER, allowNull: false
  },
  onDelete: "CASCADE", onUpdate: "CASCADE"
});


//Asiento a sala 1 a n
db.sala.hasMany(db.asiento, {
  foreignKey: {
    name: 'codigo_sala', type: Sequelize.INTEGER, allowNull: false
  },
  onDelete: "CASCADE", onUpdate: "CASCADE"
});

//tickets a asiento 1 a n
db.asiento.hasOne(db.tickets, {
  foreignKey: {
    name: 'codigo_asiento', type: Sequelize.INTEGER, allowNull: false
  },
  onDelete: "CASCADE", onUpdate: "CASCADE"
});

//tickets a funciones 1 a n
db.funciones.hasMany(db.tickets, {
  foreignKey: {
    name: 'id_funciones', type: Sequelize.INTEGER, allowNull: false
  },
  onDelete: "CASCADE", onUpdate: "CASCADE"
});



//tickets a clientes 1 a n

db.tickets.hasMany(db.cliente, {
  foreignKey: {
    name: 'id_tickets', type: Sequelize.INTEGER, allowNull: false
  },
  onDelete: "CASCADE", onUpdate: "CASCADE"
});


module.exports = db;
