import request from "supertest"; 
import { expect } from "chai"; 
import app from "../src/main.js"; 

describe("API Animes funcionando", () => {
  
  describe("Servidor este arriba", () => {
    it("Inicia el servidor", (done) => {
      request(app)
        .get("/")
        .expect(404)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.status).to.equal(404);
          done();
        });
    });
  });

  describe("Pruebas para el endpoint PUT /animes/:id", () => {
    it("Actualizar el anime con éxito", async () => {
      const id = "2";
      const updatedData = {
        nombre: "Dragon Ball 2",
        genero: "Shonen",
        anio: "1986",
        autor: "Akira Toriyama",
      };
    });
  });
});

