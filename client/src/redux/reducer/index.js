import {
    OBTENER_RAZAS,
    OBTENER_TEMPERAMENTOS,
    OBTENER_POR_ID,
    OBTENER_POR_NOMBRE,
    OBTENER_POR_PAG,
    CREAR_RAZA
} from '../actions/index'

const estadoInicial = {
    razas: [],
    razasPag: [],
    razasNomb: [],
    temperamentos: [],
    razaId: {}
}

export default function rootReducer (state = estadoInicial, action) {
    switch (action.type) {
        case OBTENER_RAZAS:
            return {
                ...state,
                razas: [...action.payload]
            }
            
        case OBTENER_POR_PAG:
            return {
                ...state,
                razas: action.payload
            }

        case OBTENER_POR_ID:
            return {
                ...state,
                razaId: action.payload
            }
    
        default:
            return state;
    }
}