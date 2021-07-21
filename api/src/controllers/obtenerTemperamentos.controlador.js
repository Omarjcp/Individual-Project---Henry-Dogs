const axios = require("axios");
const { Temperamento } = require("../db.js");

async function temperamentosDeApi(req, res) {
  try {
    let { data } = await axios(`https://api.thedogapi.com/v1/breeds`);

    let arrayTemperamentos = data.map((raza) => {
      return raza.temperament;
    });

    //separo cada temperamento como un elemento del array
    arrayTemperamentos = arrayTemperamentos.join(", ").split(", ");

    //eliminar elementos vacios
    let arrayTemperamentosFiltrados = arrayTemperamentos.filter(
      (temperamento) => {
        if (temperamento.length > 2) return temperamento;
      }
    );

    //elimina los elementos iguales
    let result = arrayTemperamentosFiltrados.reduce((temp, item) => {
      if (!temp.includes(item)) {
        temp.push(item);
      }
      return temp;
    }, []);
    let tempDb;
    //crea los temperamentos en la db segun los que optenga de la api
    for (let i = 0; i < result.length; i++) {
      tempDb = await Temperamento.create({
        name: result[i],
      });
    }

    // let temperamentosDb = await Temperamento.findAll();

    // //elimina la repeticion en cada render
    // let tempFiltrados = temperamentosDb.reduce((temp, { name, id }) => {
    //   if (!temp.includes(name)) {
    //     temp.push(name);
    //   }
    //   return temp;
    // }, []);

    // return tempFiltrados;
    if (tempDb) return res.json({ msg: "ok" });
  } catch (err) {
    console.log(err);
  }
}

async function obtenerTemperamento(req, res) {
  try {
    let temperamentosDb = await Temperamento.findAll();

    if (temperamentosDb) {
      res.json({
        data: temperamentosDb,
      });
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  obtenerTemperamento,
  temperamentosDeApi,
};
