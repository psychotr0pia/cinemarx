module.exports = app => {
	const funciones = require("../controllers/funciones.controller.js");
	var router = require("express").Router();
	//Crear funcion
	router.post("/", funciones.create);
	//Buscar funcion por PK
	router.get("/:id_funciones", funciones.findOne);
	//Buscar todas las funciones
	router.get("/", funciones.findAll)
	//Actualizar horario funcion
	router.put("/:id_funciones", funciones.update);
	//Eliminar funcion
	router.delete("/:id_funciones", funciones.delete);
	//Eliminar todas las funciones
	router.delete("/", funciones.deleteAll);
	//agregar rutas al servidor
	app.use('/api/admin', router);
};
