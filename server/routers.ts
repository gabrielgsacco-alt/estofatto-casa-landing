import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { createLead, getAllLeads } from "./db";
import { z } from "zod";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Router para gerenciar leads do formulário de qualificação
  leads: router({
    submit: publicProcedure
      .input(
        z.object({
          nome: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
          whatsapp: z.string().min(10, "WhatsApp inválido"),
          faseProjeto: z.string().min(1, "Fase do projeto é obrigatória"),
          arquiteto: z.enum(["sim", "nao"]),
          investimento: z.string().min(1, "Faixa de investimento é obrigatória"),
          descricao: z.string().min(10, "Descrição deve ter pelo menos 10 caracteres"),
        })
      )
      .mutation(async ({ input }) => {
        try {
          const result = await createLead({
            nome: input.nome,
            whatsapp: input.whatsapp,
            faseProjeto: input.faseProjeto,
            arquiteto: input.arquiteto,
            investimento: input.investimento,
            descricao: input.descricao,
          });
          return { success: true, message: "Lead criado com sucesso" };
        } catch (error) {
          console.error("Erro ao criar lead:", error);
          throw new Error("Falha ao salvar o lead");
        }
      }),
    getAll: publicProcedure.query(async () => {
      try {
        const leads = await getAllLeads();
        return leads;
      } catch (error) {
        console.error("Erro ao buscar leads:", error);
        return [];
      }
    }),
  }),
});

export type AppRouter = typeof appRouter;
