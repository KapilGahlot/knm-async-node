const fs = require("fs")

const filePath = "f0.txt"

const data = fs.readFileSync(filePath)

console.log("sync data : ", data)
console.log("sync data : ", data.toJSON())
console.log("sync data : ", data.toString())

data[3] = 43

console.log("sync data : ", data)
console.log("sync data : ", data.toJSON())
console.log("sync data : ", data.toString())