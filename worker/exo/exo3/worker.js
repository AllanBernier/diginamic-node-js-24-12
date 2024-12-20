const { parentPort } = require("worker_threads")


let  sum = 0
let i  = 0
while (i < 1_000_000_000) {
  i++
  sum = sum + i*i
}

parentPort.postMessage(sum)
