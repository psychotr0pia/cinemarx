//dependencias
const { query } = require("express");
const { sala} = require("../models");
const db = require("../models");
const Sala = db.sala;
const Op = db.Sequelize.Op;
//Si el query esta vacio
exports.create = (req, res) => {
if(!req.body){
	res.status(400).send({
		message: "El contenido no puede estar vacio"
	});
	return;
}
//Crear una nueva sala
const sala = {
	    DISPONIBILIDAD: req.body.disponibilidad,
        CANTIDAD_DE_ASIENTOS: req.body.cantidad_de_asientos,
    	tipo_sala: req.body.tipo_sala,
	    precio_sala: req.body.precio_sala
};
//Guardarlo en la base de datos
Sala.create(sala).then(data => {
	res.status(200).send(data);
})
.catch(err => {
	res.status(500).send({
	message: 
		err.message || "Error al crear una nueva sala"
	});
});
};
//Buscar todas las salas
exports.findAll = (req, res) => {
	Sala.findAll()
	.then(data =>{
		res.status(200).send(data);
	});
};

//Buscar una sala por PK
exports.findOne = (req,res) => {
    const codigo_sala= req.params.codigo_sala;
    Sala.findByPk(codigo_sala)
    .then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `No se encontró la sala.`
            });
         }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error en la búsqueda"
        });
    });

};
//Actualizar datos sala
exports.update = (req, res) => {
	const codigo_sala = req.body.codigo_sala;
	Sala.update(req.body, {where: {codigo_sala: codigo_sala}})
	.then(num => {
        if (num == 1) {
            res.status(200).send({
                message: "Sala actualizada"
            });
        } else {
            res.send({
                message: "No se pudo actualizar la sala"
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error en actualización"
        });
    });

};
//Eliminar sala
exports.delete = (req, res) => {
	const codigo_sala = req.body.codigo_sala;
	Sala.destroy({where: {codigo_sala : codigo_sala}})
	.then(num => {
        if (num == 1) {
            res.status(200).send({
                message: "Sala eliminada de la base de datos."
            });
        } else {
            res.send({
                message: `No se pudo eliminar la sala de la base de datos.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error en eliminacion"
        });
    });
};
//Eliminar todas las salas
exports.deleteAll = (req, res) => {
	Sala.destroy({
		where: {},
		truncate: false
	}).
		then(nums => {
			res.status(200).send({message: 'Todas las salas eliminadas!'});
		})
		.catch(err => {
			res.status(500).send({
				message:
				err.message || "Error al eliminar todas las salas"
			});
		});
};
