/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Raza, conn } = require("../../src/db.js");

const agent = session(app);
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

describe("Videogame routes", () => {
  describe("POST /dog", () => {
    it("la respuesta debe ser de tipo object y la propiedad message debe ser de tipo string", () =>
      agent
        .post("/dog")
        .send(dog)
        .then((res) => {
          expect(res.body).to.be.an("object");
          expect(res.body.message).to.be.a("string");
        }));
  });
});
