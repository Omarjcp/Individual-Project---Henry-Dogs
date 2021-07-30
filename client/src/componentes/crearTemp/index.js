import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { schemaTemp } from "../crear/validaciones/validaciones";
import { crearTemperamento, obtenerTemperamentos } from "../../redux/actions";
import { Barra } from "../crear/barra";
import {
  DivCont,
  DivContainer,
  DivInput,
  InputN,
  Li,
  InputSubmit,
  SpanError,
} from "./styled";

export const NuevoTemperamento = () => {
  const dispatch = useDispatch();
  let { temperamentos, msg } = useSelector((state) => state);
  const history = useHistory();

  useEffect(() => {
    dispatch(obtenerTemperamentos());
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaTemp),
  });

  const onSubmit = (data) => {
    dispatch(crearTemperamento(data));
  };

  useEffect(() => {
    if (msg) {
      alert(msg);
      history.go(0);
    }
  }, [msg]);

  return (
    <>
      <Barra DivCont={DivCont} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          background: "#A5AAFF",
        }}
      >
        <DivContainer>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "50vh",
              width: "33%",
              border: "1px solid grey",
              overflowY: "scroll",
            }}
          >
            <h4 style={{ margin: "7px 0 10px 25px" }}>
              Temperamentos existentes
            </h4>
            <ul style={{ margin: "0", listStyle: "none" }}>
              {temperamentos.map((temp) => (
                <Li key={temp.id}>{temp.name}</Li>
              ))}
            </ul>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              height: "50vh",
              width: "60%",
              marginLeft: "10px",
              border: "1px solid grey",
            }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <DivInput>
                <label style={{ margin: ".5rem 0 0.5rem 2rem" }}>
                  Temperamento
                </label>
                <InputN
                  name="temp"
                  placeholder="nombre del temperamento"
                  {...register("temp")}
                />
                <SpanError>{errors.temp && errors.temp.message}</SpanError>
              </DivInput>

              <hr />

              <DivInput>
                <InputSubmit type="submit" />
              </DivInput>
            </form>
          </div>
        </DivContainer>
      </div>
    </>
  );
};
