const { model, Schema } = require("mongoose");
const centroDeVacunacionSchema = require("../schemas/centroDeVacunacon");

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
    type: [Schema.Types.ObjectId],
    ref: "Vacuna",
  },
  dosis: {
    type: [Date],
    minlength: 1,
    maxlength: 3,
  },
});

const Persona = model("Persona", PersonaSchema, "personas");

module.exports = Persona;
