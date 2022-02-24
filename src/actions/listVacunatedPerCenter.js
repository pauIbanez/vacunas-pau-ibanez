const inquirer = require("inquirer");
const Persona = require("../database/models/Persona");
const listCenters = require("./listCenters");

const listVacunatedPerCenter = async () => {
  const centers = await listCenters();
  const centerNames = centers.map((center) => center.nombre);

  const answer = await inquirer.prompt([
    {
      name: "Elige un centro",
      type: "list",
      choices: [...centerNames],
    },
  ]);

  const personsForCenter = Persona.find({
    centroDeVacunacion: { name: answer["Elige un centro"] },
  });

  return personsForCenter;
};

module.exports = listVacunatedPerCenter;
