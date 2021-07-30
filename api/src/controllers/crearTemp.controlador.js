const { Temperamento } = require("../db.js");

async function crearTemperamento(req, res) {
  try {
    const { temp } = req.body;

    if (temp) {
      let tempDb = await Temperamento.findOne({ where: { name: temp } });

      if (tempDb) {
        res.json({
          message: "temperamento ya existente",
        });
      } else {
        const temperamentoCreado = await Temperamento.create({
          name: temp,
        });
        if (temperamentoCreado) {
          res.json({
            message: "temperamento creado correctamente",
          });
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = crearTemperamento;
