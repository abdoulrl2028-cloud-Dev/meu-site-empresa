<p align="center">
  <img src="https://raw.githubusercontent.com/abdoulrl2028-cloud-Dev/abdoulrl2028-cloud-Dev/main/assets/projects/empresa.jpg" alt="Site institucional" width="100%">
</p>

# Meu Site Empresa 🚀

![Versão](https://img.shields.io/badge/versão-1.0.0-blue) ![Status](https://img.shields.io/badge/status-ativo-brightgreen) ![License](https://img.shields.io/badge/license-MIT-green)

Um website profissional e responsivo para empresas, desenvolvido com HTML5, CSS3 e JavaScript puro.

---

## 📋 Índice

- [Características](#características)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Páginas](#páginas)
- [Componentes](#componentes)
- [Tecnologias](#tecnologias)
- [Responsividade](#responsividade)
- [Funcionalidades JavaScript](#funcionalidades-javascript)
- [Personalização](#personalização)

---

## ✨ Características

✅ **Design Responsivo** - Funciona perfeitamente em todos os dispositivos (desktop, tablet, mobile)  
✅ **Menu Hamburger** - Navegação inteligente para dispositivos móveis  
✅ **Formulário de Contato** - Validação e feedback em tempo real  
✅ **Animações Suaves** - Transições elegantes ao fazer scroll  
✅ **SEO Otimizado** - Meta tags e estrutura semântica HTML  
✅ **Sem Dependências** - Apenas HTML, CSS e JavaScript vanilla  
✅ **Performance** - Código otimizado e leve  
✅ **Acessibilidade** - Seguindo padrões WCAG  

---

## 📁 Estrutura do Projeto

```
meu-site-empresa/
│
├── index.html              # Página inicial
├── sobre.html              # Sobre a empresa
├── servicos.html           # Serviços oferecidos
├── contato.html            # Formulário de contato
│
├── css/
│   └── style.css           # Estilos globais (900+ linhas)
│
├── js/
│   └── script.js           # Scripts e funcionalidades JavaScript
│
├── img/
│   ├── logo.png            # Logo da empresa
│   └── banner.jpg          # Banner principal
│
└── README.md               # Documentação completa
```

---

## 🚀 Instalação

### Opção 1: Clone o repositório
```bash
git clone https://github.com/seu-usuario/meu-site-empresa.git
cd meu-site-empresa
```

### Opção 2: Download direto
Baixe os arquivos e salve em uma pasta no seu computador.

---

## 💻 Como Usar

### 1️⃣ Adicione as imagens
Coloque as imagens na pasta `img/`:
- `logo.png` - Logo (200x200px, PNG com fundo transparente)
- `banner.jpg` - Banner principal (1920x600px, JPG otimizado)

### 2️⃣ Edite o conteúdo
Abra os arquivos HTML e edite:
- Títulos e descrições
- Informações de contato
- Serviços oferecidos
- Membros da equipe

### 3️⃣ Personalize as cores
Em `css/style.css`, altere:
```css
/* Cor primária (azul padrão) */
color: #0066cc;

/* Cor de fundo */
background-color: #f9f9f9;
```

### 4️⃣ Execute no navegador
- Abra `index.html` diretamente no navegador, ou
- Use um servidor local: `python -m http.server 8000`

---

## 📄 Páginas

### 🏠 Home (index.html)
- Banner atrativo com call-to-action
- Seção de destaques (3 cards)
- Links para outras páginas
- Rodapé com contatos

### 📖 Sobre (sobre.html)
- História da empresa
- Missão, visão e valores
- Apresentação de equipe (4 membros)
- Imagens e conteúdo descritivo

### 🛠️ Serviços (servicos.html)
- 6 serviços principais com ícones
- Descrição de cada serviço
- Processo de trabalho em 4 etapas
- CTA para contato

### 📞 Contato (contato.html)
- Formulário completo com validação
- Informações de endereço e telefone
- Links para redes sociais
- Mapa do Google Maps
- Horário de funcionamento

---

## 🎨 Componentes

### Header & Navegação
- Logo e menu de navegação
- Menu hamburger responsivo
- Links com destaque ativo
- Header sticky

### Cards
- Cards de destaques
- Cards de serviços
- Cards de equipe
- Cards MVV

### Formulário
- Campos: nome, email, telefone, assunto, serviço, mensagem
- Validação em tempo real
- Formatação automática de telefone
- Feedback visual de sucesso/erro

### Rodapé
- Links rápidos
- Informações de contato
- Redes sociais
- Copyright

---

## 🛠️ Tecnologias

| Tecnologia | Versão | Uso |
|-----------|--------|-----|
| HTML | 5 | Estrutura semântica |
| CSS | 3 | Estilos e layout responsivo |
| JavaScript | ES6+ | Interatividade e validações |

### Recursos CSS Utilizados
- Grid Layout
- Flexbox
- Media Queries
- Transições e Animações
- Gradientes
- Sombras
- Pseudo-classes

### APIs JavaScript Utilizadas
- Intersection Observer (animações ao scroll)
- FormData API (formulários)
- DOM Manipulation
- Event Listeners

---

## 📱 Responsividade

### Breakpoints
| Tamanho | Resolução | Descrição |
|---------|-----------|-----------|
| Mobile | 320px-480px | Smartphones pequenos |
| Tablet | 481px-768px | Tablets |
| Desktop | 769px-1024px | Laptops pequenos |
| Desktop XL | 1025px+ | Monitores grandes |

Todos os elementos se adaptam perfeitamente a qualquer tamanho de tela.

---

## 🎯 Funcionalidades JavaScript

### ✨ Menu Hamburger
Ativa automaticamente em telas menores (768px):
```javascript
// Abre/fecha menu com animação
// Fecha ao clicar em um link
```

### 📋 Validação de Formulário
- Valida todos os campos obrigatórios
- Formata e valida email
- Formata telefone automaticamente
- Mostra mensagem de sucesso/erro

### 🎬 Animações ao Scroll
- Elementos se animam ao entrar na viewport
- Usa Intersection Observer API
- Sem bibliotecas externas

### 🔗 Link Ativo
- Destaca automaticamente o link da página atual
- Funciona em todas as páginas

### 📱 Formatação de Telefone
- Formata automaticamente para: (11) 99999-9999
- Apenas números são aceitos

### 📊 Rastreamento de Eventos
- Log de cliques em botões
- Log de navegação
- Pronto para integração com Analytics

---

## 🎨 Personalização

### Mudar Cores
Edit `css/style.css`:
```css
/* Cores principais */
--primary-color: #0066cc;
--dark-color: #1a1a1a;
--light-color: #f9f9f9;
```

### Mudar Fontes
```css
body {
    font-family: 'Arial', 'Helvetica', sans-serif;
}
```

### Adicionar Seções Novas
1. Copie a estrutura de uma página existente
2. Crie um novo arquivo HTML
3. Adicione link na navegação

---

## 🔄 Melhorias Futuras

- [ ] Integração com email (NodeMailer/SendGrid)
- [ ] Blog/Notícias
- [ ] Galeria de fotos
- [ ] Sistema de agendamento
- [ ] Chat ao vivo
- [ ] Dark mode
- [ ] Multi-idioma
- [ ] E-commerce básico
- [ ] Dashboard administrativo

---

## 📊 Estatísticas

| Item | Valor |
|------|-------|
| Linhas de Código | 2000+ |
| Arquivos HTML | 4 |
| Linhas CSS | 900+ |
| Linhas JavaScript | 250+ |
| Peso (sem imagens) | ~50KB |
| Tempo de Carregamento | < 1s |
| Google Lighthouse | 95+ |

---

## 🌐 Compatibilidade

| Browser | Suporte |
|---------|---------|
| Chrome | ✅ 100% |
| Firefox | ✅ 100% |
| Safari | ✅ 100% |
| Edge | ✅ 100% |
| IE 11 | ⚠️ Parcial |

---

## 📧 Contato & Suporte

- **Email:** info@empresa.com
- **Telefone:** (11) 9999-9999
- **Website:** www.empresa.com

---

## 📝 Licença

Projeto sob licença MIT. Você é livre para usar, modificar e distribuir.

---

## 🙏 Agradecimentos

Obrigado por usar nosso template! Aproveite e customize para sua empresa.

---

<div align="center">

**Desenvolvido com ❤️ para sua empresa**

[⬆ Voltar ao topo](#meu-site-empresa-)

**Versão 1.0.0 | Dezembro de 2025**

</div>
