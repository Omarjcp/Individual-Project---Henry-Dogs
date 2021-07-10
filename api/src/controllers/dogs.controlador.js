const axios = require('axios')
const { Raza, Temperamento } = require('../db.js')

//imagen, nombre, temperamento
async function obtenerRazas(req, res) {
    try{
        //peticion a api
        const { data } = await axios(`https://api.thedogapi.com/v1/breeds`)
        //solicitud a DB
        const razas = await Raza.findAll()
        //concatenacion de ambas peticiones
        let respuestaRazas = data.concat(razas)
        //respuesta del controlador
        if(data){
            let primerosOcho = respuestaRazas.slice(respuestaRazas.length-8)
            // let razasDatosNecesarios = primerosOcho.map((raza) => {
            //     return {
            //         name: raza.name, 
            //         temperament: raza.temperament,
            //         weight: raza.weight,
            //         image: raza.image
            //     }
            // })
            return res.json(primerosOcho)
        }

    }
    catch(err){
        console.log(err)
    }

}


module.exports = {
    obtenerRazas,
}