const { Raza, Temperamento } = require("../db.js");

async function crearRaza(req, res) {
  //req del body
  try {
    const {
      nombre,
      alturaMax,
      alturaMin,
      pesoMax,
      pesoMin,
      añosMax,
      añosMin,
      temperamentos,
    } = req.body;

    const raza = await Raza.create({
      id: nombre,
      name: nombre,
      height: `${alturaMin} - ${alturaMax}`,
      weight: `${pesoMin} - ${pesoMax}`,
      life_span: `${añosMin} - ${añosMax}`,
    });

    await raza.setTemperamentos(temperamentos);

    if (raza) {
      return res.json({
        message: "perro creado correctamente",
        data: raza,
      });
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = crearRaza;
