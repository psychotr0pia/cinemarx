//dependencias
const { query } = require("express");
const { pelicula } = require("../models");
const db = require("../models");
const Pelicula = db.pelicula;
const Op = db.Sequelize.Op;
//Si el query esta vacio
exports.create = (req, res) => {
if(!req.body){
	res.status(400).send({
		message: "El contenido no puede estar vacio"
	});
	return;
}
//Crear una nueva pelicula
const pelicula = {
	titulo: req.body.titulo,
    director: req.body.director,
    duracion: req.body.duracion,
    restriccion: req.body.restriccion,
    sinopsis: req.body.sinopsis,
    elenco: req.body.elenco,
    calificacion: req.body.calificacion

};
//Guardarlo en la base de datos
Pelicula.create(pelicula).then(data => {
	res.status(200).send(data);
})
.catch(err => {
	res.status(500).send({
	message: 
		err.message || "Error al crear una nueva PELICULA"
	});
});
};
//Buscar todas las peliculas 
exports.findAll = (req, res) => {
	Pelicula.findAll()
	.then(data =>{
		res.status(200).send(data);
	});
};

//Buscar una pelicula por PK
exports.findOne = (req,res) => {
    const id_pelicula = req.params.id_pelicula;
    Pelicula.findByPk(id_pelicula)
    .then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `No se encontró la pelicula.`
            });
         }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error en la búsqueda"
        });
    });

};
//Actualizar datos pelicula
exports.update = (req, res) => {
	const id_pelicula = req.body.id_pelicula;
	//console.log(rut)
	//console.log(req.body)
	Pelicula.update(req.body, {where: {id_pelicula: id_pelicula}})
	.then(num => {
        if (num == 1) {
            res.status(200).send({
                message: "Pelicula actualizada"
            });
        } else {
            res.send({
                message: `No se pudo actualizar la pelicula`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error en actualización"
        });
    });

};
//Eliminar PELICULA
exports.delete = (req, res) => {
	const id_pelicula = req.params.id_pelicula;
	Pelicula.destroy({where: {id_pelicula: id_pelicula}})
	.then(num => {
        if (num == 1) {
            res.status(200).send({
                message: "Pelicula eliminada de la base de datos."
            });
        } else {
            res.send({
                message: `No se pudo eliminar la pelicula de la base de datos.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error en eliminacion"
        });
    });
};
//Eliminar todas las peliculas
exports.deleteAll = (req, res) => {
	Pelicula.destroy({
		where: {},
		truncate: false
	}).
		then(nums => {
			res.status(200).send({message: '${nums} PELICULAS eliminadas!'});
		})
		.catch(err => {
			res.status(500).send({
				message:
				err.message || "Error al eliminar todas las PELICULAS"
			});
		});
};
