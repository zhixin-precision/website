/**
 * 知信精密 - 主脚本
 */
(function() {
  'use strict';

  // ====== Mobile Menu Toggle ======
  const menuToggle = document.getElementById('menuToggle');
  const navbar = document.getElementById('navbar');
  if (menuToggle && navbar) {
    menuToggle.addEventListener('click', function() {
      navbar.classList.toggle('open');
      menuToggle.textContent = navbar.classList.contains('open') ? '✕' : '☰';
    });
  }

  // ====== Smooth Scroll for Anchor Links ======
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ====== Header Scroll Effect ======
  let lastScroll = 0;
  window.addEventListener('scroll', function() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    const currentScroll = window.pageYOffset;

    if (currentScroll > 80) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  });

  // ====== Floating CTA Show/Hide ======
  const floatingCta = document.querySelector('.floating-cta');
  if (floatingCta) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 400) {
        floatingCta.classList.add('visible');
      } else {
        floatingCta.classList.remove('visible');
      }
    });
  }

  // ====== Product Image Error Fallback ======
  document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG' && e.target.parentElement) {
      e.target.style.display = 'none';
      const fallback = document.createElement('div');
      fallback.className = 'no-img';
      fallback.innerHTML = '📷<br>产品图片';
      e.target.parentElement.appendChild(fallback);
    }
  }, true);

})();
