# Checklist de autoavaliação

## Contratos e schemas

- [ ] Defini o schema do parâmetro `id`.
- [ ] Defini e validei o body com os status permitidos.
- [ ] Defini o schema da resposta e exportei os tipos necessários.

## Implementação modular

- [ ] Declarei `PATCH /{id}/status` e as respostas HTTP em `artigo.routes.ts`.
- [ ] Implementei a atualização no service sem acessar o contexto Hono.
- [ ] Usei `c.req.valid("param")` e `c.req.valid("json")` no router.
- [ ] Retornei 200 para sucesso, 400 para entrada inválida e 404 para artigo ausente.
- [ ] Registrei o router em `app.ts` sob `/artigos`.

## Testes e revisão

- [ ] Testei a atualização bem-sucedida.
- [ ] Testei um status inválido.
- [ ] Testei um ID inexistente.
- [ ] Conferi status HTTP e corpo em cada cenário.
- [ ] Consultei o contrato em `/docs` ou `/openapi.json`.
