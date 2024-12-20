// Implémente un calcul de la somme des carrés de tous les entiers entre 
// 1 et un grand nombre (par exemple, 10 millions) dans un worker thread.
// Compare le temps d'exécution entre le thread principal et le worker thread.


const { Worker } = require("worker_threads")

const worker = new Worker("./worker.js")


worker.on("message", (msg) => {
  console.log("Result :" + msg)
})