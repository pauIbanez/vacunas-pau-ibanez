const inquirer = require("inquirer");

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
  console.log(action);
};

module.exports = startUI;
