const chalk = require("chalk");
const inquirer = require("inquirer");
const debug = require("debug")("vacunas:results");
const util = require("util");
const listCenters = require("../actions/listCenters");

const askForCommand = async () =>
  inquirer.prompt([
    {
      name: "Elige una acción",
      type: "list",
      choices: [
        "Listar centros de vacunación",
        "Listar personas vacunadas por centro",
        "Introducir vacunas",
        "Introducir personas vacunadas",
      ],
    },
  ]);

const startUI = async () => {
  const action = await askForCommand();
  try {
    switch (action["Elige una acción"]) {
      case "Listar centros de vacunación": {
        debug(chalk.whiteBright("Buscando centros de vacunación..."));

        const result = await listCenters();
        debug(chalk.greenBright("Centros de vacunación encontrados!"));
        debug(util.inspect(result, false, null, true));
        break;
      }

      default:
        break;
    }
  } catch (error) {
    debug(
      chalk.redBright(`Error buscando en la base de datos: ${error.message}`)
    );
  }
};

module.exports = startUI;
