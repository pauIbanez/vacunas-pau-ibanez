const { model, Schema } = require("mongoose");

const CiudadSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  puntosVacunacion: {
    type: Array,
    required: true,
  },
});

const Ciudad = model("Ciudad", CiudadSchema, "ciudades");

module.exports = Ciudad;
