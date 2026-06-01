# Configuração do Pixel do Facebook

## Instruções para Ativar o Pixel do Facebook

### Passo 1: Criar um Pixel no Meta Business Suite

1. Acesse [Meta Business Suite](https://business.facebook.com/)
2. Vá para **"Dados e Privacidade"** → **"Pixels"**
3. Clique em **"Criar Pixel"**
4. Preencha os detalhes:
   - **Nome do Pixel**: Estofatto Casa Landing Page
   - **URL do site**: https://seu-dominio.com
5. Clique em **"Criar Pixel"**

### Passo 2: Obter o ID do Pixel

1. Após criar o Pixel, você verá o **ID do Pixel** (formato: `123456789`)
2. Copie este ID

### Passo 3: Atualizar o arquivo index.html

1. Abra o arquivo `client/index.html`
2. Localize as duas ocorrências de `XXXXXXXXXX` no script do Facebook Pixel
3. Substitua ambas pelo seu ID do Pixel real

**Exemplo:**
```html
<script>
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '123456789');
  fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=123456789&ev=PageView&noscript=1" /></noscript>
```

### Passo 4: Verificar a Instalação

1. Implante o site
2. Abra o site em seu navegador
3. No Meta Business Suite, vá para **"Pixels"** → Seu Pixel → **"Testes"**
4. Você deve ver o seu acesso sendo rastreado em tempo real

## Eventos Rastreados

O site rastreia os seguintes eventos automaticamente no Facebook Pixel:

### 1. **Lead** - Envio do Formulário de Qualificação
- Acionado quando o usuário envia o formulário
- **Dados capturados**:
  - `currency`: BRL
  - `value`: 1
  - `content_name`: Formulario de Qualificacao
  - `content_type`: product

### 2. **Contact** - Clique no Link do WhatsApp
- Acionado quando o usuário é redirecionado para o WhatsApp
- **Dados capturados**:
  - `content_name`: WhatsApp Redirect
  - `content_type`: product

### 3. **ViewContent** - Clique nos Botões de CTA
- Acionado quando o usuário clica em "Falar com Consultor"
- **Dados capturados**:
  - `content_name`: Qualification Form
  - `content_type`: product

### 4. **ViewContent** - Clique no Botão de Voltar ao Topo
- Acionado quando o usuário clica no botão de scroll to top
- **Dados capturados**:
  - `content_name`: Scroll To Top
  - `content_type`: engagement

## Configurações Recomendadas no Meta Business Suite

### 1. Criar Conversões Personalizadas

Para rastrear o formulário como conversão:

1. Vá para **"Dados e Privacidade"** → **"Conversões"**
2. Clique em **"Criar Conversão"**
3. Selecione o evento `Lead` do seu Pixel
4. Nomeie como "Formulário de Qualificação Enviado"
5. Clique em **"Criar"**

### 2. Criar Públicos Personalizados

Para fazer retargeting de usuários que visitaram o site:

1. Vá para **"Públicos"** → **"Criar Público"** → **"Público Personalizado"**
2. Selecione **"Pessoas que visitaram seu site"**
3. Selecione seu Pixel
4. Configure o período (ex: últimos 30 dias)
5. Clique em **"Criar Público"**

### 3. Integrar com Campanhas do Instagram

Para usar as conversões em suas campanhas:

1. Crie uma nova campanha no Meta Ads Manager
2. Selecione o objetivo **"Conversões"**
3. Na seção **"Configuração de Conversão"**, selecione o evento `Lead`
4. Configure o público-alvo e o orçamento
5. Lancee a campanha

## Eventos Padrão do Pixel

O Pixel rastreia automaticamente os seguintes eventos padrão:

- **PageView**: Quando alguém visita uma página do seu site
- **ViewContent**: Quando alguém visualiza um conteúdo específico
- **Lead**: Quando alguém se registra ou envia um formulário
- **Contact**: Quando alguém clica em um botão de contato

## Troubleshooting

### O Pixel não está rastreando eventos

1. Verifique se o ID do Pixel está correto no `index.html`
2. Abra o DevTools (F12) → Console
3. Digite `fbq('track', 'TestEvent');` para testar
4. Vá para **"Testes"** no seu Pixel e verifique se aparece

### Os eventos não aparecem em "Conversões"

1. Aguarde 24-48 horas para o Meta processar os dados
2. Verifique se o evento está sendo acionado corretamente
3. Crie manualmente a conversão em **"Conversões"**

## Próximos Passos

1. **Criar Campanhas de Retargeting**: Use os públicos personalizados para fazer retargeting de usuários que visitaram o site
2. **Otimizar Campanhas**: Use os dados de conversão para otimizar suas campanhas do Instagram
3. **Integrar com Google Ads**: Importe as conversões do Pixel para o Google Ads
4. **Análise Semanal**: Revise os dados semanalmente para otimizar o ROI

---

**Nota**: O rastreamento de eventos está configurado no código. Você apenas precisa adicionar o ID do Pixel correto no `index.html` para ativar o Pixel do Facebook.
