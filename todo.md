# Estofatto Casa - Landing Page TODO

## Funcionalidades Implementadas

- [x] Botão flutuante de WhatsApp Business com menu expansível
- [x] Rastreamento de eventos Google Analytics para cliques no WhatsApp
- [x] Formulário de qualificação de leads com validação
- [x] Integração do formulário com backend (tRPC)
- [x] Schema de banco de dados para armazenar leads
- [x] API de submissão de leads (`leads.submit`)
- [x] API para recuperar leads (`leads.getAll`)
- [x] Rastreamento de eventos GA para submissão de formulário
- [x] Rastreamento de eventos Facebook Pixel
- [x] Testes unitários com vitest para router de leads

## Funcionalidades em Progresso

- [x] Implementar formulário com backend para capturar leads automaticamente
- [x] Adicionar chat em tempo real para responder perguntas frequentes
- [x] Dashboard de analytics para visualizar leads capturados
- [x] Rastreamento avançado de conversões com UTM parameters

## Funcionalidades Completadas - Pronto para Produção

- [x] Botão flutuante WhatsApp Business como único canal de comunicação
- [x] Dashboard de leads com autenticação admin
- [x] Rastreamento de UTM parameters em GA e Facebook Pixel
- [x] Proteção de dados com adminProcedure
- [x] Testes de segurança e autenticação (9/9 passando)
- [x] Integração tRPC com banco de dados
- [x] OAuth Manus implementado

## Funcionalidades Futuras (Backlog)

- [ ] Integração com CRM (Pipedrive, HubSpot)
- [ ] Automação de email para leads
- [ ] Segmentação de leads por faixa de investimento
- [ ] Relatórios de ROI das campanhas
- [ ] A/B testing de formulário e CTA

## Melhorias de UX Implementadas

- [x] Atualizado código com novas imagens reais nas seções hero, fechada e detalhes
- [x] Implementado lightbox/zoom para imagens de textura e design com Dialog Radix
- [x] Implementado lazy loading com IntersectionObserver para todas as imagens
- [x] Adicionadas animações fade-in com classes CSS para revelação suave
- [x] Adicionado efeito de zoom ao passar o mouse em imagens clicáveis
- [x] OptimizedImage atualizado para suportar onClick, style e data-* attributes
- [x] Todos os testes continuam passando (9/9)

## Favicon e Portabilidade para Hostinger

- [x] Processar logo enviada e gerar favicons (recortar, otimizar, gerar tamanhos 16/32/48/180/192/512 + .ico)
- [x] Colocar favicons em client/public/ com caminhos relativos
- [x] Atualizar index.html para usar favicon local (sem /manus-storage/) - tambem og:image e schema
- [x] Revisar todos os arquivos garantindo portabilidade total (zero referencias a /manus-storage/)
- [x] Build de producao validado: imagens e favicons incluidos em dist/public/
- [x] Favicon servido com HTTP 200 e tipos corretos

## Correções e Melhorias de Animação

- [x] Corrigir bug do quadrado vermelho embaixo do botão WhatsApp (botão voltar ao topo + SupportChat reposicionados)
- [x] Restaurar zoom suave e elegante nas imagens (duration 2000ms, cubic-bezier natural, scale 1.06)
- [x] Implementar animações de surgimento (fade-in + slide-up) nas seções ao rolar (hook useScrollReveal + CSS reveal-section)
- [x] Encaixar molduras douradas em todas as 6 fotos (hero, textura, Living, Jantar, Design, showroom) com alinhamento consistente (-inset-2, border-secondary/60)
