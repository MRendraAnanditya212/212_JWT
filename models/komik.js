"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Komik extends Model {
    static associate(models) {
      // Relasi jika diperlukan
    }
  }
  Komik.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Komik",
    }
  );
  return Komik;
};