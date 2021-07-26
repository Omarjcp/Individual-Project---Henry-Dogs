const { Raza, conn } = require("../../src/db.js");
const { expect } = require("chai").expect;

describe("Tests de Modelos", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Error en la coneccion a la db:", err);
    })
  );
  describe("Validadores", () => {
    beforeEach(() => Raza.sync({ force: true }));
    describe("Modelo Raza", () => {
      it("Error en caso que falte el campo name", (done) => {
        Raza.create({
          height: "20 - 25",
          weight: "10 - 14",
        })
          .then(() => done(new Error("El nombre de la raza es requerida")))
          .catch(() => done());
      });

      it("Error en caso que falte el campo height", (done) => {
        Raza.create({
          name: "omar",
          weight: "5 - 10",
        })
          .then(() => done(new Error("La altura de la raza es requerida")))
          .catch(() => done());
      });

      it("Error en caso que falte el campo weight", (done) => {
        Raza.create({
          name: "omar",
          height: "20 - 25",
        })
          .then(() => done(new Error("El peso de la raza es requerida")))
          .catch(() => done());
      });
      it("Error en caso que falten todos los campos", (done) => {
        Raza.create({})
          .then(() => done(new Error("Todos los campos son requeridos")))
          .catch(() => done());
      });
    });
  });
});
