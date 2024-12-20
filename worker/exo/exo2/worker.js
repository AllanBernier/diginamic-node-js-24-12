const { parentPort, workerData } = require("worker_threads")

parentPort.on('message', (number) => {
  parentPort.postMessage(number * 2);
});
