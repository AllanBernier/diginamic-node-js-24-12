const { spawn } = require("child_process")


const commande = spawn(process.argv[2], ["--version"])
commande.stdout.on("data", (data) => {
  console.log("data :", data.toString())
})


commande.stderr.on("data", (data) => {
  console.log("data :" , data)
})

commande.on("error", (error) => {
  console.log("error :", error)
})