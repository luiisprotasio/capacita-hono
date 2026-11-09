# Desafio: atualize o status de um artigo

## Objetivo

Implemente `PATCH /artigos/:id/status` na estrutura do projeto de exemplo. O endpoint deve atualizar o status de um artigo e devolver o registro atualizado.

## Regras

- O parâmetro `id` é obrigatório.
- O body recebe `{ "status": "rascunho" | "publicado" }`.
- Se o artigo existir e o body for válido, atualize somente o status e responda `200` com o artigo.
- Se o status for inválido, a validação responde `400`.
- Se o artigo não existir, responda `404` com uma mensagem clara.
- Preserve os demais campos do artigo.

## Entregáveis

1. Schemas para parâmetro, body e resposta em `artigo.schema.ts`.
2. Contrato com `createRoute()` em `artigo.routes.ts`.
3. Regra de negócio sem contexto HTTP em `artigo.service.ts`.
4. Handler ligado ao contrato com `router.openapi()` em `artigo.router.ts`.
5. Registro do router em `app.ts`.
6. Testes Vitest com `app.request()` para sucesso, body inválido e ID inexistente.

Use os cinco arquivos do módulo existentes como referência. Não adicione banco de dados ou autenticação: o objetivo é demonstrar responsabilidades e fluxo HTTP.
