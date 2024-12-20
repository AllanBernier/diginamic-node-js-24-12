// Dans ce fichier, crée un worker thread qui calcule la somme de deux nombres.
// Envoie deux nombres au worker via workerData et retourne le résultat au thread principal.
// Affiche le résultat dans le thread principal.


const { Worker } = require("worker_threads")

const worker = new Worker("./worker.js", {
  workerData: {
    a: 10,
    b: 20
  }
})

worker.on("message", (result) => {
  console.log("Résultat:", result)
})

worker.on("error", (err) => {
  console.log("Erreur:", err)
})
