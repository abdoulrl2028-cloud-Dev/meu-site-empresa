// ============================================
// SCRIPT PRINCIPAL DO SITE
// ============================================

/**
 * Inicializa o site quando o DOM está pronto
 */
document.addEventListener('DOMContentLoaded', function() {
    initHamburgerMenu();
    initFormValidation();
    initScrollAnimations();
    updateActiveNavLink();
});

/**
 * Menu Hamburger - Toggle para dispositivos móveis
 */
function initHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (!hamburger) return;

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

/**
 * Validação e envio do formulário de contato
 */
function initFormValidation() {
    const form = document.getElementById('contatoForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Validar campos
        if (!validateForm()) {
            showMessage('Please fill in every required field', 'erro');
            return;
        }

        // Simular envio (em produção, enviar para servidor)
        const formData = new FormData(form);
        
        // Aqui você pode enviar os dados para um servidor
        console.log('Dados do formulário:', {
            nome: formData.get('nome'),
            email: formData.get('email'),
            telefone: formData.get('telefone'),
            assunto: formData.get('assunto'),
            servico: formData.get('servico'),
            mensagem: formData.get('mensagem')
        });

        // Mostrar mensagem de sucesso
        showMessage('Message sent. We will get back to you soon.', 'sucesso');
        form.reset();
    });
}

/**
 * Validar campos do formulário
 */
function validateForm() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const assunto = document.getElementById('assunto').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    const termos = document.getElementById('termos').checked;

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nome || !email || !assunto || !mensagem || !termos) {
        return false;
    }

    if (!emailRegex.test(email)) {
        showMessage('Please enter a valid email address', 'erro');
        return false;
    }

    return true;
}

/**
 * Mostrar mensagem de resposta
 */
function showMessage(text, type) {
    const messageDiv = document.getElementById('mensagemResposta');
    if (!messageDiv) return;

    messageDiv.textContent = text;
    messageDiv.className = `mensagem-resposta ${type}`;

    // Remover mensagem após 5 segundos
    setTimeout(() => {
        messageDiv.className = 'mensagem-resposta';
        messageDiv.textContent = '';
    }, 5000);
}

/**
 * Animações ao fazer scroll
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar cards e elementos
    const elements = document.querySelectorAll('.card, .servico-card, .team-member, .step, .mvv-card');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

/**
 * Atualizar link de navegação ativo
 */
function updateActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

/**
 * Scroll suave para âncoras internas
 */
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

/**
 * Adicionar classe ao header ao fazer scroll
 */
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

/**
 * Formatar telefone enquanto digita
 */
function initPhoneFormatting() {
    const phoneInput = document.getElementById('telefone');
    if (!phoneInput) return;

    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length > 0) {
            if (value.length <= 2) {
                value = value;
            } else if (value.length <= 7) {
                value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
            } else {
                value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
            }
        }
        
        e.target.value = value;
    });
}

// Chamar função de formatação de telefone
initPhoneFormatting();

/**
 * Função para copiar email para área de transferência
 */
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to the clipboard.');
    }).catch(err => {
        console.error('Could not copy:', err);
    });
}

/**
 * Log de eventos para análise
 */
function logEvent(eventName, eventData = {}) {
    console.log(`Event: ${eventName}`, eventData);
    // Aqui você pode integrar com Google Analytics ou outro serviço
}

/**
 * Rastrear cliques em botões
 */
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        logEvent('button_click', {
            buttonText: this.textContent,
            buttonClass: this.className
        });
    });
});

/**
 * Rastrear cliques em links de navegação
 */
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        logEvent('navigation_click', {
            page: this.textContent,
            href: this.getAttribute('href')
        });
    });
});
