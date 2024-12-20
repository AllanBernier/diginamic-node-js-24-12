// Utilise exec pour exécuter la commande ls ou dir (selon ton système d'exploitation).
// Affiche les résultats ou les erreurs dans la console.
const { exec } = require("child_process")


console.log()

exec(process.platform === "linux" ? "ls" : "dir", (error, stdout, stderr) =>{

  if (error){
    console.log(error);
  }

  if (stderr){
    console.log(stderr);
  }

  if (stdout){
    console.log(stdout);
  }
})