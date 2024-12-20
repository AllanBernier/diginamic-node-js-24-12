// Crée un fichier message.txt contenant un message simple, par exemple :
// Bonjour, Node.js !
// Utilise fs.readFile pour lire le contenu de message.txt.
// Affiche le contenu dans la console.

const fs = require("fs")


fs.readFile("./message.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Erreur lors de la lecture :", err)
    return
  }
  console.log("Contenu du fichier :", data)
})