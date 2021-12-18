const express = require("express")
const morgan = require("morgan")
const path = require("path")
const fs = require("fs")
const { Worker } = require("worker_threads")
const cp = require('child_process')
const app = express()

app.use(morgan("combined"))

const fileSyncProc = (req, res) => {
    const start = new Date()
    console.log("sync process")
    const { name } = req.params
    const filePath = `${name}.txt`
    const data = fs.readFileSync(filePath)
    res.attachment(filePath)
    res.send(data)
    res.on("finish", () => {
        console.log("time : ", new Date() - start)
    })
}

const fileASyncProc = (req, res) => {
    const start = new Date()
    console.log("async process")
    const { name } = req.params
    const filePath = `${name}.txt`
    res.attachment(filePath)
    const dataStream = fs.createReadStream(filePath)
    dataStream.pipe(res)
    dataStream.on("finish", () => {
        console.log("time1 : ", new Date() - start)
    })
    res.on("finish", () => {
        console.log("time2 : ", new Date() - start)
    })
}



app.get("/file/s/:name", fileSyncProc)

app.get("/file/a/:name", fileASyncProc)


app.get("/t1", (req, res) => {
    let total = 0
    for(let i = 0; i < 10; i++) {
        total += 1
    }
    res.json({ total })
})

app.get("/t2", (req, res) => {
    let total = 0
    for(let i = 0; i < Math.pow(10, 10); i++) {
        total += 1
    }
    res.json({ total })
})

app.get("/t3", (req, res) => {
    const worker = new Worker("./worker.js")
    worker.on("message", (total) => {
        res.json({ total })
    })
})

app.get("/t4", (req, res) => {
    const childP = cp.fork("childp.js")
    childP.on("message", (total) => {
        res.json({ total })
    })
})

const PORT = 4001

app.listen(PORT, () => {
    console.log("listenig on : ", 4001)
})