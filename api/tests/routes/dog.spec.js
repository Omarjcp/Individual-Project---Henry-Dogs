/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Raza, conn } = require("../../src/db.js");
//----*****descomentar
// const agent = session(app);
const dog = {
  nombre: "naranja",
  alturaMax: "20",
  alturaMin: "15",
  pesoMax: "10",
  pesoMin: "5",
  añosMax: "10",
  añosMin: "12",
  temperamentos: ["1", "2"],
};

xdescribe("Ruta de creacion de nueva raza", () => {
  describe("POST /dog", () => {
    it("la respuesta debe ser de tipo object", () =>
      agent
        .post("/dog")
        .send(dog)
        .then((res) => {
          expect(res.body).to.be.an("object");
        }));

    it("La propiedad message de la respuesta debe ser de tipo string", () =>
      agent
        .post("/dog")
        .send(dog)
        .then((res) => {
          expect(res.body.message).to.be.a("string");
        }));

    it("Si falta al menos un campo (a excepción del temperamento), responde con un msj adecuado", () =>
      agent
        .post("/dog")
        .send({
          alturaMax: "20",
          alturaMin: "15",
          pesoMax: "10",
          pesoMin: "5",
          añosMax: "10",
          añosMin: "12",
          temperamentos: ["1", "2"],
        })
        .then((res) => {
          expect(res.body.message).to.be.equal(
            "Todos los campos son obligatorios (a excepción del temperamento)"
          );
        }));

    it("Si no recibe ningún campo, responde con un msj adecuado", () =>
      agent
        .post("/dog")
        .send({})
        .then((res) => {
          expect(res.body.message).to.be.equal(
            "Todos los campos son obligatorios (a excepción del temperamento)"
          );
        }));

    it("Si falta al menos un campo (a excepción del temperamento), responde con status 404", () =>
      agent
        .post("/dog")
        .send({
          nombre: "naranja",
          alturaMin: "15",
          pesoMax: "10",
          pesoMin: "5",
          añosMax: "10",
          añosMin: "12",
        })
        .then((res) => {
          expect(res.status).to.be.equal(404);
        }));

    it("Si faltan todos los campos, responde con status 404", () =>
      agent
        .post("/dog")
        .send({})
        .then((res) => {
          expect(res.status).to.be.equal(404);
        }));
  });
});
