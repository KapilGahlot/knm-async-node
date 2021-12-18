console.log("start")

setTimeout(() => {
    setTimeout(() => {
        console.log("timeout4")
    }, 0)
}, 0)

setTimeout(() => {
    console.log("timeout1")
}, 0)
setTimeout(() => {
    console.log("timeout2")
}, 0)

const p1 = new Promise((res, rej) => {
    setTimeout(() => {
        res("p1")
    }, 0)
})

p1.then(console.log)

setTimeout(() => {
    process.nextTick(() => {
        console.log("next tick2")
    })
}, 0)

setTimeout(() => {
    console.log("timeout3")
}, 0)

setImmediate(() => {
    console.log("Immediate")
})

Promise.resolve().then(() => {console.log("p2")})


process.nextTick(() => {
    console.log("next tick1")
})