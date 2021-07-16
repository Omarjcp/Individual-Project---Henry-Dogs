import {
  OBTENER_RAZAS,
  OBTENER_TEMPERAMENTOS,
  OBTENER_POR_ID,
  OBTENER_POR_NOMBRE,
  OBTENER_POR_PAG,
  OBTENER_PARA_ORDENAR,
  CREAR_RAZA,
} from "../actions/index";

const estadoInicial = {
  razas: [],
  temperamentos: [],
  razaId: {},
  busqueda: "",
};

export default function rootReducer(state = estadoInicial, action) {
  switch (action.type) {
    case OBTENER_RAZAS:
      return {
        ...state,
        razas: action.payload.data,
        longitud: action.payload.longitud,
      };

    case OBTENER_POR_PAG:
      return {
        ...state,
        razas: action.payload.data,
        longitud: action.payload.longitud,
      };

    case OBTENER_POR_NOMBRE:
      return {
        ...state,
        razas: action.payload.data,
        longitud: action.payload.longitud,
        busqueda: action.payload.busqueda,
      };

    case OBTENER_PARA_ORDENAR:
      return {
        ...state,
        razas: action.payload.data,
        longitud: action.payload.longitud,
      };

    case OBTENER_POR_ID:
      return {
        ...state,
        razaId: action.payload[0],
      };

    default:
      return state;
  }
}
