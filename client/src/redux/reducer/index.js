import {
  OBTENER_RAZAS,
  OBTENER_TEMPERAMENTOS,
  OBTENER_POR_ID,
  OBTENER_POR_NOMBRE,
  OBTENER_POR_PAG,
  OBTENER_PARA_ORDENAR,
  OBTENER_POR_TEMPERAMENTO,
  CREAR_RAZA,
} from "../actions/index";

const estadoInicial = {
  todasRazas: [],
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
        todasRazas: action.payload.data,
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

    case OBTENER_TEMPERAMENTOS:
      return {
        ...state,
        temperamentos: action.payload.data,
      };

    case OBTENER_POR_TEMPERAMENTO:
      return {
        ...state,
        razas: action.payload.data,
        longitud: action.payload.longitud,
      };

    default:
      return state;
  }
}
