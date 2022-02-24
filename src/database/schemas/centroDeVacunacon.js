const { Schema } = require("mongoose");

const localizacionSchema = new Schema({
  coordenadas: {
    type: [Number],
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
});

const centroDeVacunacionSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  localizacion: {
    type: localizacionSchema,
  },
  vacunas: {
    type: [Schema.Types.ObjectId],
    ref: "vacuna",
  },
});

module.exports = centroDeVacunacionSchema;
