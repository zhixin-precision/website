/**
 * 知信精密 - 产品中心页面渲染
 */
(function() {
  'use strict';

  // ====== Category Filter Buttons ======
  function buildCategoryFilter() {
    const filter = document.getElementById('catFilter');
    if (!filter) return;

    const buttons = ZHIXIN_DATA.categories.map(cat =>
      `<button class="cat-btn" data-cat="${cat.id}">${cat.icon} ${cat.name}</button>`
    ).join('');

    filter.innerHTML = `<button class="cat-btn active" data-cat="all">全部产品</button>${buttons}`;

    // Filter click handler
    filter.addEventListener('click', function(e) {
      if (e.target.classList.contains('cat-btn')) {
        filter.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        const catId = e.target.dataset.cat;
        filterProducts(catId);
      }
    });
  }

  function filterProducts(catId) {
    const sections = document.querySelectorAll('.product-cat-section');
    sections.forEach(section => {
      if (catId === 'all' || section.id === catId) {
        section.style.display = 'block';
      } else {
        section.style.display = 'none';
      }
    });

    // Scroll to first visible section
    const firstVisible = document.querySelector('.product-cat-section[style*="display: block"], .product-cat-section:not([style])');
    if (firstVisible && catId !== 'all') {
      firstVisible.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // ====== Build Product Sections ======
  function buildAllProducts() {
    const container = document.getElementById('allProducts');
    if (!container) return;

    let html = '';

    ZHIXIN_DATA.categories.forEach(cat => {
      const catData = ZHIXIN_DATA.products[cat.id];
      if (!catData) return;

      html += `<div class="product-cat-section" id="${cat.id}">`;
      html += `<h2 class="section-title" style="border-left: 5px solid var(--accent);padding-left:16px;margin-bottom:24px;">`;
      html += `<span style="background:var(--accent);color:white;width:32px;height:32px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-size:0.7em;margin-right:10px;">${cat.num}</span>`;
      html += `${cat.name}`;
      html += `<span style="font-size:0.5em;color:var(--text-light);margin-left:8px;">${cat.desc}</span>`;
      html += `</h2>`;

      // If category has subcategories (like 量具)
      if (catData.subcategories) {
        catData.subcategories.forEach(sub => {
          html += `<h3 class="subcat-heading">${sub.name}</h3>`;
          html += `<div class="product-detail-grid">`;
          sub.items.forEach(item => {
            html += buildProductCard(item);
          });
          html += `</div>`;
        });
      }
      // Simple product list
      else if (catData.items) {
        html += `<div class="product-detail-grid">`;
        catData.items.forEach(item => {
          html += buildProductCard(item);
        });
        html += `</div>`;
      }

      html += `</div>`;
    });

    container.innerHTML = html;
  }

  function buildProductCard(item) {
    const badge = item.bestseller ? '<span class="prod-badge">🔥 畅销</span>' : '';
    const imgSrc = item.img ? `images/products/${item.img}` : '';
    const imgTag = imgSrc
      ? `<img src="${imgSrc}" alt="${item.name}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\\'no-img\\'>📷<br>产品图片</div>'">`
      : `<div class="no-img">📷<br>产品图片</div>`;

    // Build specs string
    const specsHtml = item.specs
      ? `<ul class="prod-specs">${item.specs.map(s => `<li>${s}</li>`).join('')}</ul>`
      : '';

    return `
      <div class="product-detail-card${item.bestseller ? ' bestseller' : ''}" id="prod-${item.model.replace(/[^a-zA-Z0-9]/g, '-')}">
        ${badge}
        <div class="prod-img">${imgTag}</div>
        <div class="prod-info">
          <h4 class="prod-name">${item.name}</h4>
          <div class="prod-model">型号: ${item.model}</div>
          <p class="prod-desc">${item.desc || ''}</p>
          ${specsHtml}
        </div>
      </div>`;
  }

  // ====== Build category cards for index page ======
  window.buildCategoryGrid = function() {
    const grid = document.getElementById('categoryGrid');
    if (!grid) return;

    const featuredCats = ZHIXIN_DATA.categories.filter(c => c.featured);

    const html = featuredCats.map(cat => `
      <a href="products.html#${cat.id}" class="category-card">
        <div class="cat-card-icon">${cat.icon}</div>
        <h3>${cat.name}</h3>
        <p>${cat.desc}</p>
        <span class="cat-card-link">查看产品 →</span>
      </a>
    `).join('');

    grid.innerHTML = html;
  };

  // ====== Init ======
  buildCategoryFilter();
  buildAllProducts();
  window.buildCategoryGrid();

  // ====== Catalog Lightbox ======
  function initCatalogLightbox() {
    const gallery = document.getElementById('catalogGallery');
    const lightbox = document.getElementById('catalogLightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCounter = document.getElementById('lightboxCounter');
    const closeBtn = document.getElementById('lightboxClose');
    const prevBtn = document.getElementById('lightboxPrev');
    const nextBtn = document.getElementById('lightboxNext');

    if (!gallery || !lightbox) return;

    const totalPages = 12;
    let currentPage = 1;

    function showPage(page) {
      currentPage = page;
      lightboxImg.src = 'images/catalog/image' + page + '.jpeg';
      lightboxImg.alt = '样册第' + page + '页';
      lightboxCounter.textContent = page + ' / ' + totalPages;
    }

    // Click on gallery card
    gallery.addEventListener('click', function(e) {
      const card = e.target.closest('.catalog-card');
      if (!card) return;
      const page = parseInt(card.dataset.page);
      showPage(page);
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    // Close
    function closeLightbox() {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) closeLightbox();
    });

    // Navigation
    prevBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      if (currentPage > 1) showPage(currentPage - 1);
    });

    nextBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      if (currentPage < totalPages) showPage(currentPage + 1);
    });

    // Keyboard
    document.addEventListener('keydown', function(e) {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft' && currentPage > 1) showPage(currentPage - 1);
      if (e.key === 'ArrowRight' && currentPage < totalPages) showPage(currentPage + 1);
    });
  }

  initCatalogLightbox();

})();
