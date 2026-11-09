import { describe, expect, it } from "vitest";
import { app } from "../../app.js";

describe("Módulo de Artigos", () => {
  it("GET /artigos lista os artigos", async () => {
    const response = await app.request("/artigos/");

    expect(response.status).toBe(200);
    expect(await response.json()).toMatchObject({
      items: [{ id: "art-123", titulo: "Clínica e cultura" }],
    });
  });

  it("POST /artigos cria um artigo válido", async () => {
    const response = await app.request("/artigos/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ titulo: "Novo artigo" }),
    });

    expect(response.status).toBe(201);
    expect(await response.json()).toMatchObject({
      titulo: "Novo artigo",
      status: "rascunho",
    });
  });

  it("POST /artigos rejeita título curto", async () => {
    const response = await app.request("/artigos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ titulo: "Oi" }),
    });

    expect(response.status).toBe(400);
  });

  it("PATCH /artigos/:id/status atualiza status", async () => {
    const response = await app.request("/artigos/art-123/status", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "publicado" }),
    });

    expect(response.status).toBe(200);
    expect(await response.json()).toMatchObject({
      id: "art-123",
      status: "publicado",
    });
  });

  it("PATCH /artigos/:id/status rejeita status desconhecido", async () => {
    const response = await app.request("/artigos/art-123/status", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "arquivado" }),
    });

    expect(response.status).toBe(400);
  });

  it("PATCH /artigos/:id/status retorna 404 para artigo ausente", async () => {
    const response = await app.request("/artigos/nao-existe/status", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "publicado" }),
    });

    expect(response.status).toBe(404);
    expect(await response.json()).toMatchObject({ status: "error" });
  });
});
