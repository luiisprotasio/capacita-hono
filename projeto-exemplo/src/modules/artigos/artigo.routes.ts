import { createRoute } from "@hono/zod-openapi";
import {
  ArtigoListResponseSchema,
  ArtigoParamsSchema,
  ArtigoResponseSchema,
  CreateArtigoSchema,
  ErrorResponseSchema,
  UpdateArtigoStatusSchema,
} from "./artigo.schema.js";

export const listArtigosRoute = createRoute({
  method: "get",
  path: "/",
  tags: ["Artigos"],
  summary: "Lista artigos",
  responses: {
    200: {
      description: "Lista de artigos",
      content: { "application/json": { schema: ArtigoListResponseSchema } },
    },
  },
});

export const createArtigoRoute = createRoute({
  method: "post",
  path: "/",
  tags: ["Artigos"],
  summary: "Cria um artigo",
  request: {
    body: {
      content: { "application/json": { schema: CreateArtigoSchema } },
    },
  },
  responses: {
    201: {
      description: "Artigo criado",
      content: { "application/json": { schema: ArtigoResponseSchema } },
    },
    400: {
      description: "Entrada inválida",
      content: { "application/json": { schema: ErrorResponseSchema } },
    },
  },
});

export const updateArtigoStatusRoute = createRoute({
  method: "patch",
  path: "/{id}/status",
  tags: ["Artigos"],
  summary: "Atualiza o status de um artigo",
  request: {
    params: ArtigoParamsSchema,
    body: {
      content: { "application/json": { schema: UpdateArtigoStatusSchema } },
    },
  },
  responses: {
    200: {
      description: "Status atualizado",
      content: { "application/json": { schema: ArtigoResponseSchema } },
    },
    400: {
      description: "Entrada inválida",
      content: { "application/json": { schema: ErrorResponseSchema } },
    },
    404: {
      description: "Artigo não encontrado",
      content: { "application/json": { schema: ErrorResponseSchema } },
    },
  },
});
