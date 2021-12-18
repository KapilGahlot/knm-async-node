const fs = require("fs")

const path = require("path")

// const filePath = path.join("/Users/kapilgahlot/Downloads/" + "yelp_dataset.tar")
const filePath = path.join("/Users/kapilgahlot/Downloads/" + "Class - V (Day 1)-20200323T163509Z-001.zip")

const stats = fs.statSync(filePath)

console.log("filePath : ", filePath)
console.log("stats : ", stats)

const data1 = fs.readFileSync(filePath)

console.log("data size : ", data1.length)

const data2 = fs.readFileSync(filePath)

console.log("data size : ", data2.length)

const data3 = fs.readFileSync(filePath)

console.log("data size : ", data3.length)