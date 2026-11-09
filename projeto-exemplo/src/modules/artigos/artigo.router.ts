import { OpenAPIHono } from "@hono/zod-openapi";
import {
  createArtigoRoute,
  listArtigosRoute,
  updateArtigoStatusRoute,
} from "./artigo.routes.js";
import { artigoService } from "./artigo.service.js";

export const artigoRouter = new OpenAPIHono();

artigoRouter.openapi(listArtigosRoute, async (c) => {
  const result = await artigoService.list();
  return c.json({ items: result }, 200);
});

artigoRouter.openapi(createArtigoRoute, async (c) => {
  const body = c.req.valid("json");
  const result = await artigoService.create(body);
  return c.json(result, 201);
});

artigoRouter.openapi(updateArtigoStatusRoute, async (c) => {
  const { id } = c.req.valid("param");
  const { status } = c.req.valid("json");
  const result = await artigoService.updateStatus(id, status);

  if (!result) {
    return c.json(
      { status: "error" as const, message: "Artigo não encontrado" },
      404,
    );
  }

  return c.json(result, 200);
});
