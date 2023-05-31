const { json } = require("express")
const express = require("express")
const router = require("./router")

const app = express()

app.use(json())
app.use(router)

app.listen(3000, () => {
    console.log("rodando na porta 3000")
})
