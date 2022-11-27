// Importar dependencias
const ComentModel = require('../models/coment.model');
// Crear un nuevo cliente
exports.create = (req, res) => {
    // Agregar validaciones

    // 
    const coment = new ComentModel({
        name: req.body.name,
        text: req.body.text,
        rating: req.body.rating,
        id_pelicula: req.body.id_pelicula,
        id_coment: req.body.id_coment
    })
    coment.save()
        .then(data =>{
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
};
// Retornar todos los clientes de la base de datos.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: name } : {};
    ComentModel.find(condition)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
};

// Buscar un cliente por su id
exports.findId = (req, res) => {
    const id_pelicula = req.params.id_pelicula;
    ComentModel.findById(id_pelicula)
        .then(data => {
            if (!data){
                res.status(404).send({ message: "No se encontró comentario con el id " + id_pelicula });
            }else{
                res.status(200).json(data)
            }
        })
        .catch(err => {
            res.status(500).json({message: "Error al buscar comentario"})
        })
};
// actualizar un cliente por su id
exports.update = (req, res) => {
    // Agregar validaciones

    // 
    const id = req.params.id;
    ComentModel.findByIdAndUpdate(id, req.body,{ useFindAndModify: false })
        .then(data => {
            if (!data){
                res.status(404).send({ message: "No se encontró comentario con el id " + id });
            }else{
                res.status(200).json(data)
            }
        })
        .catch(err => {
            res.status(500).json({message: "Error al buscar comentario"})
        })
};

// eliminar un cliente
exports.delete = (req, res) => {
    const id = req.params.id;
    ComentModel.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: "No se encontró comentario con el id " + id });
            } else {
                res.status(200).send({ message: "comentario eliminado"})
            }
        })
        .catch(err => {
            res.status(500).json({message: "Error al buscar comentario"})
        })
};
// eliminar a todos los clientes
exports.deleteAll = (req, res) => {
    ComentModel.deleteMany({})
        .then(data => {
            res.status(200).send({ message: `${data.deletedCount} comentario eliminados`})
        })
        .catch(err => {
            res.status(500).json({message: "Error"})
        })
};


