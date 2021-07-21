import { RazasFiltrar } from "./razas";
import { TempFiltrar } from "./temperamento";

export const Filtrado = ({ todasRazas, setPagina, setTemperam }) => {
  return (
    <div>
      <h4 style={{ margin: ".5rem" }}>Filtrar por:</h4>
      <TempFiltrar setTemperam={setTemperam} setPagina={setPagina} />
      <RazasFiltrar todasRazas={todasRazas} setPagina={setPagina} />
    </div>
  );
};
