const axios = require("axios");
const { Raza, Temperamento } = require("../db.js");
const {
  obtenerPrincipalRazas,
  obtenerDetalleDeRazas,
  obtenerRazasOrdenar,
} = require("./funciones/razasPrincipal.js");

async function obtenerOrdenado(req, res) {
  let { ordenarAsc, pesAsc, pesDes, pag } = req.query;

  let RazasOrdenar = await obtenerRazasOrdenar();

  if (ordenarAsc === "4") {
    let ordenarRazasDes = RazasOrdenar;
    let longitudRazasFiltradas = ordenarRazasDes.length;
    ordenarRazasDes.sort((a, b) => {
      let nombreA = a.name.toLowerCase();
      let nombreB = b.name.toLowerCase();

      if (nombreB < nombreA) {
        return -1;
      }

      if (nombreB > nombreA) {
        return 1;
      }
      return 0;
    });

    if (pag) {
      let desde = Number(pag) * 8;
      let hasta = desde + 8;
      let siguientesOcho = await ordenarRazasDes.slice(desde, hasta);

      return res.json({
        data: siguientesOcho,
        longitud: longitudRazasFiltradas,
      });
    }

    let primerosOcho = await ordenarRazasDes.slice(0, 8);
    res.json({
      data: primerosOcho,
      longitud: longitudRazasFiltradas,
    });
  }
}

//8 primeras razas de db y api
async function obtenerRazas(req, res) {
  try {
    let { name, pag, ordAsc } = req.query;

    //todas las razas api & db
    let todasRazas = await obtenerPrincipalRazas();

    //si existe la query name
    if (name) {
      //nombres de razas que incluyan la query
      let razasFiltradas = todasRazas.filter((raza) => {
        if (raza.name.toLowerCase().includes(name.toLowerCase())) return raza;
      });

      if (ordAsc === "4" && name) {
        let RazasOrdenar = await obtenerRazasOrdenar();

        let ordenarRazasDes = RazasOrdenar.filter((raza) => {
          if (raza.name.toLowerCase().includes(name.toLowerCase())) return raza;
        });

        let longitudRazasFiltradas = ordenarRazasDes.length;

        ordenarRazasDes.sort((a, b) => {
          let nombreA = a.name.toLowerCase();
          let nombreB = b.name.toLowerCase();

          if (nombreB < nombreA) {
            return -1;
          }

          if (nombreB > nombreA) {
            return 1;
          }
          return 0;
        });

        if (pag) {
          let desde = Number(pag) * 8;
          let hasta = desde + 8;
          let siguientesOcho = await ordenarRazasDes.slice(desde, hasta);

          return res.json({
            data: siguientesOcho,
            longitud: longitudRazasFiltradas,
          });
        }

        let primerosOcho = await ordenarRazasDes.slice(0, 8);
        res.json({
          data: primerosOcho,
          longitud: longitudRazasFiltradas,
        });
      }

      let longitudRazasFiltradas = razasFiltradas.length;

      //si existe algo en el array filtrado, lo muestra
      if (razasFiltradas.length > 0) {
        if (pag) {
          let desde = Number(pag) * 8;
          let hasta = desde + 8;
          let siguientesOcho = await razasFiltradas.slice(desde, hasta);
          return res.json({
            data: siguientesOcho,
            longitud: longitudRazasFiltradas,
          });
        }

        let primerosOcho = await razasFiltradas.slice(0, 8);
        res.json({
          data: primerosOcho,
          longitud: longitudRazasFiltradas,
        });
      }
      //si el array esta vacio, error
      else {
        return res.status(404).json({
          message: "raza no encontrada.",
        });
      }
    }

    let longitudTodasRazas = todasRazas.length;

    if (pag) {
      let desde = Number(pag) * 8;
      let hasta = desde + 8;
      let siguientesOcho = await todasRazas.slice(desde, hasta);
      return res.json({
        data: siguientesOcho,
        longitud: longitudTodasRazas,
      });
    }

    //las 8 primeras razas del total
    let primerosOcho = await todasRazas.slice(0, 8);

    // miestra las razas
    if (primerosOcho) {
      return res.json({
        data: primerosOcho,
        longitud: longitudTodasRazas,
      });
    }
  } catch (err) {
    console.log(err);
  }
}

async function obtenerRazaId(req, res) {
  try {
    const { idRaza } = req.params;
    let todasRazas = await obtenerDetalleDeRazas();

    if (idRaza) {
      let razaConElId = todasRazas.filter((raza) => {
        if (String(raza.id) === String(idRaza)) return raza;
      });
      res.json(razaConElId);
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  obtenerRazas,
  obtenerRazaId,
  obtenerOrdenado,
};
