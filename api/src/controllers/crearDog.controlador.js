const { Raza, Temperamento } = require("../db.js");
const filtradoNombre = require("./funciones/utils/filtradoNombre");
const { obtenerPrincipalRazas } = require("./funciones/razasPrincipal");

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
      url,
      temperamentos,
    } = req.body;
    console.log(req.body);
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

    //todas las razas de db y api
    let razasDbYApi = await obtenerPrincipalRazas();
    //busco el nombre del query si coincide con alguna raza ya existente, para evitar su creacion
    let razasFiltradas = await filtradoNombre(razasDbYApi, nombre);
    if (razasFiltradas.length > 0) {
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
        url: "omar",
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
