# 🚀 GUIA COMPLETO: RODAR, FAZER DEPLOY E PUBLICAR

## 📋 Sumário
1. [Rodar Localmente](#rodar-localmente)
2. [Deploy no GitHub Pages](#deploy-github-pages)
3. [Deploy no Netlify](#deploy-netlify)
4. [Deploy no Vercel](#deploy-vercel)
5. [Domínio Personalizado](#domínio-personalizado)

---

## 🏠 Rodar Localmente

### Opção 1: Python (Recomendado)
```bash
# Abra o terminal na pasta do projeto
cd /workspaces/meu-site-empresa

# Python 3
python -m http.server 8000

# ou Python 2
python -m SimpleHTTPServer 8000
```
Abra: **http://localhost:8000** no navegador

### Opção 2: Node.js
```bash
# Instale http-server (se não tiver)
npm install -g http-server

# Execute
http-server .

# Ou com npx (sem instalar)
npx http-server .
```
Abra: **http://localhost:8080** no navegador

### Opção 3: Live Server (VS Code)
1. Instale a extensão "Live Server" no VS Code
2. Clique com botão direito em `index.html`
3. Clique em "Open with Live Server"

### Opção 4: Duplo clique
- Abra a pasta `meu-site-empresa`
- Duplo clique em `index.html`

---

## 🌐 Deploy no GitHub Pages (GRATUITO)

### Passo 1: Preparar o Repositório Git
```bash
cd /workspaces/meu-site-empresa

# Verificar se já tem git
git status

# Se não tiver, inicializar
git init

# Adicionar todos os arquivos
git add .

# Fazer commit
git commit -m "Primeiro commit - Site pronto para deploy"

# Renomear branch para main (se necessário)
git branch -M main
```

### Passo 2: Criar Repositório no GitHub
1. Acesse [github.com](https://github.com)
2. Clique em **"New repository"**
3. Nome: `meu-site-empresa`
4. Descrição: "Website profissional da empresa"
5. Escolha **Public** (para que fique público)
6. NÃO inicialize com README (já temos um)
7. Clique em **"Create repository"**

### Passo 3: Conectar e Fazer Push
```bash
# Adicionar remote (copie o URL do seu repositório)
git remote add origin https://github.com/SEU-USUARIO/meu-site-empresa.git

# Fazer push para o GitHub
git branch -M main
git push -u origin main
```

### Passo 4: Ativar GitHub Pages
1. Vá para **Settings** do repositório
2. Clique em **Pages** (esquerda)
3. Em "Source", selecione **main branch**
4. Clique em **Save**

### ✅ Pronto! Seu site estará em:
```
https://SEU-USUARIO.github.io/meu-site-empresa
```

---

## 🚀 Deploy no Netlify (MUITO FÁCIL)

### Opção A: Upload via Drag & Drop (Mais rápido)
1. Acesse [netlify.com](https://netlify.com)
2. Clique em **"Add new site"** > **"Deploy manually"**
3. Arraste a pasta `meu-site-empresa` para a área
4. Pronto! Seu site está publicado

**URL será algo como:** `https://seu-site-aleatório.netlify.app`

### Opção B: Deploy via GitHub (Recomendado)
1. Acesse [netlify.com](https://netlify.com) e faça login com GitHub
2. Clique em **"Add new site"** > **"Import an existing project"**
3. Selecione **GitHub**
4. Escolha o repositório `meu-site-empresa`
5. Clique em **Deploy**

**Vantagem:** Cada push no GitHub atualiza automaticamente!

### Personalizar Domínio no Netlify
1. Vá para **Site settings**
2. Clique em **Domain management**
3. Clique em **Add domain** para adicionar seu próprio domínio

---

## ⚡ Deploy no Vercel (MUITO FÁCIL)

### Passo 1: Conectar com GitHub
1. Acesse [vercel.com](https://vercel.com)
2. Clique em **"Sign up"** (pode usar conta GitHub)
3. Clique em **"Import Project"**
4. Selecione **GitHub**
5. Escolha `meu-site-empresa`

### Passo 2: Deploy
1. Configure as opções (pode deixar padrão)
2. Clique em **Deploy**

**Seu site estará em:**
```
https://seu-site-aleatório.vercel.app
```

### Personalizar Domínio no Vercel
1. Vá para **Settings** > **Domains**
2. Adicione seu domínio personalizado

---

## 🎯 Domínio Personalizado

### Registrar um Domínio
Escolha um registrador:
- **Namecheap** (barato e confiável)
- **GoDaddy**
- **HostGator**
- **Registro.br** (para .com.br)

**Preço médio:** R$ 30-80 por ano

### Conectar Domínio ao GitHub Pages

#### 1. Editar arquivo CNAME
Na raiz do repositório, crie arquivo `CNAME`:
```
seudominio.com.br
```

Ou edite pelo GitHub:
1. Vá para **Settings** > **Pages**
2. Em "Custom domain", coloque seu domínio
3. Clique em **Save**

#### 2. Configurar DNS no Registrador
No painel do seu registrador, adicione registros:

**Para GitHub Pages:**
```
Tipo A:
- @ → 185.199.108.153
- @ → 185.199.109.153
- @ → 185.199.110.153
- @ → 185.199.111.153

Tipo CNAME:
- www → seu-usuario.github.io
```

**Para Netlify:**
```
Tipo CNAME:
- www → seu-site.netlify.app
```

**Para Vercel:**
```
Tipo CNAME:
- www → cname.vercel-dns.com
```

---

## 📱 Resumo Rápido

| Plataforma | Preço | Fácilidade | Deploy | URL |
|-----------|-------|-----------|--------|-----|
| **GitHub Pages** | Grátis | ⭐⭐⭐ | Git push | `seu-user.github.io/repo` |
| **Netlify** | Grátis | ⭐⭐⭐⭐⭐ | Drag & drop | `site.netlify.app` |
| **Vercel** | Grátis | ⭐⭐⭐⭐⭐ | GitHub | `site.vercel.app` |

---

## 🎬 Tutorial Passo a Passo (GitHub Pages)

```bash
# 1. Verificar status
cd /workspaces/meu-site-empresa
git status

# 2. Adicionar arquivos (se não tiverem sido)
git add .

# 3. Commit
git commit -m "Deploy inicial"

# 4. Conectar ao GitHub (copie do seu repositório)
git remote add origin https://github.com/SEU-USUARIO/meu-site-empresa.git

# 5. Fazer push
git push -u origin main

# 6. Pronto! Acesse GitHub > Settings > Pages
# Seu site estará em: https://seu-usuario.github.io/meu-site-empresa
```

---

## 🔄 Atualizar Site (Depois de Publicado)

### GitHub Pages
```bash
# Editar arquivos localmente
# Depois fazer:
git add .
git commit -m "Descrição da mudança"
git push
# Site atualiza automaticamente em alguns minutos
```

### Netlify / Vercel
- **Com GitHub:** Faça push e atualiza automaticamente
- **Com upload manual:** Arraste a pasta novamente

---

## ✅ Checklist Antes de Publicar

- [ ] Adicionar logo.png real na pasta `img/`
- [ ] Adicionar banner.jpg real na pasta `img/`
- [ ] Editar informações de contato (email, telefone)
- [ ] Editar nome da empresa em todos os HTML
- [ ] Editar descrição dos serviços
- [ ] Testar formulário localmente
- [ ] Testar responsividade (F12 no navegador)
- [ ] Testar em mobile (abrir em celular na rede local)
- [ ] Verificar links (todos funcionando)

---

## 🐛 Troubleshooting

### "404 Not Found" no GitHub Pages
- Verifique se criou o arquivo `CNAME` corretamente
- Espere 5-10 minutos para GitHub processar

### Formulário não funciona
- Formulário local não envia email
- Para funcionar, integre com: Formspree, EmailJS ou Firebase

### Site lento
- Comprima as imagens em: [tinypng.com](https://tinypng.com)
- Use CDN para servir arquivos

---

## 💡 Próximos Passos

1. **Integrar Email**: Formspree, EmailJS ou Nodemailer
2. **Adicionar Analytics**: Google Analytics ou Matomo
3. **Certificado SSL**: Automático em GitHub Pages, Netlify e Vercel
4. **Otimizar SEO**: Adicionar meta tags e sitemap
5. **Backup**: Backup regular do repositório Git

---

## 📞 Suporte

Dúvidas comuns:

**P: Posso alterar o site depois de publicado?**
R: Sim! Edite os arquivos, faça push, e o site atualiza automaticamente.

**P: É seguro?**
R: Sim! GitHub Pages, Netlify e Vercel têm certificado SSL gratuito.

**P: Quanto custa?**
R: Totalmente grátis! (Domínio personalizado custa aprox. R$ 30-80/ano)

**P: Qual é a melhor opção?**
R: Para iniciantes: **Netlify** (mais fácil). Para mais controle: **GitHub Pages**.

---

<div align="center">

**Seu site estará online em minutos! 🎉**

Qualquer dúvida, volte aqui.

</div>
