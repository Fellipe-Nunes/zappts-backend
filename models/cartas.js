const mongoose = require('mongoose')

const CartaSchema = new mongoose.Schema({
    sexo : {
        type : String,
        required : true
    },
    nascimento : {
        type : String,
        required : true
    },
    nome : {
        type : String,
        required : true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    texto : {
        type : String,
        required : true
    },
    is_active: {
        type: Boolean,
        default: true
    },
    is_admin: {
        type: Boolean,
        default: false
    },
    date: {
      type: Date,
      default: Date.now
    }
})

module.exports = mongoose.model('cartas', CartaSchema)