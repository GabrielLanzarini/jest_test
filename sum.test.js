    const sum = require("./sum")
    const request = require("supertest")
    const express = require("express")
    const app = express()

test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3)
})

test("adds 2 + 2 to equal 4", () => {
    expect(sum(2, 2)).toBe(4)
})

test("objects tests", () => {
    const obj = {
        one: 1,
        two: 4,
    }
    expect(obj).toEqual({ one: 1, two: 4 })
})

describe("Testes do aplicativo Express", () => {
    it("deve retornar status 200 para a rota /", async () => {
        const response = await request("localhost:3000").get("/get")
        expect(response.statusCode).toBe(200)
    })

    // it("deve retornar status 404 para uma rota inexistente", async () => {
    //     const response = await request(app).get("/rota-inexistente")
    //     expect(response.status).toBe(404)
    // })

    // Adicione mais testes conforme necessário
})
