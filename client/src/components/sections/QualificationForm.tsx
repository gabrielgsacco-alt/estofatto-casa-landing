import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { CONTACT_INFO } from "@/const";

const qualificationSchema = z.object({
  nome: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("Email inválido"),
  telefone: z.string().min(10, "Telefone deve ter pelo menos 10 dígitos"),
  investimento: z.string().min(1, "Selecione uma faixa de investimento"),
  fase: z.string().min(1, "Selecione a fase do projeto"),
  descricao: z.string().min(10, "Descrição deve ter pelo menos 10 caracteres"),
});

type QualificationFormData = z.infer<typeof qualificationSchema>;

export const QualificationForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm<QualificationFormData>({
    resolver: zodResolver(qualificationSchema),
  });

  const fase = watch("fase");

  const onSubmit = async (data: QualificationFormData) => {
    setIsLoading(true);

    try {
      const whatsappMessage = `Olá! Meu nome é ${data.nome}. Estou interessado em móveis para ${data.fase}. Meu investimento previsto é de ${data.investimento}. ${data.descricao}. Meu email é ${data.email} e meu telefone é ${data.telefone}.`;
      const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

      // Rastrear conversão no Google Analytics
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "lead_qualification", {
          event_category: "conversion",
          event_label: "qualification_form",
          value: 1,
        });
      }

      // Rastrear conversão no Facebook Pixel
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Lead", {
          content_name: "Qualification Form",
          content_type: "lead",
          value: 1,
          currency: "BRL",
        });
      }

      setShowSuccess(true);
      reset();

      setTimeout(() => {
        window.open(whatsappUrl, "_blank");
        setShowSuccess(false);
      }, 1500);
    } catch (error) {
      toast.error("Erro ao enviar formulário. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <Label
              htmlFor="nome"
              className="text-xs tracking-widest uppercase font-semibold text-foreground"
            >
              Nome Completo *
            </Label>
            <Input
              id="nome"
              placeholder="Seu nome completo"
              {...register("nome")}
              className="bg-background border-border/60 text-foreground placeholder:text-muted-foreground/50"
            />
            {errors.nome && (
              <p className="text-xs text-destructive">{errors.nome.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-xs tracking-widest uppercase font-semibold text-foreground"
            >
              Email *
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              {...register("email")}
              className="bg-background border-border/60 text-foreground placeholder:text-muted-foreground/50"
            />
            {errors.email && (
              <p className="text-xs text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="telefone"
              className="text-xs tracking-widest uppercase font-semibold text-foreground"
            >
              Telefone / WhatsApp *
            </Label>
            <Input
              id="telefone"
              placeholder="(67) 99999-9999"
              {...register("telefone")}
              className="bg-background border-border/60 text-foreground placeholder:text-muted-foreground/50"
            />
            {errors.telefone && (
              <p className="text-xs text-destructive">
                {errors.telefone.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="investimento"
              className="text-xs tracking-widest uppercase font-semibold text-foreground"
            >
              Faixa de Investimento *
            </Label>
            <Select onValueChange={value => setValue("investimento", value)}>
              <SelectTrigger className="bg-background border-border/60 text-foreground">
                <SelectValue placeholder="Selecione a faixa" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border">
                <SelectItem value="ate-5mil">Até R$ 5.000</SelectItem>
                <SelectItem value="5mil-10mil">R$ 5.000 - R$ 10.000</SelectItem>
                <SelectItem value="10mil-20mil">
                  R$ 10.000 - R$ 20.000
                </SelectItem>
                <SelectItem value="acima-20mil">Acima de R$ 20.000</SelectItem>
              </SelectContent>
            </Select>
            {errors.investimento && (
              <p className="text-xs text-destructive">
                {errors.investimento.message}
              </p>
            )}
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label
              htmlFor="fase"
              className="text-xs tracking-widest uppercase font-semibold text-foreground"
            >
              Fase do Projeto *
            </Label>
            <RadioGroup onValueChange={value => setValue("fase", value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="planejamento" id="planejamento" />
                <Label
                  htmlFor="planejamento"
                  className="font-normal cursor-pointer"
                >
                  Planejamento inicial
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="em-andamento" id="em-andamento" />
                <Label
                  htmlFor="em-andamento"
                  className="font-normal cursor-pointer"
                >
                  Projeto em andamento
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="finalizacao" id="finalizacao" />
                <Label
                  htmlFor="finalizacao"
                  className="font-normal cursor-pointer"
                >
                  Finalização / Pronto para comprar
                </Label>
              </div>
            </RadioGroup>
            {errors.fase && (
              <p className="text-xs text-destructive">{errors.fase.message}</p>
            )}
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label
              htmlFor="descricao"
              className="text-xs tracking-widest uppercase font-semibold text-foreground"
            >
              Conte-nos sobre seu projeto *
            </Label>
            <Textarea
              id="descricao"
              placeholder="Descreva brevemente seu projeto, o tipo de móvel que procura e qualquer detalhe importante..."
              {...register("descricao")}
              className="bg-background border-border/60 text-foreground placeholder:text-muted-foreground/50 min-h-[120px]"
            />
            {errors.descricao && (
              <p className="text-xs text-destructive">
                {errors.descricao.message}
              </p>
            )}
          </div>
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-xs tracking-widest uppercase px-8 py-6 transition-all duration-300 relative"
        >
          {isLoading ? (
            <div className="flex items-center justify-center space-x-1">
              <span
                className="inline-block w-1 h-1 bg-current rounded-full animate-bounce"
                style={{ animationDelay: "0ms" }}
              />
              <span
                className="inline-block w-1 h-1 bg-current rounded-full animate-bounce"
                style={{ animationDelay: "150ms" }}
              />
              <span
                className="inline-block w-1 h-1 bg-current rounded-full animate-bounce"
                style={{ animationDelay: "300ms" }}
              />
            </div>
          ) : (
            "Falar com Consultor"
          )}
        </Button>
      </form>

      {showSuccess && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-background border border-border p-8 max-w-sm text-center space-y-4 animate-scale-in">
            <h3 className="text-3xl font-serif font-light text-foreground">
              Obrigado!
            </h3>
            <p className="text-sm text-foreground font-medium">
              Seu formulário foi enviado com sucesso. Você será redirecionado
              para o WhatsApp em instantes.
            </p>
            <div className="flex justify-center space-x-1 pt-4">
              <span
                className="inline-block w-2 h-2 bg-primary rounded-full animate-bounce"
                style={{ animationDelay: "0ms" }}
              />
              <span
                className="inline-block w-2 h-2 bg-primary rounded-full animate-bounce"
                style={{ animationDelay: "150ms" }}
              />
              <span
                className="inline-block w-2 h-2 bg-primary rounded-full animate-bounce"
                style={{ animationDelay: "300ms" }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default QualificationForm;
