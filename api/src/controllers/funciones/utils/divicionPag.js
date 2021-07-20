//obtiene 1 pagina de las 8 razas empezando desde la "pagina" pasada por argumento

async function divicionDePagina(razasADividir, pagina) {
  let desde = Number(pagina) * 8;
  let hasta = desde + 8;
  let razasDivididas = await razasADividir.slice(desde, hasta);

  return razasDivididas;
}

module.exports = divicionDePagina;
