// Crée une classe personnalisée appelée MyEmitter qui hérite de EventEmitter.
// Ajoute une méthode appelée triggerEvent qui déclenche un événement customEvent.
// Écoute l'événement customEvent et affiche un message lorsqu'il est déclenché.
// Utilise la méthode triggerEvent pour déclencher l'événement.
const EventEmitter = require("events")

class MyEmitter extends EventEmitter {
  triggerEvent = () => {
    this.emit("customEvent")
  }

}

const myEm = new MyEmitter()

myEm.on("customEvent", () => {
  console.log("custom Event")
})


myEm.triggerEvent()
myEm.triggerEvent()
myEm.triggerEvent()