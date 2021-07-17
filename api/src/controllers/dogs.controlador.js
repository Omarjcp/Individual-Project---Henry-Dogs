const axios = require("axios");
const { Raza, Temperamento } = require("../db.js");
const {
  obtenerPrincipalRazas,
  obtenerDetalleDeRazas,
  obtenerRazasOrdenar,
} = require("./funciones/razasPrincipal.js");
const ordenAlfAsc = require("./funciones/ordenar/ordenarAlf");
const filtradoNombre = require("./funciones/filtradoNombre");
const divicionDePagina = require("./funciones/divicionPag");
const {
  ordenarPesoAsc,
  ordenarPesoDes,
} = require("./funciones/ordenar/ordenarPes");

async function obtenerOrdenado(req, res) {
  try {
    let { orden, pag } = req.query;

    let razasOrdenar = await obtenerRazasOrdenar();
    razasOrdenar = razasOrdenar.map((raza) => {
      if (raza.weight[0] === "N") raza.weight = "1";
      return raza;
    });

    if (orden === "1") {
      let ordenarPorPesoDes = await ordenarPesoDes(razasOrdenar);

      let longitudRazasOrdenadas = ordenarPorPesoDes.length;

      if (pag) {
        let siguientesOcho = await divicionDePagina(ordenarPorPesoDes, pag);

        return res.json({
          data: siguientesOcho,
          longitud: longitudRazasOrdenadas,
        });
      }

      let primerosOcho = await ordenarPorPesoDes.slice(0, 8);
      res.json({
        data: primerosOcho,
        longitud: longitudRazasOrdenadas,
      });
    }

    if (orden === "2") {
      let ordenarPorPesoAsc = await ordenarPesoAsc(razasOrdenar);

      let longitudRazasOrdenadas = ordenarPorPesoAsc.length;

      if (pag) {
        let siguientesOcho = await divicionDePagina(ordenarPorPesoAsc, pag);

        return res.json({
          data: siguientesOcho,
          longitud: longitudRazasOrdenadas,
        });
      }
      let primerosOcho = await ordenarPorPesoAsc.slice(0, 8);
      res.json({
        data: primerosOcho,
        longitud: longitudRazasOrdenadas,
      });
    }

    if (orden === "4") {
      let ordenarRazasAsc = await ordenAlfAsc(razasOrdenar);

      let longitudRazasOrdenadas = ordenarRazasAsc.length;

      if (pag) {
        let siguientesOcho = await divicionDePagina(ordenarRazasAsc, pag);

        return res.json({
          data: siguientesOcho,
          longitud: longitudRazasOrdenadas,
        });
      }

      let primerosOcho = await ordenarRazasAsc.slice(0, 8);
      res.json({
        data: primerosOcho,
        longitud: longitudRazasOrdenadas,
      });
    }
  } catch (err) {
    console.log(err);
  }
}

//8 primeras razas de db y api
async function obtenerRazas(req, res) {
  try {
    let { name, pag, orden } = req.query;

    //todas las razas api & db
    let todasRazas = await obtenerPrincipalRazas();

    //si existe la query name
    if (name) {
      //nombres de razas que incluyan la query
      let razasFiltradas = await filtradoNombre(todasRazas, name);
      razasFiltradas = razasFiltradas.map((raza) => {
        if (raza.weight[0] === "N") raza.weight = "1";
        return raza;
      });

      if (orden === "1") {
        let ordenarPorPesoDes = await ordenarPesoDes(razasFiltradas);

        let longitudRazasOrdenadas = ordenarPorPesoDes.length;

        if (pag) {
          let siguientesOcho = await divicionDePagina(ordenarPorPesoDes, pag);

          return res.json({
            data: siguientesOcho,
            longitud: longitudRazasOrdenadas,
          });
        }

        let primerosOcho = await ordenarPorPesoDes.slice(0, 8);
        res.json({
          data: primerosOcho,
          longitud: longitudRazasOrdenadas,
        });
      }

      if (orden === "2") {
        let ordenarPorPesoAsc = await ordenarPesoAsc(razasFiltradas);

        let longitudRazasOrdenadas = ordenarPorPesoAsc.length;

        if (pag) {
          let siguientesOcho = await divicionDePagina(ordenarPorPesoAsc, pag);

          return res.json({
            data: siguientesOcho,
            longitud: longitudRazasOrdenadas,
          });
        }
        let primerosOcho = await ordenarPorPesoAsc.slice(0, 8);
        res.json({
          data: primerosOcho,
          longitud: longitudRazasOrdenadas,
        });
      }

      if (orden === "4" && name) {
        let razasOrdenar = await obtenerRazasOrdenar();

        let razasFiltradasParaOrdenar = await filtradoNombre(
          razasOrdenar,
          name
        );

        let longitudRazasFiltradas = razasFiltradasParaOrdenar.length;

        let razasOrdenadasAsc = await ordenAlfAsc(razasFiltradasParaOrdenar);

        if (pag) {
          let siguientesOcho = await divicionDePagina(razasOrdenadasAsc, pag);

          return res.json({
            data: siguientesOcho,
            longitud: longitudRazasFiltradas,
          });
        } else {
          let primerosOcho = await razasOrdenadasAsc.slice(0, 8);
          res.json({
            data: primerosOcho,
            longitud: longitudRazasFiltradas,
          });
        }
      }

      let longitudRazasFiltradas = razasFiltradas.length;

      //si existe algo en el array filtrado, lo muestra
      if (razasFiltradas.length > 0) {
        if (pag) {
          let siguientesOcho = await divicionDePagina(razasFiltradas, pag);
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
      let siguientesOcho = await divicionDePagina(todasRazas, pag);
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
