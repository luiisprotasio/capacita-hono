import { OpenAPIHono } from "@hono/zod-openapi";
import { swaggerUI } from "@hono/swagger-ui";
import { artigoRouter } from "./modules/artigos/artigo.router.js";

export const app = new OpenAPIHono();

app.doc("/openapi.json", {
  openapi: "3.0.0",
  info: {
    title: "Capacitação Hono — Artigos",
    version: "1.0.0",
    description: "API de exemplo para aprender a arquitetura modular.",
  },
});

app.get("/docs", swaggerUI({ url: "/openapi.json" }));
app.route("/artigos", artigoRouter);
