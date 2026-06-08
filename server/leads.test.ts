import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock do banco de dados
vi.mock("./db", () => ({
  createLead: vi.fn(async (lead) => {
    return { success: true, id: 1 };
  }),
  getAllLeads: vi.fn(async () => {
    return [
      {
        id: 1,
        nome: "João Silva",
        whatsapp: "5567999999999",
        faseProjeto: "planejamento",
        arquiteto: "nao",
        investimento: "5mil-10mil",
        descricao: "Procuro móveis para minha sala de estar",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
  }),
}));

function createMockContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

describe("Leads Router", () => {
  describe("leads.submit", () => {
    it("deve submeter um lead com dados válidos", async () => {
      const ctx = createMockContext();
      const caller = appRouter.createCaller(ctx);

      const result = await caller.leads.submit({
        nome: "Maria Santos",
        whatsapp: "5567988888888",
        faseProjeto: "em-andamento",
        arquiteto: "nao",
        investimento: "10mil-20mil",
        descricao: "Preciso de móveis para meu quarto e sala de estar",
      });

      expect(result).toEqual({
        success: true,
        message: "Lead criado com sucesso",
      });
    });

    it("deve rejeitar lead com nome muito curto", async () => {
      const ctx = createMockContext();
      const caller = appRouter.createCaller(ctx);

      try {
        await caller.leads.submit({
          nome: "Jo",
          whatsapp: "5567988888888",
          faseProjeto: "planejamento",
          arquiteto: "nao",
          investimento: "ate-5mil",
          descricao: "Descrição válida com mais de dez caracteres",
        });
        expect.fail("Deveria ter lançado erro");
      } catch (error: any) {
        expect(error.message).toContain("Nome deve ter pelo menos 3 caracteres");
      }
    });

    it("deve rejeitar lead com WhatsApp inválido", async () => {
      const ctx = createMockContext();
      const caller = appRouter.createCaller(ctx);

      try {
        await caller.leads.submit({
          nome: "João Silva",
          whatsapp: "123",
          faseProjeto: "planejamento",
          arquiteto: "nao",
          investimento: "ate-5mil",
          descricao: "Descrição válida com mais de dez caracteres",
        });
        expect.fail("Deveria ter lançado erro");
      } catch (error: any) {
        expect(error.message).toContain("WhatsApp inválido");
      }
    });

    it("deve rejeitar lead com descrição muito curta", async () => {
      const ctx = createMockContext();
      const caller = appRouter.createCaller(ctx);

      try {
        await caller.leads.submit({
          nome: "João Silva",
          whatsapp: "5567988888888",
          faseProjeto: "planejamento",
          arquiteto: "nao",
          investimento: "ate-5mil",
          descricao: "Curto",
        });
        expect.fail("Deveria ter lançado erro");
      } catch (error: any) {
        expect(error.message).toContain(
          "Descrição deve ter pelo menos 10 caracteres"
        );
      }
    });

    it("deve rejeitar lead com fase do projeto inválida", async () => {
      const ctx = createMockContext();
      const caller = appRouter.createCaller(ctx);

      try {
        await caller.leads.submit({
          nome: "João Silva",
          whatsapp: "5567988888888",
          faseProjeto: "",
          arquiteto: "nao",
          investimento: "ate-5mil",
          descricao: "Descrição válida com mais de dez caracteres",
        });
        expect.fail("Deveria ter lançado erro");
      } catch (error: any) {
        expect(error.message).toContain("Fase do projeto é obrigatória");
      }
    });
  });

  describe("leads.getAll", () => {
    it("deve retornar lista de leads", async () => {
      const ctx = createMockContext();
      const caller = appRouter.createCaller(ctx);

      const result = await caller.leads.getAll();

      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
      expect(result[0]).toHaveProperty("nome");
      expect(result[0]).toHaveProperty("whatsapp");
      expect(result[0]).toHaveProperty("faseProjeto");
    });
  });
});
