# Guia de Deployment - Estofatto Casa Landing Page para Hostinger

## Pré-requisitos

- Conta ativa no Hostinger com suporte a Node.js
- SSH access habilitado
- Node.js 22.x ou superior instalado no servidor
- pnpm ou npm para gerenciamento de dependências

## Estrutura do Projeto

O projeto foi otimizado para portabilidade total e não possui dependências de caminhos absolutos ou serviços específicos do Manus.

```
estofatto-casa-landing/
├── client/              # Frontend React 19 + Tailwind 4
├── server/              # Backend Express 4 + tRPC 11
├── drizzle/             # Migrations de banco de dados
├── dist/                # Build de produção (gerado)
├── package.json         # Dependências do projeto
└── vite.config.ts       # Configuração Vite
```

## Passo 1: Preparar o Servidor

### 1.1 Conectar via SSH

```bash
ssh seu_usuario@seu_host.hostinger.com
```

### 1.2 Criar diretório do projeto

```bash
mkdir -p ~/public_html/estofatto-casa
cd ~/public_html/estofatto-casa
```

### 1.3 Instalar dependências globais

```bash
# Atualizar Node.js se necessário
node --version  # Deve ser v22.x ou superior

# Instalar pnpm (recomendado)
npm install -g pnpm
```

## Passo 2: Fazer Upload do Projeto

### Opção A: Git (Recomendado)

```bash
cd ~/public_html/estofatto-casa
git clone https://seu_repositorio.git .
```

### Opção B: SFTP/FTP

1. Fazer upload de todos os arquivos do projeto para `~/public_html/estofatto-casa`
2. Garantir que nenhuma pasta raiz extra foi criada

## Passo 3: Configurar Variáveis de Ambiente

### 3.1 Criar arquivo `.env`

```bash
cat > .env << 'EOF'
# Database
DATABASE_URL="mysql://usuario:senha@localhost:3306/estofatto_casa"

# OAuth (se usar autenticação)
VITE_APP_ID="seu_app_id"
OAUTH_SERVER_URL="https://oauth.server.com"
VITE_OAUTH_PORTAL_URL="https://login.server.com"
JWT_SECRET="sua_chave_secreta_aleatoria_aqui"

# Analytics
VITE_ANALYTICS_ENDPOINT="https://analytics.seu_dominio.com"
VITE_ANALYTICS_WEBSITE_ID="seu_website_id"

# App Config
VITE_APP_TITLE="Estofatto Casa - Móveis e Estofados"
VITE_APP_LOGO="https://seu_dominio.com/logo.png"

# Owner Info
OWNER_NAME="Seu Nome"
OWNER_OPEN_ID="seu_open_id"

# API Keys
BUILT_IN_FORGE_API_KEY="sua_chave_api"
BUILT_IN_FORGE_API_URL="https://api.seu_servidor.com"
VITE_FRONTEND_FORGE_API_KEY="sua_chave_frontend"
VITE_FRONTEND_FORGE_API_URL="https://api.seu_servidor.com"
EOF
```

### 3.2 Proteger o arquivo `.env`

```bash
chmod 600 .env
```

## Passo 4: Instalar Dependências e Build

### 4.1 Instalar dependências

```bash
cd ~/public_html/estofatto-casa
pnpm install
# ou npm install
```

### 4.2 Executar migrations de banco de dados

```bash
pnpm db:push
# Isso sincronizará o schema do Drizzle com seu banco de dados
```

### 4.3 Build de produção

```bash
pnpm build
# Gera: dist/public/ (frontend) e dist/index.js (backend)
```

## Passo 5: Configurar o Servidor Node.js

### 5.1 Criar arquivo de inicialização

```bash
cat > start.sh << 'EOF'
#!/bin/bash
cd ~/public_html/estofatto-casa
export NODE_ENV=production
node dist/index.js
EOF

chmod +x start.sh
```

### 5.2 Configurar PM2 (gerenciador de processo)

```bash
# Instalar PM2 globalmente
npm install -g pm2

# Criar arquivo ecosystem.config.js
cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [{
    name: 'estofatto-casa',
    script: './dist/index.js',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: './logs/error.log',
    out_file: './logs/out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
  }]
};
EOF

# Iniciar com PM2
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

## Passo 6: Configurar Proxy Reverso (Nginx/Apache)

### Para Nginx

```nginx
server {
    listen 80;
    server_name seu_dominio.com www.seu_dominio.com;

    # Redirecionar HTTP para HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name seu_dominio.com www.seu_dominio.com;

    ssl_certificate /etc/ssl/certs/seu_certificado.crt;
    ssl_certificate_key /etc/ssl/private/sua_chave.key;

    # Compressão
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss;

    # Cache headers
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # API routes - sem cache
    location /api {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Frontend
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### Para Apache

```apache
<VirtualHost *:80>
    ServerName seu_dominio.com
    ServerAlias www.seu_dominio.com
    Redirect permanent / https://seu_dominio.com/
</VirtualHost>

<VirtualHost *:443>
    ServerName seu_dominio.com
    ServerAlias www.seu_dominio.com

    SSLEngine on
    SSLCertificateFile /etc/ssl/certs/seu_certificado.crt
    SSLCertificateKeyFile /etc/ssl/private/sua_chave.key

    <Proxy *>
        Order allow,deny
        Allow from all
    </Proxy>

    ProxyPreserveHost On
    ProxyPass / http://localhost:3000/
    ProxyPassReverse / http://localhost:3000/

    # Compressão
    <IfModule mod_deflate.c>
        AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
    </IfModule>

    # Cache headers
    <FilesMatch "\.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$">
        Header set Cache-Control "max-age=31536000, public"
    </FilesMatch>
</VirtualHost>
```

## Passo 7: Configurar SSL/TLS

Se usar Let's Encrypt (recomendado):

```bash
# Instalar Certbot
sudo apt-get install certbot python3-certbot-nginx

# Gerar certificado
sudo certbot certonly --nginx -d seu_dominio.com -d www.seu_dominio.com

# Renovação automática (cron)
0 12 * * * /usr/bin/certbot renew --quiet
```

## Passo 8: Monitoramento e Logs

### Ver logs em tempo real

```bash
# Com PM2
pm2 logs estofatto-casa

# Ou direto
tail -f ~/public_html/estofatto-casa/logs/out.log
```

### Verificar status

```bash
pm2 status
pm2 info estofatto-casa
```

### Reiniciar aplicação

```bash
pm2 restart estofatto-casa
```

## Passo 9: Backup e Manutenção

### Backup automático do banco de dados

```bash
# Criar script de backup
cat > backup.sh << 'EOF'
#!/bin/bash
BACKUP_DIR="/home/seu_usuario/backups"
mkdir -p $BACKUP_DIR
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
mysqldump -u usuario -p'senha' estofatto_casa > $BACKUP_DIR/backup_$TIMESTAMP.sql
gzip $BACKUP_DIR/backup_$TIMESTAMP.sql
EOF

chmod +x backup.sh

# Adicionar ao cron (diariamente às 2 da manhã)
# 0 2 * * * /home/seu_usuario/backup.sh
```

## Troubleshooting

### Erro: "Cannot find module"

```bash
# Reinstalar dependências
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm build
pm2 restart estofatto-casa
```

### Erro: "Port already in use"

```bash
# Encontrar processo na porta 3000
lsof -i :3000

# Matar processo
kill -9 <PID>

# Ou usar porta diferente em ecosystem.config.js
```

### Erro: "Database connection failed"

```bash
# Verificar credenciais em .env
# Testar conexão
mysql -h localhost -u usuario -p'senha' -e "USE estofatto_casa; SELECT 1;"
```

## Performance e Otimizações

### Habilitar gzip no servidor

Já configurado nos exemplos de Nginx/Apache acima.

### Aumentar limite de conexões

```bash
# Em /etc/security/limits.conf
* soft nofile 65535
* hard nofile 65535
```

### Monitorar uso de recursos

```bash
# CPU e memória
pm2 monit

# Disco
df -h

# Memória
free -h
```

## Suporte e Documentação

- **Documentação Vite:** https://vitejs.dev/
- **Documentação Express:** https://expressjs.com/
- **Documentação tRPC:** https://trpc.io/
- **Documentação Drizzle:** https://orm.drizzle.team/

## Checklist de Deployment

- [ ] Variáveis de ambiente configuradas
- [ ] Banco de dados criado e migrations executadas
- [ ] Build de produção gerado sem erros
- [ ] PM2 configurado e iniciado
- [ ] Proxy reverso (Nginx/Apache) configurado
- [ ] SSL/TLS habilitado
- [ ] Domínio apontando para o servidor
- [ ] Testes de acesso ao site funcionando
- [ ] Logs sendo gerados corretamente
- [ ] Backup automático configurado
- [ ] Monitoramento ativo

---

**Última atualização:** 08 de Julho de 2026
**Versão do Projeto:** 993210c4
