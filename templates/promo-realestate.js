// ─────────────────────────────────────────────
//  TEMPLATE: Ultra-Luxury Real Estate
//  Category: Real Estate / Promotion
//  Layout:   editorial-split-grid
// ─────────────────────────────────────────────

export default {
  id: 'promo-realestate',
  name: 'Architectural Real Estate',
  category: 'Real Estate',
  layout: 'split',
  tags: ['real estate', 'luxury', 'property', 'architecture', 'editorial'],

  // Deeply detailed default state
  defaults: {
    status: 'EXCLUSIVE LISTING',
    price: '$14,500,000',
    title: 'THE GLASS PAVILION',
    address: '90210 Loma Vista Dr, Beverly Hills, CA',
    desc: 'An architectural masterpiece of glass and steel floating above the city. Features a zero-edge infinity pool, imported Italian marble, and unobstructed panoramic views.',
    beds: '6',
    baths: '8.5',
    sqft: '12,400',
    agentName: 'ELEANOR VANCE',
    brokerage: 'VANCE & CO. INTERNATIONAL REALTY',
    bg: '#0a0a0b',         // Obsidian Black
    surface: '#121214',    // Elevated Dark Surface
    accent: '#c9a96e',     // Architectural Gold/Brass
    textMain: '#ffffff',   // Pure White
    textMuted: '#8a8a8e',  // Muted Silver
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
  },

  // Extensive CSS for precise editorial alignment and complex styling
  css: `
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Manrope:wght@300;400;500;600;700&display=swap');
    
    .tpl-property {
      /* Scoped CSS Variables for pristine color management */
      --bg-base: var(--sys-bg);
      --bg-surface: var(--sys-surface);
      --gold: var(--sys-accent);
      --gold-dim: color-mix(in srgb, var(--sys-accent) 25%, transparent);
      --text-h: var(--sys-text);
      --text-p: var(--sys-muted);

      width: 100%; height: 100%; box-sizing: border-box;
      background-color: var(--bg-base);
      font-family: 'Manrope', sans-serif;
      padding: 32px;
      display: flex; align-items: center; justify-content: center;
    }

    /* Outer Wrapper with subtle border */
    .prop-wrapper {
      width: 100%; height: 100%;
      display: grid;
      grid-template-columns: 1.1fr 0.9fr; /* 55% Image, 45% Content */
      background: var(--bg-surface);
      border: 1px solid rgba(255, 255, 255, 0.05);
      box-shadow: 0 30px 60px rgba(0,0,0,0.5);
      position: relative; overflow: hidden;
    }

    /* =========================================
       LEFT SIDE: VISUALS
       ========================================= */
    .prop-visual {
      position: relative; height: 100%;
      border-right: 1px solid var(--gold-dim);
    }
    
    .prop-img-wrap {
      position: absolute; inset: 16px; /* Inner frame gap */
      overflow: hidden;
    }
    
    .prop-img {
      width: 100%; height: 100%; object-fit: cover;
      filter: contrast(1.1) brightness(0.9);
    }

    /* Vertical Status Badge */
    .prop-badge {
      position: absolute; left: 32px; top: 32px;
      background: var(--gold); color: #000;
      padding: 10px 24px; font-size: 10px; font-weight: 700;
      letter-spacing: 3px; text-transform: uppercase;
      writing-mode: vertical-rl; transform: rotate(180deg);
      box-shadow: -5px 0 15px rgba(0,0,0,0.3);
    }

    /* =========================================
       RIGHT SIDE: EDITORIAL CONTENT
       ========================================= */
    .prop-info {
      padding: 48px 40px;
      display: flex; flex-direction: column;
      justify-content: center; position: relative;
    }

    /* Geometric Background Accents */
    .prop-info::before {
      content: ''; position: absolute; top: 0; right: 40px;
      width: 1px; height: 100%; background: rgba(255,255,255,0.03);
    }

    /* Header: Price & Status */
    .prop-price-wrap {
      display: flex; align-items: flex-end; justify-content: space-between;
      margin-bottom: 24px;
    }
    .prop-price {
      font-family: 'Cinzel', serif; font-size: 36px; font-weight: 500;
      color: var(--gold); line-height: 1; margin: 0;
    }

    /* Title & Address */
    .prop-title {
      font-family: 'Cinzel', serif; font-size: 44px; font-weight: 600;
      color: var(--text-h); line-height: 1.05; letter-spacing: -0.5px;
      margin: 0 0 12px 0;
    }
    .prop-address {
      font-size: 12px; font-weight: 500; letter-spacing: 1.5px;
      color: var(--text-p); text-transform: uppercase;
      display: flex; align-items: center; gap: 8px;
    }

    /* Intricate Divider Line */
    .prop-divider {
      width: 100%; height: 1px; background: var(--gold-dim);
      margin: 32px 0; position: relative;
    }
    .prop-divider::after {
      content: ''; position: absolute; left: 0; top: -3px;
      width: 40px; height: 7px; background: var(--gold);
    }

    /* Description */
    .prop-desc {
      font-size: 13px; line-height: 1.7; color: var(--text-p);
      margin: 0 0 40px 0; font-weight: 300; max-width: 95%;
    }

    /* Perfectly Aligned Specification Grid (Beds, Baths, Sqft) */
    .prop-specs {
      display: grid; grid-template-columns: repeat(3, 1fr);
      border-top: 1px solid rgba(255,255,255,0.1);
      border-bottom: 1px solid rgba(255,255,255,0.1);
      margin-bottom: 40px;
    }
    .prop-spec-item {
      padding: 16px 0; display: flex; flex-direction: column; gap: 4px;
      border-right: 1px solid rgba(255,255,255,0.05);
    }
    .prop-spec-item:last-child { border-right: none; padding-left: 24px; }
    .prop-spec-item:nth-child(2) { padding-left: 24px; }
    
    .prop-spec-val {
      font-family: 'Cinzel', serif; font-size: 24px; font-weight: 600;
      color: var(--text-h); line-height: 1;
    }
    .prop-spec-lbl {
      font-size: 10px; font-weight: 600; letter-spacing: 2px;
      color: var(--gold); text-transform: uppercase;
    }

    /* Agent / Footer Area */
    .prop-footer {
      margin-top: auto; display: flex; align-items: center; justify-content: space-between;
    }
    .prop-agent {
      display: flex; flex-direction: column; gap: 4px;
    }
    .prop-agent-name {
      font-size: 11px; font-weight: 700; letter-spacing: 2px;
      color: var(--text-h); text-transform: uppercase;
    }
    .prop-agent-broker {
      font-size: 9px; font-weight: 500; letter-spacing: 1px;
      color: var(--text-p); text-transform: uppercase;
    }
    
    /* Call to Action Button */
    .prop-cta {
      border: 1px solid var(--gold); padding: 12px 24px;
      font-size: 10px; font-weight: 700; letter-spacing: 2px;
      color: var(--gold); text-transform: uppercase;
      background: transparent;
    }
  `,

  render(s) {
    return `
      <div class="tpl-property" style="
        --sys-bg: ${s.bg}; 
        --sys-surface: ${s.surface}; 
        --sys-accent: ${s.accent};
        --sys-text: ${s.textMain};
        --sys-muted: ${s.textMuted};
      ">
        <div class="prop-wrapper">
          
          <div class="prop-visual">
            <div class="prop-img-wrap">
              <img src="${s.img}" class="prop-img" alt="Property View" />
            </div>
            <div class="prop-badge">${s.status}</div>
          </div>
          
          <div class="prop-info">
            
            <div class="prop-price-wrap">
              <h2 class="prop-price">${s.price}</h2>
            </div>
            
            <h1 class="prop-title">${s.title}</h1>
            <div class="prop-address">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--sys-accent)" stroke-width="2" stroke-linecap="square"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              ${s.address}
            </div>
            
            <div class="prop-divider"></div>
            
            <p class="prop-desc">${s.desc}</p>
            
            <div class="prop-specs">
              <div class="prop-spec-item">
                <span class="prop-spec-val">${s.beds}</span>
                <span class="prop-spec-lbl">Bedrooms</span>
              </div>
              <div class="prop-spec-item">
                <span class="prop-spec-val">${s.baths}</span>
                <span class="prop-spec-lbl">Bathrooms</span>
              </div>
              <div class="prop-spec-item">
                <span class="prop-spec-val">${s.sqft}</span>
                <span class="prop-spec-lbl">Square Feet</span>
              </div>
            </div>
            
            <div class="prop-footer">
              <div class="prop-agent">
                <span class="prop-agent-name">${s.agentName}</span>
                <span class="prop-agent-broker">${s.brokerage}</span>
              </div>
              <div class="prop-cta">VIEW GALLERY</div>
            </div>
            
          </div>
        </div>
      </div>`;
  }
};