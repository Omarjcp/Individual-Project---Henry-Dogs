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
  console.log(payload);
  return async function (dispatch) {
    try {
      if (payload.orden === "4") {
        const { data } = await axios(
          "http://localhost:3001/dogs?ordAsc=" +
            payload.orden +
            "&name=" +
            payload.nombre +
            "&pag=" +
            payload.pagina
        );
        data.busqueda = payload.nombre;
        return dispatch({ type: OBTENER_POR_NOMBRE, payload: data });
      } else if (payload.orden === "2") {
        const { data } = await axios(
          "http://localhost:3001/dogs?pesAsc=" +
            payload.orden +
            "&name=" +
            payload.nombre +
            "&pag=" +
            payload.pagina
        );
        data.busqueda = payload.nombre;
        return dispatch({ type: OBTENER_POR_NOMBRE, payload: data });
      } else if (payload.orden === "1") {
        const { data } = await axios(
          "http://localhost:3001/dogs?pesDes=" +
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
      if (orden === "4") {
        const { data } = await axios(
          "http://localhost:3001/dogs/orden?ordenarAsc=" + orden + "&pag=" + pag
        );
        return dispatch({ type: OBTENER_PARA_ORDENAR, payload: data });
      } else if (orden === "2") {
        const { data } = await axios(
          "http://localhost:3001/dogs/orden?pesAsc=" + orden + "&pag=" + pag
        );
        return dispatch({ type: OBTENER_PARA_ORDENAR, payload: data });
      } else {
        const { data } = await axios(
          "http://localhost:3001/dogs/orden?pesDes=" + orden + "&pag=" + pag
        );
        return dispatch({ type: OBTENER_PARA_ORDENAR, payload: data });
      }
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
