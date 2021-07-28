const axios = require("axios");
const { Raza, Temperamento } = require("../../db.js");
const { ordenAlfDes } = require("./ordenar/ordenarAlf.js");

//obtener todas las razas para la ruta principal
async function obtenerPrincipalRazas() {
  let { data } = await axios(`https://api.thedogapi.com/v1/breeds`);

  //solicitud a DB
  let razas = await Raza.findAll({
    attributes: ["name", "id", "weight", "life_span", "url"],
    include: {
      model: Temperamento,
      attributes: ["name"],
      through: { attributes: [] },
    },
  });

  let razasParaPrincipal = data.map((perro) => {
    return {
      name: perro.name,
      id: perro.id,
      weight: perro.weight.metric,
      life_span: perro.life_span,
      temperaments: perro.temperament,
      image: perro.image.url,
    };
  });

  // concatenacion de ambas peticiones
  let dbApiConcat = razas.concat(razasParaPrincipal);
  //ordenado por orden alfabetico A-Z
  let arrayOrdenado = await ordenAlfDes(dbApiConcat);
  return arrayOrdenado;
}

//obtener todas las razas para ordenar
async function obtenerRazasOrdenar() {
  let { data } = await axios(`https://api.thedogapi.com/v1/breeds`);

  //solicitud a DB
  let razas = await Raza.findAll({
    attributes: ["name", "id", "weight", "life_span", "url"],
    include: {
      model: Temperamento,
      attributes: ["name"],
      through: { attributes: [] },
    },
  });

  let razasParaPrincipal = data.map((perro) => {
    return {
      name: perro.name,
      id: perro.id,
      weight: perro.weight.metric,
      life_span: perro.life_span,
      temperaments: perro.temperament,
      image: perro.image.url,
    };
  });

  // concatenacion de ambas peticiones
  let dbApiConcat = razas.concat(razasParaPrincipal);
  //ordenado por orden alfabetico A-Z
  let arrayOrdenado = await ordenAlfDes(dbApiConcat);
  return arrayOrdenado;
}

//obtener todas las razas para la ruta de detalles
async function obtenerDetalleDeRazas() {
  let { data } = await axios(`https://api.thedogapi.com/v1/breeds`);

  //solicitud a DB
  let razas = await Raza.findAll({
    attributes: ["name", "id", "weight", "life_span", "height", "url"],
    include: {
      model: Temperamento,
      attributes: ["name"],
      through: { attributes: [] },
    },
  });

  let razasParaDetalles = data.map((perro) => {
    return {
      name: perro.name,
      id: perro.id,
      weight: perro.weight.metric,
      height: perro.height.metric,
      life_span: perro.life_span,
      temperaments: perro.temperament,
      image: perro.image.url,
    };
  });

  // concatenacion de ambas peticiones
  return razas.concat(razasParaDetalles);
}

module.exports = {
  obtenerPrincipalRazas,
  obtenerDetalleDeRazas,
  obtenerRazasOrdenar,
};
