export const TempFiltrar = ({ temperamentos }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "10rem",
        height: "45vh",
        overflow: "scroll",
        overflowX: "hidden",
      }}
    >
      <span>Temperamentos</span>
      {temperamentos.map((temperamento) => {
        return (
          <label>
            <input type="checkbox" value={temperamento} />
            {temperamento}
          </label>
        );
      })}
    </div>
  );
};
