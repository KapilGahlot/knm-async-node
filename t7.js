const crypto = require("crypto")

const n = 2

// for(let i = 0; i < 4; i++) {
//     const start = new Date()
//     crypto.pbkdf2Sync("pwd1234", "sltA", 1000000, 512, 'sha512')
//     console.log("end : ", i, new Date(), new Date() - start)
// }

// process.env.UV_THREADPOOL_SIZE = 14
for(let i = 0; i < 14; i++) {
    const start = new Date()
    crypto.pbkdf2("pwd1234", "sltA", 1000000, 512, 'sha512', () => {
        console.log("end : ", i, new Date(), new Date() - start)
    })
}