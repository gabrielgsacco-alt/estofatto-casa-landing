# 📦 Estofatto Casa - Site Compilado Pronto para Transferência

Este diretório contém **todos os arquivos compilados e otimizados** do site da Estofatto Casa, prontos para serem transferidos para qualquer servidor ou hospedagem.

---

## 📋 Conteúdo da Pasta

- **`index.html`** — Arquivo principal do site (sempre deve estar na raiz)
- **`css/`** — Folhas de estilo compiladas e otimizadas
- **`js/`** — Scripts JavaScript compilados e minificados
- **`robots.txt`** — Arquivo para controlar rastreamento de bots
- **`sitemap.xml`** — Mapa do site para SEO
- **`__manus__/`** — Arquivos auxiliares (pode ser removido se não usar Manus)

---

## 🚀 Como Transferir o Site para Outro Domínio

### **Opção 1: Hostinger (ou qualquer hospedagem compartilhada)**

1. **Acesse o painel de controle** (hPanel, cPanel, etc.)
2. **Vá para File Manager** → **public_html**
3. **Faça upload de TODOS os arquivos** desta pasta para `public_html`
4. **Certifique-se de que `index.html` está na raiz** de `public_html`
5. **Configure o domínio** (apontar nameservers ou DNS)
6. **Aguarde a propagação de DNS** (até 24 horas)
7. **Teste o site** no novo domínio

### **Opção 2: AWS S3 + CloudFront**

1. Crie um bucket S3 com o nome do seu domínio
2. Faça upload de todos os arquivos para o bucket
3. Configure CloudFront como CDN
4. Aponte o domínio para o CloudFront

### **Opção 3: Netlify ou Vercel**

1. Compacte todos os arquivos em um ZIP
2. Faça upload via drag-and-drop ou Git
3. Configure o domínio personalizado
4. Deploy automático

### **Opção 4: Servidor Dedicado / VPS**

1. Conecte via SSH/SFTP
2. Crie uma pasta para o site (ex: `/var/www/estofattocasa`)
3. Faça upload de todos os arquivos
4. Configure o servidor web (Nginx/Apache)
5. Configure SSL/HTTPS
6. Aponte o domínio para o servidor

---

## ⚙️ Configurações Importantes

### **Certificado SSL/HTTPS**
- A maioria das hospedagens oferece SSL gratuito (Let's Encrypt)
- Certifique-se de ativar HTTPS na configuração do domínio

### **Compressão de Arquivos**
- Os arquivos já estão otimizados e minificados
- Ative GZIP no servidor para melhor performance

### **Cache do Navegador**
- Configure headers de cache no servidor para melhor performance
- Exemplo: Cache por 1 ano para arquivos com hash (CSS/JS), 1 dia para HTML

### **Redirecionamento de WWW**
- Configure para redirecionar `www.estofattocasa.com.br` → `estofattocasa.com.br` (ou vice-versa)

---

## 📊 Informações do Site

- **Nome:** Estofatto Casa - Móveis de Qualidade em Campo Grande
- **Descrição:** Móveis e estofados de alta qualidade em Campo Grande. Design sofisticado, conforto garantido e preço justo.
- **Tecnologia:** React 19 + Tailwind CSS 4 + Vite
- **Performance:** Otimizado para mobile (PageSpeed Insights)
- **SEO:** Estruturado com Schema.org, Sitemap e Robots.txt

---

## 🔍 Verificação Pós-Transferência

Após transferir o site, verifique:

- ✅ Site carrega corretamente no novo domínio
- ✅ Todas as imagens aparecem
- ✅ CSS e JavaScript funcionam (sem erros no console)
- ✅ Formulário de qualificação funciona
- ✅ Links internos funcionam
- ✅ Favicon (logo) aparece na aba do navegador
- ✅ Google Search Console indexa o novo domínio
- ✅ HTTPS está ativado

---

## 📞 Suporte

Se tiver dúvidas sobre a transferência, entre em contato com o suporte da sua hospedagem ou consulte a documentação específica do serviço.

---

**Última atualização:** 6 de junho de 2026
**Versão do Site:** 1.0 (Estável)
