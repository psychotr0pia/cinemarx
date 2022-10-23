//dependencias
const { query } = require("express");
const { asiento } = require("../models");
const db = require("../models");
const Asiento = db.asiento;
const Op = db.Sequelize.Op;

//ver si estaba basico
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "El contenido no puede estar vacio"
        });
        return;
    }
    //Crear un nuevo Asiento
    const asiento = {
        DISPONIBILIDAD: req.body.disponibilidad,
        FILA: req.body.fila,
        COLUMNA: req.body.columna,
        codigo_sala: req.body.codigo_sala
    };
    //Guardarlo en la base de datos
    Asiento.create(asiento).then(data => {
        res.status(200).send(data);
    })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error al crear un nuevo ADMIN"
            });
        });
};

//Buscar todos los Asientos
exports.findAll = (req, res) => {
    Asiento.findAll({ include: { model: db.sala} })
        .then(data => {
            res.status(200).send(data);
        });
};


//Buscar una sala por PK
exports.findOne = (req, res) => {
    const codigo_asiento = req.params.codigo_asiento;
    Sala.findByPk(codigo_asiento,{ include: { model: db.sala} })
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se encontró el asiento.`
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
    const codigo_asiento = req.body.codigo_asiento;
    Sala.update(req.body, { where: { codigo_asiento: codigo_asiento } })
        .then(num => {
            if (num == 1) {
                res.status(200).send({
                    message: "asiento actualizado"
                });
            } else {
                res.send({
                    message: "No se pudo actualizar el asiento"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error en actualización"
            });
        });

};


//Eliminar asiento
exports.delete = (req, res) => {
	const codigo_asiento = req.params.codigo_asiento;
	Sala.destroy({where: {codigo_asiento : codigo_asiento}})
	.then(num => {
        if (num == 1) {
            res.status(200).send({
                message: "asiento eliminado de la base de datos."
            });
        } else {
            res.send({
                message: `No se pudo eliminar el asiento de la base de datos.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error en eliminacion"
        });
    });
};


//Eliminar todos los asientos
exports.deleteAll = (req, res) => {
	Sala.destroy({
		where: {},
		truncate: false
	}).
		then(nums => {
			res.status(200).send({message: 'Todas los asientos eliminados!'});
		})
		.catch(err => {
			res.status(500).send({
				message:
				err.message || "Error al eliminar todas las salas"
			});
		});
};
