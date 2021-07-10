const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

  sequelize.define('raza', {
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    altura: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    peso: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    esperanzaDeVida: {
        type: DataTypes.INTEGER,
    }
  });
};
