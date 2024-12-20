// Utilise le module events pour créer un émetteur d'événements.
// Écoute un événement nommé greet qui affiche "Bonjour, tout le monde !".
// Déclenche l'événement greet.

const EventEmitter = require("events")

const em = new EventEmitter()

em.on('greet', () => {
  console.log("Bonjour, tout le monde !")
})


em.emit("greet")
