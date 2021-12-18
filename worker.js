const { parentPort } = require("worker_threads")

let total = 0

for(let i = 0; i < Math.pow(10, 10); i++) {
    total += 1
}

parentPort.postMessage(total)