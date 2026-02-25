// NAVIGATION JS 
  const nav        = document.getElementById('nav');
  const hamburger  = document.getElementById('hamburger');
  const drawer     = document.getElementById('drawer');

  // Scroll → solid nav
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  // Hamburger toggle
  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    drawer.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    drawer.setAttribute('aria-hidden', !isOpen);
  });

  // Close drawer when a link is clicked
  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      drawer.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
      drawer.setAttribute('aria-hidden', true);
    });
  });

  // Close drawer on outside click
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !drawer.contains(e.target)) {
      hamburger.classList.remove('open');
      drawer.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
      drawer.setAttribute('aria-hidden', true);
    }
  });


  // Gallery Image Loader
document.addEventListener('DOMContentLoaded', function() {
  const galleryGrid = document.getElementById('galleryGrid');

  // Create gallery items
  galleryImages.forEach(image => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery__item';
    
    galleryItem.innerHTML = `
      <div class="gallery__item-image">
        <img src="${image.path}" alt="${image.name}" loading="lazy" />
      </div>
      <div class="gallery__item-overlay">
        <h3 class="gallery__item-title">${image.name}</h3>
        <p class="gallery__item-category">${image.category}</p>
      </div>
    `;
    
    galleryGrid.appendChild(galleryItem);
  });
});