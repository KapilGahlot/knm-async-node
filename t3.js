const fs = require("fs")

const f1Data = fs.readFileSync("f1.txt", "utf8")

const lim = 1900

const dataArr = []

const writeFile = (fName) => {
    try {
        fs.unlinkSync(fName)
    } catch (e) {
        console.log("file does no exist : ", fName)
    }
    for(let i = 0; i < lim; i++) {
        fs.appendFileSync(fName, f1Data + "\n", "utf8")
    }
}

writeFile("f4.txt")
// for(let i = 1; i < 2; i++) {
//     const fName = `f${i+1}.txt`
//     writeFile(fName)
// }


