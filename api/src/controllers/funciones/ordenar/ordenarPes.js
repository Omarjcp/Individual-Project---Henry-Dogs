//ordena el array de razas ingresada por parametro

async function ordenarPesoAsc(arrayAOrdenarAsc) {
  let razasOrdenadasPesoAsc = arrayAOrdenarAsc.sort((a, b) => {
    let pesoA = parseFloat(a.weight);
    let pesoB = parseFloat(b.weight);

    if (pesoA < pesoB) {
      return -1;
    }

    if (pesoA > pesoB) {
      return 1;
    }
    return 0;
  });
  return razasOrdenadasPesoAsc;
}

async function ordenarPesoDes(arrayAOrdenarDes) {
  let razasOrdenadasPesoDes = arrayAOrdenarDes.sort((a, b) => {
    let pesoA = parseInt(a.weight);
    let pesoB = parseInt(b.weight);

    if (pesoB < pesoA) {
      return -1;
    }
    if (pesoB > pesoA) {
      return 1;
    }
    return 0;
  });
  return razasOrdenadasPesoDes;
}

module.exports = {
  ordenarPesoAsc,
  ordenarPesoDes,
};
