const Ciudad = require("../database/models/Ciudad");

const listCenters = async () => {
  const result = await Ciudad.find().select("puntosVacunacion -_id").populate();
  const centros = result[0].puntosVacunacion;
  return centros;
};

module.exports = listCenters;
