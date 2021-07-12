const axios = require('axios')
const { Raza, Temperamento } = require('../db.js')
const { obtenerPrincipalRazas, obtenerDetalleDeRazas } = require('./funciones/razasPrincipal.js')


//8 primeras razas de db y api
async function obtenerRazas(req, res) {
    try{
        let { name } = req.query
        let { pag } = req.query
        //todas las razas api & db
        let todasRazas = await obtenerPrincipalRazas()

        //si existe la query
        if(name) {
            //nombres de razas que incluyan la query
            let razasFiltradas = todasRazas.filter(raza => {
                if(raza.name.toLowerCase().includes(name.toLowerCase())) return raza
            })

            //si existe algo en el array filtrado, lo muestra
            if(razasFiltradas.length > 0){
                let primerosOcho = razasFiltradas.slice(0, 8)
                res.json(primerosOcho)
            }
            //si el array esta vacio, error
            else{
                return res.status(404).json({
                    message: "raza no encontrada."
                })
            }
        }

        if(pag) {
            let desde = Number(pag) * 8
            let hasta = desde + 8
            let siguientesOcho = todasRazas.slice(desde, hasta)
            return res.json(siguientesOcho)
        }

        //las 8 primeras razas del total
        let primerosOcho = todasRazas.slice(0, 8)

        // miestra las razas
        if(primerosOcho){
            return res.json(primerosOcho)
        }


    }
    catch(err){
        console.log(err)
    }
}

async function obtenerRazaId(req, res) {
    try{
        const { idRaza } = req.params
        let todasRazas = await obtenerDetalleDeRazas()

        if(idRaza) {
            let razaConElId = todasRazas.filter(raza => {
                if(String(raza.id) === String(idRaza)) return raza
            })
            res.json(razaConElId)
        }
    }
    catch(err) {
        console.log(err)
    }
}



module.exports = {
    obtenerRazas,
    obtenerRazaId
}