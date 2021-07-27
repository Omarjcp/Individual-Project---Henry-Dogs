import { useSelector } from "react-redux";
import { Boton } from "./boton/index";

export const Paginado = ({ setPagina, orden, temperam }) => {
  let { longitud } = useSelector((state) => state);

  let paginas = Math.ceil(longitud / 8);
  let arrayPaginas = [];

  for (let i = 1; i <= paginas; i++) {
    arrayPaginas.push(i);
  }

  return (
    <>
      {arrayPaginas.map((pag, i) => (
        <Boton
          key={i}
          setPagina={setPagina}
          orden={orden}
          pag={pag}
          i={i}
          temperam={temperam}
        />
      ))}
    </>
  );
};
