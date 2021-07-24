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

    if (
      !nombre ||
      !alturaMax ||
      !alturaMin ||
      !pesoMax ||
      !pesoMin ||
      !añosMax ||
      !añosMin
    ) {
      return res.status(404).json({
        message:
          "Todos los campos son obligatorios (a excepción del temperamento)",
      });
    }

    const razaDb = await Raza.findByPk(nombre);
    if (razaDb) {
      return res.json({
        message: "Raza de perro ya existente",
      });
    } else {
      const raza = await Raza.create({
        id: nombre,
        name: nombre,
        height: `${alturaMin} - ${alturaMax}`,
        weight: `${pesoMin} - ${pesoMax}`,
        life_span: `${añosMin} - ${añosMax}`,
      });

      if (raza && temperamentos.length > 0) {
        await raza.setTemperamentos(temperamentos);

        return res.json({
          message: "perro creado correctamente",
        });
      }

      if (raza) {
        return res.json({
          message: "perro creado correctamente",
        });
      }
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = crearRaza;
