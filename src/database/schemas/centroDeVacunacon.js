const { Schema } = require("mongoose");
const Vacuna = require("../models/Vacuna");

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
    type: [Vacuna],
    ref: "vacuna",
  },
});

module.exports = centroDeVacunacionSchema;
