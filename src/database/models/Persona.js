const { model, Schema } = require("mongoose");
const centroDeVacunacionSchema = require("../schemas/centroDeVacunacon");
const Vacuna = require("./Vacuna");

const PersonaSchema = new Schema({
  dni: {
    type: String,
    required: true,
    length: 9,
  },
  centroDeVacunacion: {
    type: centroDeVacunacionSchema,
    required: true,
  },
  vacuna: {
    type: Vacuna,
    ref: "vacuna",
  },
  dosis: {
    type: [Date],
    minlength: 1,
    maxlength: 3,
  },
});

const Persona = model("Persona", PersonaSchema, "personas");

module.exports = Persona;
