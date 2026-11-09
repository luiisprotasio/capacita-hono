# Critérios de avaliação

| Critério | Peso | Evidência esperada |
| --- | ---: | --- |
| Schemas e validações | 20% | Parâmetro, body e resposta definidos; status restrito aos valores permitidos; tipos derivados do Zod. |
| Contrato OpenAPI | 20% | Método, caminho, parâmetros, body e respostas documentados com `createRoute()`. |
| Separação de responsabilidades | 25% | Router conduz HTTP; service implementa regra sem contexto Hono; schemas e contrato ficam em seus arquivos. |
| Funcionamento do endpoint | 20% | Sucesso retorna artigo atualizado; body inválido retorna 400; ID ausente retorna 404. |
| Testes automatizados | 15% | Testes de integração com `app.request()` verificam status e corpo dos cenários principais. |

## Escala sugerida por critério

- **Completo:** atende ao comportamento e à responsabilidade descritos.
- **Parcial:** implementação existe, mas falta um cenário, tipo ou ligação necessária.
- **Não demonstrado:** funcionalidade ausente ou sem evidência verificável.

A nota ponderada é a soma do percentual alcançado em cada critério multiplicado pelo respectivo peso.
