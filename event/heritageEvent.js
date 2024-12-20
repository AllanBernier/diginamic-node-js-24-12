const EventEmitter = require("events")



class MyEmitter extends EventEmitter {

  constructor() {
    super()
    this.counter = 0
  }

  increment = () => {
    this.counter ++
    this.emit("increment", this.counter)
  }

  decrement = () => {
    this.counter --
    this.emit("decrement", this.counter)
  }


  getStatus = () => {
    console.log(this.counter)
    this.emit("status", this.counter)
  }
}

const myEvent = new MyEmitter()


myEvent.on("increment", (counter) => {
  console.log("on increment ", counter)
})

myEvent.on("decrement", (counter) => {
  console.log("on decrement ", counter)
})

myEvent.on("status", (counter) => {
  console.log("on status ", counter)
})

myEvent.increment()
myEvent.increment()
myEvent.decrement()
myEvent.getStatus()

