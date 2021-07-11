const axios = require('axios')
const { Raza, Temperamento } = require('../../db.js')

//obtener todas las razas para la ruta principal
async function obtenerTodasLasRazas() {
    let { data } = await axios(`https://api.thedogapi.com/v1/breeds`)

    //solicitud a DB
    let razas = await Raza.findAll({
        attributes: ["name", "id", "weight", "life_span" ],
        include: {model: Temperamento, attributes: ["name"], through: {attributes: []}}
    })

    let razasParaPrincipal = data.map(perro => {
        return {
            name: perro.name,
            id: perro.id,
            weight: perro.weight.metric,
            life_span: perro.life_span,
            temperaments: perro.temperament,
            image: perro.image.url
        }
    })

    // concatenacion de ambas peticiones
    return razas.concat(razasParaPrincipal)
}


//obtener todas las razas para la ruta de detalles
async function obtenerDetalleDeRazas() {
    let { data } = await axios(`https://api.thedogapi.com/v1/breeds`)

    //solicitud a DB
    let razas = await Raza.findAll({
        attributes: [ "name", "id", "weight", "life_span", "height" ],
        include: {model: Temperamento, attributes: ["name"], through: {attributes: []}}
    })

    let razasParaDetalles = data.map(perro => {
        return {
            name: perro.name,
            id: perro.id,
            weight: perro.weight.metric,
            height: perro.height.metric,
            life_span: perro.life_span,
            temperaments: perro.temperament,
            image: perro.image.url
        }
    })

    // concatenacion de ambas peticiones
    return razas.concat(razasParaDetalles)
}


module.exports = {
    obtenerTodasLasRazas,
    obtenerDetalleDeRazas,
}