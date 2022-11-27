const mongoose = require('mongoose');
const ComentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
      text: {
        type: String,
        required: true,
    },
    rating:{
        type: Number,
        min:0,
        max:5
    },
    id_pelicula:{
        type: Number,
    },
    id_coment:{
        type: String
    }

    })
    module.exports = mongoose.model('Coment', ComentSchema)
    
