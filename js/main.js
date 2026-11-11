/**
 * ==============================================================================
 * MANISHA SUBUDHI - PORTFOLIO INTERACTIVE CORE ENGINE
 * ==============================================================================
 * Handles:
 * - Dynamic rendering of Gallery, Videos, Moments & Testimonials
 * - Category Filtering for Photos and Videos
 * - Fullscreen Photo Lightbox with Next/Prev & Swipe
 * - Video Player Lightbox (YouTube / Vimeo / HTML5 MP4)
 * - 3D Tilt Effect on Hero Portrait & Cards
 * - Ambient Stage Particles Canvas
 * - Booking Form with Instant WhatsApp Message Generator
 * - Scroll Spy, Sticky Header & Mobile Drawer Navigation
 * - Animated Counters & Viewport Reveal
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  const cfg = window.PORTFOLIO_CONFIG || {};

  // 1. Initialize Particles Background
  initAmbientParticles();

  // 2. Initialize Navigation & Mobile Drawer
  initNavigation();

  // 3. Render Dynamic Content
  renderHeroStats();
  renderPhotoGallery();
  renderVideoPortfolio();
  renderMoments();
  renderTestimonials();
  populateContactLinks();

  // 4. Initialize Interactive Behaviors
  initPhotoLightbox();
  initVideoLightbox();
  init3DTilt();
  initBookingForm();
  initScrollAnimations();
  initCounters();
});

/* -------------------------------------------------------------------------- */
/* 1. AMBIENT STAGE LIGHTING PARTICLES (Golden Bokeh Dust)                     */
/* -------------------------------------------------------------------------- */
function initAmbientParticles() {
  const canvas = document.getElementById('ambientCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particleCount = window.innerWidth < 768 ? 28 : 55;
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.2 + 0.6,
      vx: (Math.random() - 0.5) * 0.35,
      vy: -Math.random() * 0.45 - 0.15,
      alpha: Math.random() * 0.5 + 0.2,
      pulse: Math.random() * 0.02 + 0.01,
      color: Math.random() > 0.4 ? '#D4AF37' : '#FFF3D1'
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.alpha += Math.sin(Date.now() * p.pulse * 0.05) * 0.01;

      if (p.y < -10) {
        p.y = height + 10;
        p.x = Math.random() * width;
      }
      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;

      ctx.save();
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.max(0.1, Math.min(0.7, p.alpha));
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#D4AF37';
      ctx.fill();
      ctx.restore();
    }

    requestAnimationFrame(render);
  }

  render();
}

/* -------------------------------------------------------------------------- */
/* 2. NAVIGATION, STICKY HEADER & MOBILE DRAWER                               */
/* -------------------------------------------------------------------------- */
function initNavigation() {
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.mobile-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-link');
  const backToTopBtn = document.querySelector('.back-to-top');

  // Sticky Header on Scroll
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      header?.classList.add('scrolled');
      backToTopBtn?.classList.add('visible');
    } else {
      header?.classList.remove('scrolled');
      backToTopBtn?.classList.remove('visible');
    }
    updateActiveNavLink();
  }, { passive: true });

  // Mobile Drawer Toggle
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('active');
      menuToggle.classList.toggle('open', isOpen);
      menuToggle.setAttribute('aria-expanded', isOpen);
      document.body.classList.toggle('no-scroll', isOpen);
    });

    // Close mobile nav when clicking a link
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('no-scroll');
      });
    });
  }

  // Smooth Scroll with Header Offset
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#') && targetId.length > 1) {
        e.preventDefault();
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          const headerHeight = header ? header.offsetHeight : 80;
          const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight + 10;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Back to Top Button
  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Active Link Spy
  function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 200;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
}

/* -------------------------------------------------------------------------- */
/* 3. DYNAMIC CONTENT RENDERING                                               */
/* -------------------------------------------------------------------------- */
function renderHeroStats() {
  const container = document.getElementById('heroStatsContainer');
  if (!container || !window.PORTFOLIO_CONFIG?.brand?.stats) return;

  const stats = window.PORTFOLIO_CONFIG.brand.stats;
  container.innerHTML = stats.map(stat => `
    <div class="stat-pill">
      <span class="stat-num" data-target="${stat.number}">${stat.number}</span>
      <span class="stat-lbl">${stat.label}</span>
    </div>
  `).join('');
}

// Global active photo gallery list for lightbox
let currentPhotoList = [];
let activePhotoIndex = 0;

function renderPhotoGallery() {
  const galleryGrid = document.getElementById('photoGalleryGrid');
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  if (!galleryGrid || !window.PORTFOLIO_CONFIG?.photos) return;

  const photos = window.PORTFOLIO_CONFIG.photos;
  currentPhotoList = photos;

  function displayPhotos(category = 'all') {
    const filtered = category === 'all' 
      ? photos 
      : photos.filter(p => p.category.toLowerCase() === category.toLowerCase());
    
    currentPhotoList = filtered;

    galleryGrid.innerHTML = filtered.map((photo, index) => `
      <div class="photo-card ${photo.aspect || 'tall'}" data-index="${index}" data-category="${photo.category}">
        <div class="photo-card-inner">
          <img 
            src="${photo.image}" 
            onerror="this.onerror=null; this.src='${photo.fallback}';" 
            alt="${photo.title} - Manisha Subudhi" 
            loading="lazy"
            class="photo-card-img"
          />
          <div class="photo-overlay">
            <span class="photo-category-badge">${photo.categoryLabel}</span>
            <h4 class="photo-title">${photo.title}</h4>
            <p class="photo-meta"><i class="fas fa-map-marker-alt"></i> ${photo.location}</p>
            <button class="photo-view-btn" aria-label="View photo in fullscreen">
              <i class="fas fa-expand-alt"></i> View Photo
            </button>
          </div>
        </div>
      </div>
    `).join('');

    // Attach click events for lightbox
    galleryGrid.querySelectorAll('.photo-card').forEach(card => {
      card.addEventListener('click', () => {
        const idx = parseInt(card.getAttribute('data-index'), 10);
        openPhotoLightbox(idx);
      });
    });
  }

  // Initial render
  displayPhotos('all');

  // Filter Buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      displayPhotos(cat);
    });
  });
}

// Video Portfolio
let currentVideoList = [];
function renderVideoPortfolio() {
  const videoGrid = document.getElementById('videoPortfolioGrid');
  const videoFilterBtns = document.querySelectorAll('.video-filter-btn');
  if (!videoGrid || !window.PORTFOLIO_CONFIG?.videos) return;

  const videos = window.PORTFOLIO_CONFIG.videos;
  currentVideoList = videos;

  function displayVideos(category = 'all') {
    const filtered = category === 'all'
      ? videos
      : videos.filter(v => v.category.toLowerCase() === category.toLowerCase());

    currentVideoList = filtered;

    videoGrid.innerHTML = filtered.map((video, index) => `
      <div class="video-card" data-video-index="${index}">
        <div class="video-thumb-wrap">
          <img 
            src="${video.thumbnail}" 
            onerror="this.onerror=null; this.src='${video.thumbnailFallback}';" 
            alt="${video.title} - Manisha Subudhi" 
            loading="lazy"
            class="video-thumb"
          />
          <div class="video-play-overlay">
            <div class="play-button-pulse">
              <i class="fas fa-play"></i>
            </div>
            <span class="video-duration">${video.duration}</span>
          </div>
          <span class="video-badge">${video.categoryLabel}</span>
        </div>
        <div class="video-info">
          <h4 class="video-title">${video.title}</h4>
          <p class="video-desc">${video.description}</p>
          <div class="video-card-footer">
            <span class="video-action-link">
              <i class="fas fa-play-circle"></i> Watch Video <i class="fas fa-arrow-right"></i>
            </span>
            <a href="https://www.instagram.com/anchor_manishasubudhi?srtk=MW56YnZxYjMyN3g5bA==" target="_blank" rel="noopener noreferrer" class="video-ig-tag" onclick="event.stopPropagation();" title="View live event reels on Instagram">
              <i class="fab fa-instagram"></i> Live Reels
            </a>
          </div>
        </div>
      </div>
    `).join('');

    // Attach click event for video modal
    videoGrid.querySelectorAll('.video-card').forEach(card => {
      card.addEventListener('click', () => {
        const idx = parseInt(card.getAttribute('data-video-index'), 10);
        openVideoLightbox(filtered[idx]);
      });
    });
  }

  displayVideos('all');

  videoFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      videoFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-video-filter');
      displayVideos(cat);
    });
  });
}

function renderMoments() {
  const container = document.getElementById('momentsGrid');
  if (!container || !window.PORTFOLIO_CONFIG?.moments) return;

  const moments = window.PORTFOLIO_CONFIG.moments;
  container.innerHTML = moments.map(m => `
    <div class="moment-card">
      <div class="moment-img-wrap">
        <img 
          src="${m.image}" 
          onerror="this.onerror=null; this.src='${m.fallback}';" 
          alt="${m.title}" 
          loading="lazy"
        />
        <div class="moment-gradient-overlay"></div>
        <span class="moment-tag">${m.tag}</span>
      </div>
      <div class="moment-content">
        <h3 class="moment-title">“${m.title}”</h3>
        <p class="moment-subtitle">${m.subtitle}</p>
        <p class="moment-quote">${m.quote}</p>
      </div>
    </div>
  `).join('');
}

function renderTestimonials() {
  const container = document.getElementById('testimonialsGrid');
  if (!container || !window.PORTFOLIO_CONFIG?.testimonials) return;

  const testimonials = window.PORTFOLIO_CONFIG.testimonials;
  container.innerHTML = testimonials.map(t => `
    <div class="testimonial-card">
      <div class="testimonial-header">
        <div class="stars">
          ${'★'.repeat(t.rating)}
        </div>
        <span class="testimonial-event">${t.eventType}</span>
      </div>
      <p class="testimonial-text">“${t.text}”</p>
      <div class="testimonial-footer">
        <div class="client-avatar-badge">${t.name.charAt(0)}</div>
        <div class="client-details">
          <h4 class="client-name">${t.name}</h4>
          <span class="client-role">${t.role} • ${t.date}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function populateContactLinks() {
  const brand = window.PORTFOLIO_CONFIG?.brand;
  if (!brand) return;

  // Phone links
  document.querySelectorAll('.js-phone-link').forEach(el => {
    el.setAttribute('href', `tel:+91${brand.phone}`);
    if (el.classList.contains('js-phone-text')) {
      el.textContent = brand.phoneDisplay;
    }
  });

  // WhatsApp links
  const defaultWa = `https://wa.me/91${brand.phone}?text=${encodeURIComponent(brand.whatsappDefaultMessage)}`;
  document.querySelectorAll('.js-whatsapp-link').forEach(el => {
    el.setAttribute('href', defaultWa);
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener noreferrer');
  });

  // Email links
  document.querySelectorAll('.js-email-link').forEach(el => {
    el.setAttribute('href', `mailto:${brand.email}?subject=Anchoring%20Inquiry%20for%20Upcoming%20Event`);
    if (el.classList.contains('js-email-text')) {
      el.textContent = brand.email;
    }
  });

  // Instagram links
  document.querySelectorAll('.js-instagram-link').forEach(el => {
    el.setAttribute('href', brand.instagram);
    if (el.classList.contains('js-instagram-text')) {
      el.textContent = brand.instagramDisplay;
    }
  });

  // Location display
  document.querySelectorAll('.js-location-text').forEach(el => {
    el.textContent = brand.location;
  });
}

/* -------------------------------------------------------------------------- */
/* 4. PHOTO LIGHTBOX MODAL                                                    */
/* -------------------------------------------------------------------------- */
let photoModal, lightboxImg, lightboxTitle, lightboxMeta, lightboxCounter;

function initPhotoLightbox() {
  photoModal = document.getElementById('photoLightboxModal');
  if (!photoModal) return;

  lightboxImg = photoModal.querySelector('.lightbox-image');
  lightboxTitle = photoModal.querySelector('.lightbox-caption-title');
  lightboxMeta = photoModal.querySelector('.lightbox-caption-meta');
  lightboxCounter = photoModal.querySelector('.lightbox-counter');

  const closeBtn = photoModal.querySelector('.lightbox-close-btn');
  const prevBtn = photoModal.querySelector('.lightbox-prev-btn');
  const nextBtn = photoModal.querySelector('.lightbox-next-btn');

  closeBtn?.addEventListener('click', closePhotoLightbox);
  prevBtn?.addEventListener('click', showPrevPhoto);
  nextBtn?.addEventListener('click', showNextPhoto);

  // Background overlay click closes lightbox
  photoModal.addEventListener('click', (e) => {
    if (e.target === photoModal || e.target.classList.contains('lightbox-backdrop')) {
      closePhotoLightbox();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!photoModal.classList.contains('active')) return;
    if (e.key === 'Escape') closePhotoLightbox();
    if (e.key === 'ArrowLeft') showPrevPhoto();
    if (e.key === 'ArrowRight') showNextPhoto();
  });

  // Touch Swipe on Mobile
  let touchStartX = 0;
  let touchEndX = 0;
  photoModal.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  photoModal.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) showNextPhoto();
    if (touchEndX - touchStartX > 50) showPrevPhoto();
  }, { passive: true });
}

function openPhotoLightbox(index) {
  if (!currentPhotoList || currentPhotoList.length === 0) return;
  activePhotoIndex = (index + currentPhotoList.length) % currentPhotoList.length;
  updateLightboxContent();
  photoModal.classList.add('active');
  document.body.classList.add('no-scroll');
}

function closePhotoLightbox() {
  photoModal?.classList.remove('active');
  document.body.classList.remove('no-scroll');
}

function showPrevPhoto() {
  if (!currentPhotoList || currentPhotoList.length === 0) return;
  activePhotoIndex = (activePhotoIndex - 1 + currentPhotoList.length) % currentPhotoList.length;
  updateLightboxContent();
}

function showNextPhoto() {
  if (!currentPhotoList || currentPhotoList.length === 0) return;
  activePhotoIndex = (activePhotoIndex + 1) % currentPhotoList.length;
  updateLightboxContent();
}

function updateLightboxContent() {
  const photo = currentPhotoList[activePhotoIndex];
  if (!photo) return;

  lightboxImg.classList.add('fade-switch');
  
  // Set fallback image handling
  lightboxImg.onerror = function() {
    this.onerror = null;
    this.src = photo.fallback;
  };
  lightboxImg.src = photo.image;
  lightboxImg.alt = photo.title;

  setTimeout(() => {
    lightboxImg.classList.remove('fade-switch');
  }, 200);

  if (lightboxTitle) lightboxTitle.textContent = photo.title;
  if (lightboxMeta) lightboxMeta.innerHTML = `<span class="badge-gold">${photo.categoryLabel}</span> • <i class="fas fa-map-marker-alt"></i> ${photo.location} — ${photo.description}`;
  if (lightboxCounter) lightboxCounter.textContent = `${activePhotoIndex + 1} / ${currentPhotoList.length}`;
}

/* -------------------------------------------------------------------------- */
/* 5. VIDEO LIGHTBOX MODAL (Supports YouTube, Vimeo, Local MP4)               */
/* -------------------------------------------------------------------------- */
let videoModal, videoContainer, videoModalTitle, videoModalDesc;

function initVideoLightbox() {
  videoModal = document.getElementById('videoLightboxModal');
  if (!videoModal) return;

  videoContainer = videoModal.querySelector('.video-frame-container');
  videoModalTitle = videoModal.querySelector('.video-modal-title');
  videoModalDesc = videoModal.querySelector('.video-modal-desc');

  const closeBtn = videoModal.querySelector('.video-modal-close-btn');
  closeBtn?.addEventListener('click', closeVideoLightbox);

  videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal || e.target.classList.contains('video-modal-backdrop')) {
      closeVideoLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (videoModal.classList.contains('active') && e.key === 'Escape') {
      closeVideoLightbox();
    }
  });
}

function openVideoLightbox(video) {
  if (!videoModal || !videoContainer) return;

  if (videoModalTitle) videoModalTitle.textContent = video.title;
  if (videoModalDesc) {
    videoModalDesc.innerHTML = `
      <p style="margin-bottom: 16px;">${video.description}</p>
      <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center; margin-top: 14px;">
        <a href="https://www.instagram.com/anchor_manishasubudhi?srtk=MW56YnZxYjMyN3g5bA==" target="_blank" rel="noopener noreferrer" class="btn btn-outline-gold btn-sm">
          <i class="fab fa-instagram"></i> Watch More Live Reels on Instagram
        </a>
        <a href="https://wa.me/919693316301?text=Hello%20Manisha%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20event%20or%20professional%20collaboration." target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm">
          <i class="fab fa-whatsapp"></i> Inquire for This Event Format
        </a>
      </div>
    `;
  }

  // Build responsive embed based on type
  if (video.type === 'youtube') {
    // If user provided a sample or full URL/ID
    const vidId = video.videoId || 'dQw4w9WgXcQ';
    videoContainer.innerHTML = `
      <iframe 
        src="https://www.youtube.com/embed/${vidId}?autoplay=1&rel=0&modestbranding=1" 
        title="${video.title}" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    `;
  } else if (video.type === 'vimeo') {
    videoContainer.innerHTML = `
      <iframe 
        src="https://player.vimeo.com/video/${video.videoId}?autoplay=1" 
        title="${video.title}" 
        frameborder="0" 
        allow="autoplay; fullscreen; picture-in-picture" 
        allowfullscreen>
      </iframe>
    `;
  } else if (video.type === 'local') {
    videoContainer.innerHTML = `
      <video controls autoplay playsinline class="local-player">
        <source src="${video.videoUrl}" type="video/mp4">
        Your browser does not support HTML5 video.
      </video>
    `;
  }

  videoModal.classList.add('active');
  document.body.classList.add('no-scroll');
}

function closeVideoLightbox() {
  if (!videoModal) return;
  videoModal.classList.remove('active');
  if (videoContainer) videoContainer.innerHTML = ''; // Stops playback immediately
  document.body.classList.remove('no-scroll');
}

/* -------------------------------------------------------------------------- */
/* 6. 3D TILT EFFECT & SPATIAL PARALLAX (Hero & Strength Cards)              */
/* -------------------------------------------------------------------------- */
function init3DTilt() {
  const tiltCards = document.querySelectorAll('[data-tilt]');
  if (tiltCards.length === 0) return;

  tiltCards.forEach(card => {
    let bounds;
    const parentWrap = card.closest('.hero-3d-wrap');
    const badges = parentWrap ? parentWrap.querySelectorAll('.floating-badge') : [];
    
    function mouseMove(e) {
      bounds = card.getBoundingClientRect();
      const mouseX = e.clientX - bounds.left;
      const mouseY = e.clientY - bounds.top;
      const xPct = mouseX / bounds.width - 0.5;
      const yPct = mouseY / bounds.height - 0.5;

      const maxTilt = parseFloat(card.getAttribute('data-tilt-max') || '15');
      const rotateX = (-yPct * maxTilt).toFixed(2);
      const rotateY = (xPct * maxTilt).toFixed(2);

      card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;

      // Subtle dynamic specular shine
      const glare = card.querySelector('.tilt-glare');
      if (glare) {
        glare.style.transform = `translate(${xPct * 60}px, ${yPct * 60}px)`;
        glare.style.opacity = '0.45';
      }

      // Parallax shift on floating badges for layered 3D depth
      badges.forEach((badge, idx) => {
        const factor = (idx + 1) * 8;
        const shiftX = (xPct * factor).toFixed(1);
        const shiftY = (yPct * factor).toFixed(1);
        const zDepth = 45 + (idx * 10);
        badge.style.transform = `translate(${shiftX}px, ${shiftY}px) translateZ(${zDepth}px)`;
      });
    }

    function mouseLeave() {
      card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      const glare = card.querySelector('.tilt-glare');
      if (glare) glare.style.opacity = '0';

      badges.forEach((badge, idx) => {
        const zDepth = 45 + (idx * 10);
        badge.style.transform = `translate(0px, 0px) translateZ(${zDepth}px)`;
      });
    }

    // Attach to parent container if available for smoother tracking
    const triggerTarget = parentWrap || card;
    triggerTarget.addEventListener('mousemove', mouseMove);
    triggerTarget.addEventListener('mouseleave', mouseLeave);
  });
}

/* -------------------------------------------------------------------------- */
/* 7. BOOKING FORM & INSTANT WHATSAPP INTEGRATION                             */
/* -------------------------------------------------------------------------- */
function initBookingForm() {
  const form = document.getElementById('bookingForm');
  const whatsappSubmitBtn = document.getElementById('btnSubmitWhatsApp');
  const emailSubmitBtn = document.getElementById('btnSubmitEmail');
  const brand = window.PORTFOLIO_CONFIG?.brand || {};

  if (!form) return;

  // Set min date to today
  const dateInput = form.querySelector('#eventDate');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  function getFormData() {
    const clientName = form.querySelector('#clientName')?.value.trim();
    const clientPhone = form.querySelector('#clientPhone')?.value.trim();
    const clientEmail = form.querySelector('#clientEmail')?.value.trim();
    const eventType = form.querySelector('#eventType')?.value;
    const eventDate = form.querySelector('#eventDate')?.value;
    const eventLocation = form.querySelector('#eventLocation')?.value.trim();
    const guestCount = form.querySelector('#guestCount')?.value.trim();
    const eventDetails = form.querySelector('#eventDetails')?.value.trim();

    return { clientName, clientPhone, clientEmail, eventType, eventDate, eventLocation, guestCount, eventDetails };
  }

  function validateBasic(data) {
    if (!data.clientName) {
      showToast('Please enter your full name.', 'warning');
      form.querySelector('#clientName')?.focus();
      return false;
    }
    if (!data.clientPhone) {
      showToast('Please enter your contact phone number.', 'warning');
      form.querySelector('#clientPhone')?.focus();
      return false;
    }
    if (!data.eventType) {
      showToast('Please select your event type.', 'warning');
      form.querySelector('#eventType')?.focus();
      return false;
    }
    return true;
  }

  // Handle WhatsApp Submission: ALWAYS opens WhatsApp directly on tap
  whatsappSubmitBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    const data = getFormData();
    let waUrl;

    if (data.clientName || data.eventType) {
      let message = `Hello Manisha, I came across your portfolio and would like to discuss an event or professional collaboration.\n\n`;
      message += `*Event Collaboration Details:*\n`;
      if (data.clientName) message += `👤 *Name:* ${data.clientName}\n`;
      if (data.clientPhone) message += `📞 *Phone:* ${data.clientPhone}\n`;
      if (data.clientEmail) message += `✉️ *Email:* ${data.clientEmail}\n`;
      if (data.eventType) message += `💍 *Event Type:* ${data.eventType}\n`;
      if (data.eventDate) message += `📅 *Date:* ${data.eventDate}\n`;
      if (data.eventLocation) message += `📍 *City / Venue:* ${data.eventLocation}\n`;
      if (data.guestCount) message += `👥 *Expected Guests:* ${data.guestCount}\n`;
      if (data.eventDetails) message += `💬 *Notes:* ${data.eventDetails}\n`;
      waUrl = `https://wa.me/91${brand.phone || '9693316301'}?text=${encodeURIComponent(message)}`;
      if (data.clientName) showSuccessModal(data.clientName);
    } else {
      waUrl = `https://wa.me/91${brand.phone || '9693316301'}?text=${encodeURIComponent(brand.whatsappDefaultMessage)}`;
    }
    window.open(waUrl, '_blank');
  });

  // Handle Email Submission
  emailSubmitBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    const data = getFormData();
    if (!validateBasic(data)) return;

    const subject = encodeURIComponent(`Event Anchoring Inquiry: ${data.eventType} - ${data.clientName}`);
    let body = `Dear Manisha Subudhi,\n\nI would like to inquire regarding event anchoring services.\n\n`;
    body += `Name: ${data.clientName}\n`;
    body += `Phone: ${data.clientPhone}\n`;
    body += `Email: ${data.clientEmail || 'N/A'}\n`;
    body += `Event Type: ${data.eventType}\n`;
    body += `Event Date: ${data.eventDate || 'To be decided'}\n`;
    body += `Venue/City: ${data.eventLocation || 'Jamshedpur / Pan-India'}\n`;
    body += `Estimated Guests: ${data.guestCount || 'N/A'}\n\n`;
    body += `Event Requirements:\n${data.eventDetails || 'Looking forward to discussing further.'}\n\n`;
    body += `Warm regards,\n${data.clientName}`;

    const mailtoUrl = `mailto:${brand.email || 'manishasubudhijsr@gmail.com'}?subject=${subject}&body=${encodeURIComponent(body)}`;
    showSuccessModal(data.clientName);
    window.location.href = mailtoUrl;
  });
}

function showSuccessModal(name) {
  const modal = document.getElementById('successBookingModal');
  if (!modal) return;
  const nameEl = modal.querySelector('.success-client-name');
  if (nameEl && name) nameEl.textContent = name;
  modal.classList.add('active');

  const closeBtn = modal.querySelector('.success-modal-close-btn');
  closeBtn?.addEventListener('click', () => modal.classList.remove('active'), { once: true });
}

/* -------------------------------------------------------------------------- */
/* 8. ANIMATED COUNTERS & SCROLL REVEALS                                      */
/* -------------------------------------------------------------------------- */
function initCounters() {
  const statElements = document.querySelectorAll('.stat-num');
  if (statElements.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statElements.forEach(el => observer.observe(el));

  function animateCounter(el) {
    const targetVal = el.getAttribute('data-target') || el.innerText;
    const match = targetVal.match(/(\d+)(.*)/);
    if (!match) return;

    const targetNumber = parseInt(match[1], 10);
    const suffix = match[2];
    let start = 0;
    const duration = 1600;
    const startTime = performance.now();

    function update(time) {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const current = Math.floor((1 - Math.pow(2, -10 * progress)) * targetNumber);
      el.textContent = `${current}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = targetVal;
      }
    }

    requestAnimationFrame(update);
  }
}

function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.reveal-on-scroll');
  if (animatedElements.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  animatedElements.forEach(el => observer.observe(el));
}

/* -------------------------------------------------------------------------- */
/* 9. TOAST NOTIFICATION UTILITY                                              */
/* -------------------------------------------------------------------------- */
function showToast(message, type = 'info') {
  let toastContainer = document.getElementById('siteToastContainer');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'siteToastContainer';
    toastContainer.className = 'site-toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = `site-toast site-toast-${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${type === 'warning' ? '⚠️' : '✨'}</span>
    <span class="toast-msg">${message}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('show');
  }, 10);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

