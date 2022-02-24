const { model, Schema } = require("mongoose");

const VacunaSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  dosis: {
    type: Number,
    required: true,
    max: 3,
    min: 1,
  },
});

const Vacuna = model("Vacuna", VacunaSchema, "vacunas");

module.exports = Vacuna;
