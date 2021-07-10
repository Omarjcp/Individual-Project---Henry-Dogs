const { Raza, Temperamento } = require('../db.js')


async function crearRaza(req, res) {
    //req del body
    try{
        const { name, height, weight, life_span, temperament } = req.body
        //crea raza en DB
        const raza = await Raza.create({
            name,
            height,
            weight,
            life_span
        })

        await raza.setTemperamentos(temperament)

        if(raza){
            return res.json({
                message: 'perro creado correctamente',
                data: raza
            })
        }
    }
    catch(err){
        res.status(404)
    }
}


module.exports = {
    crearRaza,
}