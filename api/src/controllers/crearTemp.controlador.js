// const { Temperamento } = require("../db.js");

// async function crearTemperamento(req, res) {
//   try {
//     const { temperam } = req.body;
//     if (temperam) {
//       let tempDb = await Temperamento.findOne({ where: { name: temperam } });

//       if (tempDb) {
//         res.json({
//           message: "temperamento ya existente",
//         });
//       } else {
//         const temperamentoCreado = await Temperamento.create({
//           name: temperam,
//         });
//         if (temperamentoCreado) {
//           res.json({
//             message: "temperamento creado correctamente",
//           });
//         }
//       }
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }
