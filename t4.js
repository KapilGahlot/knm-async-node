const start = new Date()

function EventEmtr() {
    this.events = {}
}

EventEmtr.prototype.on = function(type, handler) {
    this.events[type] = this.events[type] || []
    this.events[type].push(handler)
}

EventEmtr.prototype.emit = function(type) {
    if(this.events[type]) {
        this.events[type].forEach(handler => handler())
    }
}

let myEmtr = new EventEmtr()

myEmtr.on("page", () => { console.log("beep : ", new Date() - start)})

myEmtr.on("page", () => { console.log("beep beep : ", new Date() - start)})

setTimeout(() => {
    myEmtr.emit("page")
}, 5000)
