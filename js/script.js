// Script de interação para Navbar e menu mobile.

document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.header-navbar');
  const toggleButton = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu__list a');

  const updateHeaderOnScroll = () => {
    if (window.scrollY > 24) {
      header.classList.add('header-navbar--scrolled');
    } else {
      header.classList.remove('header-navbar--scrolled');
    }
  };

  updateHeaderOnScroll();
  window.addEventListener('scroll', updateHeaderOnScroll);

  toggleButton.addEventListener('click', () => {
    const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
    toggleButton.setAttribute('aria-expanded', String(!isExpanded));
    navMenu.classList.toggle('nav-menu--open');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('nav-menu--open')) {
        navMenu.classList.remove('nav-menu--open');
        toggleButton.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Accordion FAQ
  const faqButtons = document.querySelectorAll('.faq-item__button');

  faqButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';

      // Fechar todos os itens
      faqButtons.forEach((btn) => {
        btn.setAttribute('aria-expanded', 'false');
      });

      // Abrir apenas o clicado, se não estava aberto
      if (!isExpanded) {
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });

});
