// ─────────────────────────────────────────────
//  TEMPLATE: Structured Editorial Magazine
//  Category: Fashion / Promotion
//  Layout:   strict-grid
// ─────────────────────────────────────────────

export default {
  id: 'promo-editorial',
  name: 'Structured Editorial',
  category: 'Promotion',
  layout: 'grid',
  tags: ['editorial', 'clean', 'aligned', 'fashion', 'magazine', 'minimal'],

  defaults: {
    brand: 'MAISON NOIR.',
    issue: 'ISSUE NO. 24',
    subhead: 'AUTUMN / WINTER COLLECTION',
    headline: 'The Art of Simplicity.',
    desc: 'Discover the new standard of modern luxury. Meticulously tailored garments crafted from the finest sustainably sourced materials, designed for the contemporary minimalist.',
    readTime: '04 MIN READ',
    cta: 'EXPLORE COLLECTION',
    bg: '#F9F8F6',         // Warm Kinfolk-style paper white
    textMain: '#111111',   // Deep charcoal/off-black
    textMuted: '#666666',  // Readable medium gray
    accent: '#B89B72',     // Elegant camel/gold tone
    img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80',
  },

  css: `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap');
    
    .tpl-edit {
      /* Setup Variables */
      --bg: var(--sys-bg);
      --text: var(--sys-text);
      --muted: var(--sys-muted);
      --accent: var(--sys-accent);
      
      width: 100%; height: 100%; box-sizing: border-box;
      background-color: var(--bg); color: var(--text);
      padding: 48px;
      
      /* The Master Grid: Perfectly divides the canvas */
      display: grid;
      grid-template-columns: 1fr 1.2fr; /* Left text column, right image column */
      gap: 48px; /* Strict, even spacing between columns */
    }

    /* =========================================
       LEFT COLUMN: STRICTLY ALIGNED TEXT
       ========================================= */
    .edit-content {
      display: flex; flex-direction: column; justify-content: space-between;
      height: 100%;
    }

    /* --- TOP SECTION --- */
    .edit-header {
      display: flex; flex-direction: column; gap: 16px;
      border-bottom: 1px solid rgba(0,0,0,0.1);
      padding-bottom: 24px;
    }
    .edit-brand {
      font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 600;
      letter-spacing: 2px; text-transform: uppercase;
    }
    .edit-issue {
      font-family: 'Inter', sans-serif; font-size: 10px; font-weight: 500;
      letter-spacing: 1px; color: var(--muted);
    }

    /* --- MIDDLE SECTION --- */
    .edit-body {
      display: flex; flex-direction: column; gap: 20px;
      margin: auto 0; /* Vertically centers the text block */
    }
    .edit-subhead {
      font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 600;
      letter-spacing: 3px; color: var(--accent); text-transform: uppercase;
    }
    .edit-headline {
      font-family: 'Playfair Display', serif; font-size: 56px; line-height: 1.05;
      font-weight: 400; margin: 0; color: var(--text); letter-spacing: -1px;
    }
    .edit-desc {
      font-family: 'Inter', sans-serif; font-size: 14px; line-height: 1.7;
      color: var(--muted); margin: 0; font-weight: 300; max-width: 90%;
    }

    /* --- BOTTOM SECTION --- */
    .edit-footer {
      display: flex; align-items: center; justify-content: space-between;
      border-top: 1px solid rgba(0,0,0,0.1);
      padding-top: 24px;
    }
    .edit-cta {
      font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 600;
      letter-spacing: 2px; color: var(--text); text-transform: uppercase;
      display: flex; align-items: center; gap: 12px; cursor: default;
    }
    .edit-cta-line {
      width: 40px; height: 1px; background-color: var(--text);
      transition: width 0.3s ease;
    }
    .edit-read-time {
      font-family: 'Inter', sans-serif; font-size: 10px; font-weight: 500;
      letter-spacing: 1px; color: var(--muted); text-transform: uppercase;
    }

    /* =========================================
       RIGHT COLUMN: HARMONIOUS IMAGE
       ========================================= */
    .edit-visual {
      width: 100%; height: 100%;
      position: relative; overflow: hidden;
      border-radius: 4px; /* Slight softening of the image box */
    }
    .edit-img {
      width: 100%; height: 100%; object-fit: cover;
    }
    
    /* Subtle accent frame inside the image */
    .edit-visual::after {
      content: ''; position: absolute; inset: 16px;
      border: 1px solid rgba(255,255,255,0.3);
      pointer-events: none;
    }
  `,

  render(s) {
    return `
      <div class="tpl-edit" style="
        --sys-bg: ${s.bg}; 
        --sys-text: ${s.textMain}; 
        --sys-muted: ${s.textMuted};
        --sys-accent: ${s.accent};
      ">
        
        <div class="edit-content">
          
          <div class="edit-header">
            <div class="edit-brand">${s.brand}</div>
            <div class="edit-issue">${s.issue}</div>
          </div>
          
          <div class="edit-body">
            <div class="edit-subhead">${s.subhead}</div>
            <h1 class="edit-headline">${s.headline}</h1>
            <p class="edit-desc">${s.desc}</p>
          </div>
          
          <div class="edit-footer">
            <div class="edit-cta">
              ${s.cta}
              <div class="edit-cta-line"></div>
            </div>
            <div class="edit-read-time">${s.readTime}</div>
          </div>

        </div>

        <div class="edit-visual">
          <img class="edit-img" src="${s.img}" alt="Editorial Collection" />
        </div>

      </div>`;
  }
};