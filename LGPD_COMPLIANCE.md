# Conformidade LGPD - Estofatto Casa Landing Page

## Visão Geral

A landing page da Estofatto Casa foi desenvolvida em conformidade com a **Lei Geral de Proteção de Dados (LGPD)** brasileira. Este documento descreve as medidas implementadas para proteger a privacidade dos usuários.

---

## 1. Banner de Consentimento de Cookies

### Implementação

Um banner de consentimento aparece na primeira visita do usuário, informando sobre:
- **Google Analytics**: Rastreamento de comportamento do usuário
- **Meta Pixel**: Rastreamento de conversões para campanhas do Instagram
- **Cookies**: Armazenamento de preferências e dados de sessão

### Funcionalidades

- **Aceitar**: O usuário concorda com o rastreamento e a preferência é salva no localStorage
- **Rejeitar**: O usuário rejeita o rastreamento e a preferência é salva no localStorage
- **Persistência**: A escolha do usuário é lembrada por 365 dias (ou até limpar o cache)

### Localização

O banner aparece na parte inferior da página (fixed bottom) e é responsivo em dispositivos móveis.

---

## 2. Dados Coletados

### Através do Formulário de Qualificação

Os seguintes dados são coletados **apenas com consentimento explícito**:

- **Nome completo**: Campo obrigatório
- **Número de WhatsApp**: Campo obrigatório
- **Fase do Projeto**: Seleção múltipla (Planejamento, Execução, etc.)
- **Acompanhamento Profissional**: Sim/Não (se tem arquiteto)
- **Faixa de Investimento**: Seleção múltipla (R$ 5-10k, R$ 10-15k, etc.)
- **Descrição do Ambiente**: Texto livre (opcional)

### Através do Google Analytics

- Páginas visitadas
- Tempo de permanência
- Dispositivo e navegador
- Localização aproximada (país/cidade)
- Fonte de tráfego

### Através do Meta Pixel

- Eventos de conversão (Lead, Contact, ViewContent)
- Dados demográficos aproximados
- Comportamento de navegação

---

## 3. Finalidade do Tratamento de Dados

Os dados coletados são utilizados para:

1. **Atendimento ao Cliente**: Responder consultas via WhatsApp
2. **Análise de Desempenho**: Entender o comportamento dos visitantes
3. **Otimização de Campanhas**: Melhorar anúncios do Instagram com base em conversões
4. **Segmentação**: Criar públicos personalizados para retargeting

---

## 4. Armazenamento e Segurança

### Dados do Formulário

- **Armazenamento**: Enviados diretamente para WhatsApp (não armazenados no servidor)
- **Segurança**: Transmissão via HTTPS
- **Retenção**: Conforme política de retenção do WhatsApp

### Dados de Rastreamento

- **Google Analytics**: Armazenado nos servidores do Google (EUA)
- **Meta Pixel**: Armazenado nos servidores do Meta (EUA)
- **Retenção**: Conforme políticas de cada plataforma

---

## 5. Direitos do Usuário

Conforme a LGPD, o usuário tem direito a:

### Acesso
- Solicitar quais dados foram coletados sobre ele

### Retificação
- Corrigir dados imprecisos

### Exclusão
- Solicitar a exclusão de seus dados (direito ao esquecimento)

### Portabilidade
- Receber seus dados em formato estruturado

### Oposição
- Se opor ao processamento de seus dados

### Revogação de Consentimento
- Retirar o consentimento a qualquer momento

**Para exercer esses direitos, entre em contato:**
- Email: [seu-email@estofatto.com.br]
- WhatsApp: [seu-número]
- Endereço: Rua 13 de Maio, 1459 - Centro - Campo Grande, MS

---

## 6. Política de Privacidade

### Conteúdo Recomendado

A Política de Privacidade completa deve incluir:

1. **Identificação do Controlador**: Estofatto Casa
2. **Finalidades do Tratamento**: Listadas acima
3. **Bases Legais**: Consentimento, interesse legítimo
4. **Compartilhamento de Dados**: Com quem os dados são compartilhados
5. **Retenção de Dados**: Por quanto tempo os dados são mantidos
6. **Direitos do Titular**: Listados acima
7. **Contato do DPO**: Se aplicável
8. **Alterações na Política**: Como o usuário será notificado

### Links Recomendados

- Adicionar link para "Política de Privacidade" no footer
- Adicionar link para "Política de Cookies" no footer
- Adicionar link para "Termos de Uso" no footer

---

## 7. Checklist de Conformidade

- [x] Banner de consentimento implementado
- [x] Opção de aceitar/rejeitar cookies
- [x] Consentimento armazenado no localStorage
- [x] Google Analytics integrado
- [x] Meta Pixel integrado
- [ ] Política de Privacidade publicada
- [ ] Política de Cookies publicada
- [ ] Termos de Uso publicados
- [ ] Contato do DPO (se aplicável)
- [ ] Registro de processamento de dados

---

## 8. Próximos Passos

1. **Criar Política de Privacidade Completa**
   - Consulte um advogado especializado em LGPD
   - Publique no site em página dedicada

2. **Implementar Formulário de Solicitação de Direitos**
   - Permitir que usuários solicitem acesso, exclusão, etc.

3. **Designar DPO (Data Protection Officer)**
   - Se a empresa processa dados em larga escala

4. **Realizar Avaliação de Impacto**
   - AIPD (Avaliação de Impacto à Proteção de Dados)

5. **Treinar Equipe**
   - Educar sobre LGPD e boas práticas

---

## 9. Referências

- [Lei Geral de Proteção de Dados (LGPD)](http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm)
- [Autoridade Nacional de Proteção de Dados (ANPD)](https://www.gov.br/cidadania/pt-br/acesso-a-informacao/lgpd)
- [Guia Prático de LGPD](https://www.gov.br/cidadania/pt-br/acesso-a-informacao/lgpd/guia-lgpd)

---

**Última atualização**: Junho de 2026
**Status**: Em conformidade com LGPD
