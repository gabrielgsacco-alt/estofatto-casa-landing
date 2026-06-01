# Configuração do Google Analytics 4

## Instruções para Ativar o Google Analytics

### Passo 1: Criar uma Propriedade no Google Analytics 4

1. Acesse [Google Analytics](https://analytics.google.com/)
2. Clique em **"Criar"** e selecione **"Propriedade"**
3. Preencha os detalhes:
   - **Nome da propriedade**: Estofatto Casa
   - **Fuso horário**: America/Campo_Grande
   - **Moeda**: BRL (Real Brasileiro)
4. Clique em **"Criar"**

### Passo 2: Obter o ID de Medição (Measurement ID)

1. Na propriedade criada, vá para **"Administração"** (ícone de engrenagem)
2. Em **"Propriedade"**, clique em **"Streams da Web"**
3. Selecione seu stream (ou crie um novo se necessário)
4. Copie o **ID de Medição** (formato: `G-XXXXXXXXXX`)

### Passo 3: Atualizar o arquivo index.html

1. Abra o arquivo `client/index.html`
2. Localize as duas ocorrências de `G-XXXXXXXXXX` no script do Google Analytics
3. Substitua ambas pelo seu ID de Medição real

**Exemplo:**
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ABC123DEF45"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-ABC123DEF45');
</script>
```

### Passo 4: Verificar a Instalação

1. Implante o site
2. Abra o site em seu navegador
3. No Google Analytics, vá para **"Relatórios"** → **"Tempo real"**
4. Você deve ver o seu acesso sendo rastreado em tempo real

## Eventos Rastreados

O site rastreia os seguintes eventos automaticamente:

### 1. **form_submission** - Envio do Formulário de Qualificação
- **Categoria**: engagement
- **Label**: qualification_form
- **Dados capturados**:
  - `investment_range`: Faixa de investimento selecionada
  - `project_phase`: Fase do projeto
  - `has_architect`: Se possui acompanhamento profissional

### 2. **whatsapp_click** - Clique no Link do WhatsApp
- **Categoria**: engagement
- **Label**: whatsapp_redirect
- Rastreado quando o usuário é redirecionado para o WhatsApp

### 3. **scroll_to_form_click** - Clique nos Botões de CTA
- **Categoria**: engagement
- **Label**: cta_button
- Rastreado quando o usuário clica em "Falar com Consultor"

### 4. **scroll_to_top_click** - Clique no Botão de Voltar ao Topo
- **Categoria**: engagement
- **Label**: scroll_to_top_button

## Configurações Recomendadas no Google Analytics

### 1. Criar Conversões Personalizadas

Para rastrear o formulário como conversão:

1. Vá para **"Administração"** → **"Conversões"**
2. Clique em **"Novo evento de conversão"**
3. Selecione o evento `form_submission`
4. Nomeie como "Formulário de Qualificação Enviado"
5. Clique em **"Criar e continuar"**

### 2. Criar Segmentos

Para analisar diferentes tipos de usuários:

1. Vá para **"Administração"** → **"Segmentos personalizados"**
2. Crie segmentos como:
   - Usuários que clicaram em CTA
   - Usuários que enviaram o formulário
   - Usuários que foram para WhatsApp

### 3. Integrar com Google Ads

Para otimizar suas campanhas:

1. Vá para **"Administração"** → **"Contas vinculadas"**
2. Vincule sua conta do Google Ads
3. Configure as conversões para serem importadas no Google Ads
4. Use os dados para otimizar seus anúncios

## Visualizações Úteis

### Dashboard de Conversão

1. Crie um novo dashboard
2. Adicione os seguintes widgets:
   - **Métrica**: Eventos (filtrar por `form_submission`)
   - **Tabela**: Eventos por `investment_range`
   - **Gráfico de linha**: Envios de formulário ao longo do tempo
   - **Métrica**: Taxa de clique em CTA

### Relatório de Funil

1. Vá para **"Relatórios"** → **"Ciclo de vida"** → **"Aquisição"**
2. Analise como os usuários chegam ao site
3. Veja quantos clicam em CTA e quantos enviam o formulário

## Troubleshooting

### O Google Analytics não está rastreando eventos

1. Verifique se o ID de Medição está correto no `index.html`
2. Abra o DevTools (F12) → Console
3. Digite `gtag('event', 'test_event');` para testar
4. Vá para **"Tempo real"** no Google Analytics e verifique se aparece

### Os eventos não aparecem em "Conversões"

1. Aguarde 24-48 horas para o Google Analytics processar os dados
2. Verifique se o evento está sendo acionado corretamente
3. Crie manualmente a conversão em **"Administração"** → **"Conversões"**

## Próximos Passos

1. **Integrar com Google Ads**: Importe as conversões para otimizar suas campanhas
2. **Integrar com Meta Ads**: Use o Pixel do Facebook para rastrear conversões no Instagram
3. **Criar Alertas**: Configure alertas para picos ou quedas de tráfego
4. **Análise Semanal**: Revise os dados semanalmente para otimizar o site

---

**Nota**: O rastreamento de eventos está configurado no código. Você apenas precisa adicionar o ID de Medição correto no `index.html` para ativar o Google Analytics.
