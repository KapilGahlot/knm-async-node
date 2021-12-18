const fs = require("fs")

const filePath = "f0.txt"

const start1 = new Date()
const data = fs.readFileSync(filePath)
console.log("sync data : ", data.length, new Date() - start1)

const start2 = new Date()
const allBuffer = []
const chunkCallback = (data) => {
    allBuffer.push(data)
    console.log("async chunk : ", data, data.length, new Date() - start2)
}

const fileStream = fs.createReadStream(filePath, { highWaterMark: 1 })

fileStream.on('data', chunkCallback)

fileStream.on('end', () => {
    const allData = Buffer.concat(allBuffer)
    console.log("data : ", allData.toString())
})