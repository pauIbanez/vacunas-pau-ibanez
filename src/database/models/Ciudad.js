const { model, Schema } = require("mongoose");
const centroDeVacunacionSchema = require("../schemas/centroDeVacunacon");

const CiudadSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  puntosVacunacion: {
    type: [centroDeVacunacionSchema],
    required: true,
  },
});

const Ciudad = model("Ciudad", CiudadSchema, "ciudades");

module.exports = Ciudad;
