import * as yup from "yup";

let unNumero = /^[0-9]+$/;
let soloLetras = new RegExp("^[a-zA-Z ]+$");

export const schema = yup.object().shape({
  nombre: yup
    .string()
    .required("*Este campo es requerido")
    .min(3, "*Deben ser mas de 2 letras")
    .matches(soloLetras, "*Debe ser solo letras"),

  alturaMin: yup
    .string()
    .required("*Este campo es requerido")
    .matches(unNumero, "*Debe ser un numero"),

  alturaMax: yup
    .string()
    .required("*Este campo es requerido")
    .matches(unNumero, "*Debe ser un numero"),

  pesoMax: yup
    .string()
    .required("*Este campo es requerido")
    .matches(unNumero, "*Debe ser un numero"),

  pesoMin: yup
    .string()
    .required("*Este campo es requerido")
    .matches(unNumero, "*Debe ser un numero"),

  añosMin: yup
    .string()
    .required("*Este campo es requerido")
    .matches(unNumero, "*Debe ser un numero"),

  añosMax: yup
    .string()
    .required("*Este campo es requerido")
    .matches(unNumero, "*Debe ser un numero"),
});

export const schemaTemp = yup.object().shape({
  temp: yup
    .string()
    .required("*Este campo es requerido")
    .min(3, "*Deben ser mas de 2 letras")
    .matches(soloLetras, "*Debe ser solo letras"),
});
