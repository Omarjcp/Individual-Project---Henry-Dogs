//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { Raza, Temperamento } = require("./src/db.js");

// Syncing all the models at once.
let id = 10000000;
conn.sync({ force: true }).then(() => {
  server.listen(3001, async () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
    // let crearRaza = {
    //   id: id + 1,
    //   name: `daya${id + 1}`,
    //   height: "12",
    //   weight: "2",
    //   life_span: "14",
    // };

    // let arrayRazas = new Array(100).fill({
    //   id: id++,
    //   name: `daya${id++}`,
    //   height: "12",
    //   weight: "2",
    //   life_span: "14",
    // });

    // for (let i = 0; i < arrayRazas.length; i++) {
    //   await Raza.create(arrayRazas[i]);
    // }
  });
});
