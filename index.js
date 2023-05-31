const express = require("express")

const app = express()
app.get("/get", (req, res) => {
    console.log('awuidgiu');
    res.status(200).json({message: 'uhdo'})
})

app.listen(3000, () => {
    console.log("rodando na porta 80")
})


