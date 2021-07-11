const axios = require('axios')
const { Temperamento } = require('../db.js')

async function obtenerTemperamento(req, res) {
    try{
        let { data } = await axios(`https://api.thedogapi.com/v1/breeds`)

        let arrayTemperamentos = data.map((raza) => {
            return raza.temperament
        })
            
        //separo cada temperamento como un elemento del array
        arrayTemperamentos = arrayTemperamentos.join(", ").split(",")

        //eliminar elementos vacios
        arrayTemperamentos = arrayTemperamentos.filter(temperamento => {
            if(temperamento.length > 2) return temperamento
        })

        for(let i = 0; i < arrayTemperamentos.length; i++) {
            Temperamento.create({
                name: arrayTemperamentos[i]
            })
        }
        let temperamentosDb = await Temperamento.findAll()
        

        if(temperamentosDb) {
            res.json({
                temperamentosDb
            })
        }
    }
    catch(err) {
        console.log(err)
    }
    
}

module.exports = obtenerTemperamento