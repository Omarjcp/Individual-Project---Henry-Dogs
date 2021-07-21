const axios = require("axios");

export const OBTENER_RAZAS = "OBTENER_RAZAS";
export const OBTENER_TEMPERAMENTOS = "OBTENER_TEMPERAMENTOS";
export const OBTENER_POR_TEMPERAMENTO = "OBTENER_POR_TEMPERAMENTO";
export const OBTENER_POR_ID = "OBTENER_POR_ID";
export const OBTENER_POR_PAG = "OBTENER_POR_PAG";
export const OBTENER_POR_NOMBRE = "OBTENER_POR_NOMBRE";
export const OBTENER_PARA_ORDENAR = "OBTENER_PARA_ORDENAR";
export const CREAR_RAZA = "CREAR_RAZA";

export function obtenerRazas() {
  return async function (dispatch) {
    try {
      const { data } = await axios("http://localhost:3001/dogs");
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
      return dispatch({ type: OBTENER_POR_ID, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
}

export function obtenerTemperamentos() {
  return async function (dispatch) {
    try {
      const { data } = await axios("http://localhost:3001/temperament");
      return dispatch({ type: OBTENER_TEMPERAMENTOS, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
}

export function obtenerPorTemperamento(payload) {
  return async function (dispatch) {
    try {
      if (payload.orden) {
        const { data } = await axios(
          "http://localhost:3001/dogs/temp?temper=" +
            payload.temperamento +
            "&pag=" +
            payload.pag +
            "&orden=" +
            payload.orden
        );
        return dispatch({ type: OBTENER_POR_TEMPERAMENTO, payload: data });
      } else {
        const { data } = await axios(
          "http://localhost:3001/dogs/temp?temper=" +
            payload.temperamento +
            "&pag=" +
            payload.pag
        );
        return dispatch({ type: OBTENER_POR_TEMPERAMENTO, payload: data });
      }
    } catch (err) {
      console.log(err);
    }
  };
}

export function obtenerPorNombre(payload) {
  return async function (dispatch) {
    try {
      if (payload.orden) {
        const { data } = await axios(
          "http://localhost:3001/dogs?orden=" +
            payload.orden +
            "&name=" +
            payload.nombre +
            "&pag=" +
            payload.pagina
        );
        data.busqueda = payload.nombre;
        return dispatch({ type: OBTENER_POR_NOMBRE, payload: data });
      } else {
        const { data } = await axios(
          "http://localhost:3001/dogs?name=" +
            payload.nombre +
            "&pag=" +
            payload.pagina
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
        "http://localhost:3001/dogs/orden?orden=" + orden + "&pag=" + pag
      );
      return dispatch({ type: OBTENER_PARA_ORDENAR, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
}

export function crearRaza(payload) {
  console.log(payload);
  return async function (dispatch) {
    try {
      const { data } = await axios.post("http://localhost:3001/dog", payload);
      return dispatch({ type: CREAR_RAZA, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
}
