const { Worker } = require("worker_threads")

console.log("Start")

const worker = new Worker("./worker.js")
worker.on("message", (msg) => {
  console.log(msg)
})

worker.on("error", (err) => {
  console.log("err" , err)
})

console.log("End")

setInterval(() => {
  console.log("Hello")
}, 1000)
