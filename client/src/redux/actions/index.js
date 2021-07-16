const axios = require("axios");

export const OBTENER_RAZAS = "OBTENER_RAZAS";
export const OBTENER_TEMPERAMENTOS = "OBTENER_TEMPERAMENTOS";
export const OBTENER_POR_ID = "OBTENER_POR_ID";
export const OBTENER_POR_PAG = "OBTENER_POR_PAG";
export const OBTENER_POR_NOMBRE = "OBTENER_POR_NOMBRE";
export const OBTENER_PARA_ORDENAR = "OBTENER_PARA_ORDENAR";
export const CREAR_RAZA = "CREAR_RAZA";

export function obtenerRazas() {
  return async function (dispatch) {
    try {
      const { data } = await axios("http://localhost:3001/dogs");
      // console.log("---------", data);
      return dispatch({ type: OBTENER_RAZAS, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
}

export function obtenerPorPag(pag) {
  return async function (dispatch) {
    try {
      const { data } = await axios("http://localhost:3001/dogs?pag=" + pag);
      // console.log("----------por pagina", data);
      return dispatch({ type: OBTENER_POR_PAG, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
}

export function obtenerPorId(id) {
  return async function (dispatch) {
    try {
      const { data } = await axios("http://localhost:3001/dogs/" + id);
      console.log("------------por id", data);
      return dispatch({ type: OBTENER_POR_ID, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
}

export function obtenerTemperamentos() {
  return async function (dispatch) {
    try {
      const temperamentos = await axios("http://localhost:3001/temperament");
      return dispatch({ type: OBTENER_TEMPERAMENTOS, payload: temperamentos });
    } catch (err) {
      console.log(err);
    }
  };
}

export function obtenerPorNombre(payload) {
  return async function (dispatch) {
    try {
      if (payload.orden || payload.pagina) {
        const { data } = await axios(
          "http://localhost:3001/dogs?ordAsc=" +
            payload.orden +
            "&name=" +
            payload.nombre +
            "&pag=" +
            payload.pagina
        );
        data.busqueda = payload.nombre;
        console.log("action --", data);
        return dispatch({ type: OBTENER_POR_NOMBRE, payload: data });
        // }
        // else if (payload.pagina) {
        //   const { data } = await axios(
        //     "http://localhost:3001/dogs?name=" +
        //       payload.nombre +
        //       "&pag=" +
        //       payload.pagina
        //   );
        //   data.busqueda = payload.nombre;
        //   return dispatch({ type: OBTENER_POR_NOMBRE, payload: data });
      } else {
        const { data } = await axios(
          "http://localhost:3001/dogs?name=" + payload.nombre
        );
        data.busqueda = payload.nombre;
        return dispatch({ type: OBTENER_POR_NOMBRE, payload: data });
      }
    } catch (err) {
      console.log(err);
    }
  };
}

export function obtenerParaOrdenar(orden, pag) {
  return async function (dispatch) {
    try {
      const { data } = await axios(
        "http://localhost:3001/dogs/orden?ordenarAsc=" + orden + "&pag=" + pag
      );
      console.log("------------para orden", data);
      return dispatch({ type: OBTENER_PARA_ORDENAR, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
}

export function crearRaza(data) {
  return async function (dispatch) {
    try {
      const nuevaRaza = await axios.post("http://localhost:3001/dog", data);
      return dispatch({ type: CREAR_RAZA, payload: nuevaRaza });
    } catch (err) {
      console.log(err);
    }
  };
}
