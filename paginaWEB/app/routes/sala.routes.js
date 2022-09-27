module.exports = app => {
	const sala= require("../controllers/sala.controller.js");
	var router = require("express").Router();
	//Crear sala
	router.post("/", sala.create);
	//Buscar todas las salas
	router.get("/", sala.findAll)
    	//Buscar una sola sala
    	router.get("/:codigo_sala", sala.findOne)
	//Actualizar sala
	router.put("/:codigo_sala", sala.update);
	//Eliminar sala
	router.delete("/:codigo_sala", sala.delete);
	//Eliminar todas las salas
        router.delete("/", sala.deleteAll);
	//agregar rutas al servidor
	app.use('/api/pelicula', router);
};
