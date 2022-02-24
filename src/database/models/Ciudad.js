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

const Ciudad = model("Vacuna", CiudadSchema, "vacuna");

module.exports = Ciudad;
