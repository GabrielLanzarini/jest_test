const request = require("supertest")
const express = require("express")
const app = express()
const urlBase = request("localhost:3000")

describe("Testes da API", () => {
    it("deve retornar status 200 para a rota /", async () => {
        const response = await urlBase.get("/")
        expect(response.statusCode).toBe(200)
    })

    it("deve retornar status 404 para a rota /hehe", async () => {
        const response = await urlBase.get("/hehe")
        expect(response.statusCode).toBe(404)
    })

    it("Deve retornar status 200 rota de email /", async () => {
        const email = "gabriel.laner@gmail.com"
        const response = await urlBase.post("/").send({ email })
        expect(response.statusCode).toBe(200)
    })

    it("deve retornar status 404 para a rota de email /", async () => {
        const email = "gabriel"
        const response = await urlBase.post("/").send({ email })
        expect(response.statusCode).toBe(400)
    })
})
