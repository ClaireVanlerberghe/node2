const mongoose = require('mongoose')

const japcarsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, `Un modèle est obligatoire`]
    },
    year: {
        type: String,
        required: [true, `Une année est obligatoire`],
    },
    manufacturer: {
        type: String,
        required: [true, `Un constructeur est obligatoire`],
    },
    origin: {
        type: String,
        required: [true, `Une origine est obligatoire`],
    },
    image: {
        type: String,
        required: [true, `Une image est obligatoire`],
    },
    createdAt: {
        type: Date
    },
    updateAt: {
        type: Date
    }
})

const Car = mongoose.model('japanese_cars', userSchema)

module.exports = User