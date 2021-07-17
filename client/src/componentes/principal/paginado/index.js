import { useSelector } from "react-redux";
import { Boton } from "./boton";

export const Paginado = ({ setPagina, orden }) => {
  let { longitud } = useSelector((state) => state);

  let paginas = Math.ceil(longitud / 8);
  let arrayPaginas = [];

  for (let i = 1; i <= paginas; i++) {
    arrayPaginas.push(i);
  }

  return (
    <>
      {arrayPaginas.map((pag, i) => (
        <Boton setPagina={setPagina} orden={orden} pag={pag} i={i} />
      ))}
    </>
  );
};
