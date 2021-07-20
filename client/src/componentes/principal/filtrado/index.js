import { RazasFiltrar } from "./razas";
import { TempFiltrar } from "./temperamento";

export const Filtrado = ({ temperamentos, todasRazas, setPagina }) => {
  return (
    <div>
      <h4 style={{ margin: ".5rem" }}>Filtrar por:</h4>
      {/* <TempFiltrar temperamentos={temperamentos} /> */}
      <RazasFiltrar todasRazas={todasRazas} setPagina={setPagina} />
    </div>
  );
};
