# Projeto de exemplo: Artigos

API didática para acompanhar a capacitação. Usa Hono, Zod OpenAPI, TypeScript e Vitest, mantendo os dados em memória para destacar a divisão de responsabilidades.

## Requisitos

- Node.js 20 ou superior
- npm

## Instalar e executar

Na pasta `projeto-exemplo/`:

```sh
npm install
npm run dev
```

A API fica em `http://localhost:3000`. Consulte `/docs` para abrir o Swagger UI e `/openapi.json` para ver a especificação OpenAPI.

## Rotas incluídas

- `GET /artigos/`: lista os artigos de exemplo.
- `POST /artigos/`: valida e cria um artigo.
- `PATCH /artigos/:id/status`: atualiza para `rascunho` ou `publicado`.

O ID `art-123` existe inicialmente. Os demais dados persistem apenas enquanto o processo Node estiver ativo.

## Testes e build

```sh
npm test
npm run typecheck
npm run build
```

A pasta `src/modules/artigos/` mantém os cinco arquivos do padrão: schema, routes, service, router e test. O `app.ts` registra o router e a documentação; `index.ts` inicia o servidor para uso local.
