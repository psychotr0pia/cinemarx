module.exports = app => {
	const pelicula = require("../controllers/pelicula.controller.js");
	var router = require("express").Router();
	//Crear pelicula
	router.post("/", pelicula.create);
	//Buscar todas las peliculas
	router.get("/", pelicula.findAll)
    //Buscar una sola pelicula
    router.get("/:id_pelicula", pelicula.findOne)
	//Actualizar pelicula
	router.put("/:id_pelicula", pelicula.update);
	//Eliminar pelicula
	router.delete("/:id_pelicula", pelicula.delete);
	//Eliminar todas las PELICULAS
        router.delete("/", pelicula.deleteAll);
	//agregar rutas al servidor
	app.use('/api/pelicula', router);
};
