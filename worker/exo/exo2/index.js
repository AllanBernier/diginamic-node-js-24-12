// Configure un worker thread qui écoute des messages du thread principal via parentPort.
// À chaque message reçu, le worker renvoie le double du nombre reçu.
// Dans le thread principal, envoie plusieurs nombres et affiche les réponses.

const { Worker } = require("worker_threads")

const worker = new Worker('./worker.js');
let i = 0

setInterval(() => {
  i++
  worker.postMessage(i);
}, 1000)

worker.on('message', result => {
  console.log(`Le double du nombre est: ${result}`);
});


