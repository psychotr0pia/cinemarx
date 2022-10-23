module.exports = app => {
	const asientos = require("../controllers/asientos.controller.js");
	var router = require("express").Router();
	//Crear funcion
	router.post("/", asientos.create);
	//Buscar funcion por PK
	router.get("/:codigo_de_asiento", asientos.findOne);
	//Buscar todas las asientos
	router.get("/", asientos.findAll)
	//Actualizar horario funcion
	router.put("/:codigo_de_asiento", asientos.update);
	//Eliminar funcion
	router.delete("/:codigo_de_asiento", asientos.delete);
	//Eliminar todas las asientos
	router.delete("/", asientos.deleteAll);
	//agregar rutas al servidor
	app.use('/api/asientos', router);
};
