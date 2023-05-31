const express = require("express")
const routes = express.Router()

const pessoas = [
    {
        gabriel: {
            idade: 13,
        },
        roger: {
            idade: 15,
        },
    },
]

routes.get("", (req, res) => {
    res.status(200).json({ pessoas })
})

routes.post("", (req, res) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/
    const { email } = req.body
    if (email.match(regex)) {
        res.status(200).json({ message: "email correto" })
    } else res.status(400).json({ message: "email incorreto" })
})

module.exports = routes
