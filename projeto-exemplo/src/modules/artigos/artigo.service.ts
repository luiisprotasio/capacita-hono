import type {
  ArtigoResponse,
  ArtigoStatus,
  CreateArtigoInput,
} from "./artigo.schema.js";

// Armazenamento em memória para manter o exemplo independente de banco.
const artigos = new Map<string, ArtigoResponse>([
  [
    "art-123",
    {
      id: "art-123",
      titulo: "Clínica e cultura",
      resumo: "Uma introdução ao tema.",
      status: "rascunho",
      criadoEm: "2026-01-15T12:00:00.000Z",
    },
  ],
]);

let nextId = 1;

export const artigoService = {
  async list(): Promise<ArtigoResponse[]> {
    return [...artigos.values()];
  },

  async create(input: CreateArtigoInput): Promise<ArtigoResponse> {
    const artigo: ArtigoResponse = {
      id: `art-novo-${nextId++}`,
      titulo: input.titulo,
      resumo: input.resumo ?? null,
      status: "rascunho",
      criadoEm: new Date().toISOString(),
    };
    artigos.set(artigo.id, artigo);
    return artigo;
  },

  async updateStatus(id: string, status: ArtigoStatus): Promise<ArtigoResponse | null> {
    const artigo = artigos.get(id);
    if (!artigo) return null;

    const atualizado = { ...artigo, status };
    artigos.set(id, atualizado);
    return atualizado;
  },
};
