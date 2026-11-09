import { z } from "@hono/zod-openapi";

export const ArtigoStatusSchema = z
  .enum(["rascunho", "publicado"])
  .openapi("ArtigoStatus");

export const ArtigoParamsSchema = z.object({
  id: z.string().min(1).openapi({ example: "art-123" }),
});

export const CreateArtigoSchema = z
  .object({
    titulo: z.string().min(3).openapi({ example: "Clínica e cultura" }),
    resumo: z.string().optional().openapi({ example: "Uma introdução ao tema." }),
  })
  .openapi("CreateArtigoInput");

export const UpdateArtigoStatusSchema = z
  .object({
    status: ArtigoStatusSchema,
  })
  .openapi("UpdateArtigoStatusInput");

export const ArtigoResponseSchema = z
  .object({
    id: z.string().openapi({ example: "art-123" }),
    titulo: z.string(),
    resumo: z.string().nullable(),
    status: ArtigoStatusSchema,
    criadoEm: z.string().datetime(),
  })
  .openapi("ArtigoResponse");

export const ErrorResponseSchema = z
  .object({
    status: z.literal("error"),
    message: z.string(),
  })
  .openapi("ErrorResponse");

export const ArtigoListResponseSchema = z
  .object({ items: z.array(ArtigoResponseSchema) })
  .openapi("ArtigoListResponse");

export type ArtigoStatus = z.infer<typeof ArtigoStatusSchema>;
export type ArtigoParams = z.infer<typeof ArtigoParamsSchema>;
export type CreateArtigoInput = z.infer<typeof CreateArtigoSchema>;
export type UpdateArtigoStatusInput = z.infer<typeof UpdateArtigoStatusSchema>;
export type ArtigoResponse = z.infer<typeof ArtigoResponseSchema>;
