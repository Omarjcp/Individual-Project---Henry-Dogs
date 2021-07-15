import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validaciones/validaciones";

import { Barra } from "./barra/index";
import {
  DivContainer,
  DivInput,
  InputMin,
  InputMax,
  SpanError,
  DivInputMinMax,
  InputN,
} from "./styled";
import { Link } from "react-router-dom";

export const NuevaRaza = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Barra />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <DivContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <DivInput>
              <label>Nombre</label>
              <InputN
                name="nombre"
                placeholder="nombre de raza"
                {...register("nombre")}
              />
              <SpanError>{errors.nombre && errors.nombre.message}</SpanError>
            </DivInput>
            <hr />
            <DivInput>
              <label>Altura min - max</label>
              <DivInputMinMax>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span>min</span>
                  <InputMin
                    name="alturaMin"
                    placeholder="min cm"
                    {...register("alturaMin")}
                  />
                  <SpanError>
                    {errors.alturaMin && errors.alturaMin.message}
                  </SpanError>
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span>max</span>
                  <InputMax
                    name="alturaMax"
                    placeholder="max cm"
                    {...register("alturaMax")}
                  />
                  <SpanError>
                    {errors.alturaMax && errors.alturaMax.message}
                  </SpanError>
                </div>
              </DivInputMinMax>
            </DivInput>
            <hr />

            <DivInput>
              <label>Peso</label>
              <DivInputMinMax>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span>min</span>
                  <InputMin
                    name="pesoMin"
                    placeholder="min Kg"
                    {...register("pesoMin")}
                  />
                  <SpanError>
                    {errors.pesoMin && errors.pesoMin.message}
                  </SpanError>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span>max</span>
                  <InputMax
                    name="pesoMax"
                    placeholder="max Kg"
                    {...register("pesoMax")}
                  />
                  <SpanError>
                    {errors.pesoMax && errors.pesoMax.message}
                  </SpanError>
                </div>
              </DivInputMinMax>
            </DivInput>

            <hr />

            <DivInput>
              <label>Años de vida</label>
              <DivInputMinMax>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span>min</span>
                  <InputMin
                    name="añosMin"
                    placeholder="min años"
                    {...register("añosMin")}
                  />
                  <SpanError>
                    {errors.añosMin && errors.añosMin.message}
                  </SpanError>
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span>max</span>
                  <InputMax
                    name="añosMax"
                    placeholder="max años"
                    {...register("añosMax")}
                  />
                  <SpanError>
                    {errors.añosMax && errors.añosMax.message}
                  </SpanError>
                </div>
              </DivInputMinMax>
            </DivInput>

            <hr />

            <DivInput>
              <label>Temperamentos</label>
              <select name="temperamentos" multiple>
                <option disabled selected>
                  Elige el/los temperamentos
                </option>
                <option>bravo</option>
                <option>bravo</option>
                <option>bravo</option>
                <option>bravo</option>
              </select>
            </DivInput>

            <hr />

            <DivInput>
              <input type="submit" />
            </DivInput>
          </form>
        </DivContainer>
      </div>
    </>
  );
};
