const EventEmitter = require("events")
const em = new EventEmitter()

//1
em.on("monEvent" , () => {
  console.log("Mon event")
})

em.emit("monEvent")

//2
em.on("event-with-param", (data) => {
  console.log("data recived", data)
})

em.emit("event-with-param", { msg : "Hello from em"})