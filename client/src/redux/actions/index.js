const axios = require('axios')

export const OBTENER_RAZAS = "OBTENER_RAZAS"
export const OBTENER_TEMPERAMENTOS = "OBTENER_TEMPERAMENTOS"
export const OBTENER_POR_ID = "OBTENER_POR_ID"
export const OBTENER_POR_PAG = "OBTENER_POR_PAG"
export const OBTENER_POR_NOMBRE = "OBTENER_POR_NOMBRE"
export const CREAR_RAZA = "CREAR_RAZA"


export function obtenerRazas() {
    return async function(dispatch) {
        try {
            const {data} = await axios("http://localhost:3001/dogs")
            return dispatch({ type: OBTENER_RAZAS, payload: data })
        }
        catch(err) {
            console.log(err)
        }
    }  
}


export function obtenerTemperamentos() {
    return async function(dispatch) {
        try {
            const temperamentos = await axios("http://localhost:3001/temperament")
            return dispatch({ type: OBTENER_TEMPERAMENTOS, payload: temperamentos })
        }
        catch(err) {
            console.log(err)
        }
    }
}


export function obtenerPorId(id) {
    return async function(dispatch) {
        try {
            const razaId = await axios("http://localhost:3001/dogs" + id)
            return dispatch({ type: OBTENER_POR_ID, payload: razaId })
        }
        catch(err) {
            console.log(err)
        }
    }
}


export function obtenerPorPag(pag) {
    return async function(dispatch) {
        try {
            const razasPag = await axios("http://localhost:3001/dogs?pag=" + pag)
            return dispatch({ type: OBTENER_POR_PAG, payload: razasPag })
        }
        catch(err) {
            console.log(err)
        }
    }
}


export function obtenerPorNombre(nombre) {
    return async function(dispatch) {
        try {
            const razasNomb = await axios("http://localhost:3001/dogs?name=" + nombre)
            return dispatch({ type: OBTENER_POR_NOMBRE, payload: razasNomb })
        }
        catch(err) {
            console.log(err)
        }
    }
}


export function crearRaza(data) {
    return async function(dispatch) {
        try {
            const nuevaRaza = await axios.post("http://localhost:3001/dog", data)
            return dispatch({ type: CREAR_RAZA, payload: nuevaRaza })
        }
        catch(err) {
            console.log(err)
        }
    }  
}