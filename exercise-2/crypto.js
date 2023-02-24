const crypto = require('crypto')

console.log(crypto)

const id = crypto.randomBytes(16).toString("hex")

console.log(id)