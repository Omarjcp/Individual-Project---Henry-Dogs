//filtra los nombres ingresados por query string

async function filtradoNombre(razasAFiltrar, nombreAComparar) {
  let razasFiltradas = await razasAFiltrar.filter((raza) => {
    if (raza.name.toLowerCase().includes(nombreAComparar.toLowerCase()))
      return raza;
  });
  return razasFiltradas;
}

module.exports = filtradoNombre;
