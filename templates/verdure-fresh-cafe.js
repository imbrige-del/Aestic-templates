// ═══════════════════════════════════════════════════════════════════
//  TEMPLATE 3: Verdure — Fresh / Organic Café Promo Poster
//  Category:   Café, Brunch, Health Food, Organic, Farm-to-Table
//  Style:      Warm cream background, deep botanical green accents,
//              editorial magazine layout, hand-drawn circle motif,
//              photo in organic blob shape, light and airy feel.
//  Best for:   Cafés, brunch spots, smoothie bars, organic markets,
//              health-food restaurants, seasonal menu launches
//  Sizes:      4:5 portrait (primary), 1:1, 9:16, 16:9
// ═══════════════════════════════════════════════════════════════════

export default {
  id: 'verdure-fresh-cafe',
  name: 'Verdure — Fresh Café Promo Poster',
  category: 'Café / Organic / Brunch',
  layout: 'promo-poster',
  tags: ['cafe', 'organic', 'brunch', 'fresh', 'light', 'cream', 'green', 'health', 'editorial', 'poster'],

  defaults: {
    season:         'Spring Menu',
    headlineLine1:  'Fresh From',
    headlineLine2:  'The Garden',

    subtext:        'Locally sourced · Seasonal ingredients · Zero waste kitchen',

    img:            'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=900&q=90',

    offerBadge:     'NEW',
    offerTitle:     'Brunch',
    offerSub:       'Every Saturday & Sunday',
    offerTime:      '9am — 3pm',

    contactLabel:   'Book a Table',
    contactPhone:   '+1 800 555 0142',
    ctaText:        'See Full Menu',

    brandName:      'Verdure',
    brandSub:       'Farm to Table · Est. 2017',

    accentGreen:    '#2d4a1e',
    bgCream:        '#f5f0e8',
  },

  css: `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,800;1,400;1,700&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

    .tpl-verdure {
      container-type: size;
      container-name: vd;
      width: 100%; height: 100%;
      position: relative;
      overflow: hidden;
      font-family: 'DM Sans', sans-serif;
      background: #f5f0e8;
    }

    /* ── Background: warm cream with paper texture ── */
    .vd-bg {
      position: absolute; inset: 0;
      background: linear-gradient(165deg, #f8f4ed 0%, #f2ede3 60%, #ede7d8 100%);
      z-index: 0;
    }

    /* ── Paper grain ── */
    .vd-grain {
      position: absolute; inset: 0; z-index: 1; opacity: 0.55;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='f'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23f)' opacity='0.08'/%3E%3C/svg%3E");
      background-size: 200px 200px;
      pointer-events: none;
    }

    /* ── Large decorative circle behind photo ── */
    .vd-circle {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -44%);
      width: clamp(200px, 68cqi, 520px);
      height: clamp(200px, 68cqi, 520px);
      border-radius: 50%;
      border: 1.5px solid rgba(45,74,30,0.18);
      z-index: 2;
      pointer-events: none;
    }
    .vd-circle-inner {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -44%);
      width: clamp(160px, 56cqi, 430px);
      height: clamp(160px, 56cqi, 430px);
      border-radius: 50%;
      border: 1px dashed rgba(45,74,30,0.12);
      z-index: 2;
      pointer-events: none;
    }

    /* ── Botanical leaf SVG watermark ── */
    .vd-leaf {
      position: absolute;
      z-index: 2;
      opacity: 0.07;
      pointer-events: none;
    }
    .vd-leaf--tl { top: -2cqb; left: -3cqi; width: clamp(80px, 22cqi, 160px); transform: rotate(-20deg); }
    .vd-leaf--br { bottom: 6cqb; right: -2cqi; width: clamp(60px, 18cqi, 130px); transform: rotate(160deg); }

    /* ── Shell ── */
    .vd-shell {
      position: relative; z-index: 3;
      width: 100%; height: 100%;
      display: flex; flex-direction: column;
    }

    /* ── Top bar ── */
    .vd-topbar {
      flex-shrink: 0;
      display: flex; justify-content: space-between; align-items: center;
      padding: clamp(14px, 3.5cqb, 30px) clamp(16px, 5cqi, 36px) 0;
      position: relative; z-index: 10;
    }
    .vd-brand-name {
      font-family: 'Playfair Display', serif;
      font-weight: 800; font-style: italic;
      font-size: clamp(16px, 4.5cqi, 30px);
      color: #2d4a1e;
      letter-spacing: -0.01em;
    }
    .vd-brand-sub {
      font-size: clamp(5px, 1.1cqi, 8px);
      font-weight: 300; letter-spacing: 0.22em;
      text-transform: uppercase;
      color: rgba(45,74,30,0.45);
      margin-top: 2px; display: block;
    }
    .vd-season-badge {
      font-size: clamp(6px, 1.3cqi, 9px);
      font-weight: 500; letter-spacing: 0.22em;
      text-transform: uppercase;
      color: #f5f0e8;
      background: #2d4a1e;
      padding: clamp(4px, 0.8cqb, 8px) clamp(10px, 2.5cqi, 18px);
      border-radius: 100px;
    }

    /* ── Headline ── */
    .vd-headline {
      flex-shrink: 0;
      padding: clamp(8px, 2cqb, 18px) clamp(16px, 5cqi, 36px) 0;
      position: relative; z-index: 10;
    }
    .vd-h1 {
      font-family: 'Playfair Display', serif;
      font-weight: 400; font-style: italic;
      font-size: clamp(16px, 5cqi, 36px);
      color: rgba(45,74,30,0.55);
      line-height: 1; margin: 0;
    }
    .vd-h2 {
      font-family: 'Playfair Display', serif;
      font-weight: 800;
      font-size: clamp(32px, 10.5cqi, 76px);
      color: #1a2e10;
      line-height: 0.95; margin: 0;
      letter-spacing: -0.02em;
    }

    /* ── Photo: organic blob shape ── */
    .vd-photo-wrap {
      flex: 1; min-height: 0;
      position: relative;
      display: flex; align-items: center; justify-content: center;
      z-index: 9;
      overflow: hidden;
    }
    .vd-photo-blob {
      position: relative;
      width: clamp(160px, 62cqi, 480px);
      height: clamp(140px, 55cqb, 430px);
      flex-shrink: 0;
      /* Organic blob clip */
      clip-path: ellipse(50% 50% at 50% 50%);
      border-radius: 60% 40% 55% 45% / 50% 60% 40% 50%;
    }
    .vd-photo-blob img {
      position: absolute; inset: 0;
      width: 100%; height: 100%;
      object-fit: cover; object-position: center 30%;
      display: block;
    }

    /* ── Offer strip: horizontal pill ── */
    .vd-offer {
      flex-shrink: 0;
      display: flex; align-items: center;
      gap: clamp(8px, 2cqi, 16px);
      margin: clamp(10px, 2.5cqb, 22px) clamp(16px, 5cqi, 36px) 0;
      background: #2d4a1e;
      border-radius: 100px;
      padding: clamp(8px, 1.8cqb, 16px) clamp(14px, 3.5cqi, 28px);
      position: relative; z-index: 10;
    }
    .vd-offer-badge {
      font-size: clamp(6px, 1.2cqi, 9px);
      font-weight: 700; letter-spacing: 0.25em;
      text-transform: uppercase; color: #2d4a1e;
      background: #c8e6b0;
      border-radius: 100px;
      padding: 3px 8px;
      flex-shrink: 0;
    }
    .vd-offer-content { display: flex; flex-direction: column; gap: 1px; flex: 1; min-width: 0; }
    .vd-offer-title {
      font-family: 'Playfair Display', serif;
      font-weight: 700; font-style: italic;
      font-size: clamp(14px, 4cqi, 26px);
      color: #f5f0e8; line-height: 1;
    }
    .vd-offer-sub {
      font-size: clamp(7px, 1.5cqi, 10px);
      font-weight: 300; letter-spacing: 0.12em;
      color: rgba(200,230,176,0.7); white-space: nowrap;
    }
    .vd-offer-time {
      font-family: 'Playfair Display', serif;
      font-weight: 700;
      font-size: clamp(14px, 4cqi, 26px);
      color: #c8e6b0; line-height: 1;
      flex-shrink: 0;
    }

    /* ── Bottom strip ── */
    .vd-bottom {
      flex-shrink: 0;
      display: flex; justify-content: space-between; align-items: center;
      padding: clamp(10px, 2cqb, 18px) clamp(16px, 5cqi, 36px) clamp(16px, 4cqb, 34px);
      position: relative; z-index: 10;
      gap: 8px;
    }

    .vd-contact { display: flex; align-items: center; gap: clamp(8px, 2cqi, 14px); min-width: 0; }
    .vd-contact-icon {
      flex-shrink: 0;
      width: clamp(26px, 6.5cqi, 40px); height: clamp(26px, 6.5cqi, 40px);
      border-radius: 50%; border: 1.5px solid rgba(45,74,30,0.3);
      display: flex; align-items: center; justify-content: center;
      background: rgba(45,74,30,0.06);
    }
    .vd-contact-icon svg { width: 42%; height: 42%; }
    .vd-contact-label {
      font-size: clamp(6px, 1.2cqi, 9px);
      font-weight: 300; letter-spacing: 0.18em;
      text-transform: uppercase; color: rgba(45,74,30,0.45); display: block;
    }
    .vd-contact-phone {
      font-family: 'DM Sans', sans-serif;
      font-size: clamp(10px, 2.6cqi, 18px);
      font-weight: 500; color: #1a2e10;
      letter-spacing: 0.02em; white-space: nowrap;
    }

    .vd-cta {
      display: inline-flex; align-items: center; gap: clamp(7px, 1.5cqi, 12px);
      background: #2d4a1e;
      border-radius: 100px;
      padding: clamp(7px, 1.4cqb, 13px) clamp(14px, 3.5cqi, 26px);
      cursor: pointer; flex-shrink: 0;
      transition: opacity 0.18s;
    }
    .vd-cta:hover { opacity: 0.85; }
    .vd-cta-text {
      font-family: 'DM Sans', sans-serif;
      font-size: clamp(9px, 2.1cqi, 13px);
      font-weight: 500; letter-spacing: 0.15em;
      text-transform: uppercase; color: #f5f0e8;
    }
    .vd-cta-dot {
      width: clamp(5px, 1.2cqi, 8px); height: clamp(5px, 1.2cqi, 8px);
      border-radius: 50%; background: #c8e6b0;
    }

    /* ── Subtext line ── */
    .vd-subtext {
      font-size: clamp(6px, 1.3cqi, 9px);
      font-weight: 300; letter-spacing: 0.18em;
      text-transform: uppercase; color: rgba(45,74,30,0.4);
      text-align: center;
      padding: 0 8cqi;
      flex-shrink: 0;
      margin-top: clamp(6px, 1.5cqb, 14px);
      position: relative; z-index: 10;
    }

    /* ── Container queries ── */
    @container vd (max-aspect-ratio: 1.15/1) and (min-aspect-ratio: 0.82/1) {
      .vd-h2 { font-size: clamp(28px, 9cqi, 66px); }
      .vd-photo-blob { width: clamp(140px, 56cqi, 420px); height: clamp(120px, 48cqb, 380px); }
    }
    @container vd (max-aspect-ratio: 0.65/1) {
      .vd-h2 { font-size: clamp(36px, 11.5cqi, 84px); }
      .vd-photo-blob { width: clamp(180px, 70cqi, 520px); height: clamp(155px, 60cqb, 470px); }
      .vd-bottom { padding-bottom: clamp(20px, 5cqb, 46px); }
    }
    @container vd (min-aspect-ratio: 1.55/1) {
      .vd-h2 { font-size: clamp(24px, 7.5cqi, 56px); }
      .vd-photo-blob { width: clamp(120px, 40cqi, 300px); height: clamp(100px, 38cqb, 290px); }
      .vd-topbar { padding-top: 3cqb; }
    }
  `,

  _phoneSVG() {
    return `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"
        stroke="rgba(45,74,30,0.65)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
  },

  _leafSVG() {
    return `<svg viewBox="0 0 120 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 170 C60 170 10 120 10 70 C10 30 35 10 60 10 C85 10 110 30 110 70 C110 120 60 170 60 170Z"
        fill="#2d4a1e" />
      <path d="M60 10 L60 170" stroke="#f5f0e8" stroke-width="2" opacity="0.3"/>
      <path d="M60 60 Q40 50 30 40" stroke="#f5f0e8" stroke-width="1.5" opacity="0.2"/>
      <path d="M60 80 Q80 70 90 55" stroke="#f5f0e8" stroke-width="1.5" opacity="0.2"/>
      <path d="M60 100 Q38 90 28 75" stroke="#f5f0e8" stroke-width="1.5" opacity="0.2"/>
    </svg>`;
  },

  render(s = {}) {
    const cfg = { ...this.defaults, ...s };
    const {
      season, headlineLine1, headlineLine2, subtext, img,
      offerBadge, offerTitle, offerSub, offerTime,
      contactLabel, contactPhone, ctaText,
      brandName, brandSub,
    } = cfg;

    return `
<div class="tpl-verdure">
  <div class="vd-bg"></div>
  <div class="vd-grain"></div>
  <div class="vd-circle"></div>
  <div class="vd-circle-inner"></div>
  <div class="vd-leaf vd-leaf--tl">${this._leafSVG()}</div>
  <div class="vd-leaf vd-leaf--br">${this._leafSVG()}</div>

  <div class="vd-shell">

    <div class="vd-topbar">
      <div>
        <span class="vd-brand-name">${brandName}</span>
        <span class="vd-brand-sub">${brandSub}</span>
      </div>
      <span class="vd-season-badge">${season}</span>
    </div>

    <div class="vd-headline">
      <h2 class="vd-h1">${headlineLine1}</h2>
      <h1 class="vd-h2">${headlineLine2}</h1>
    </div>

    <p class="vd-subtext">${subtext}</p>

    <div class="vd-photo-wrap">
      <div class="vd-photo-blob">
        <img src="${img}" alt="${headlineLine2}" />
      </div>
    </div>

    <div class="vd-offer">
      <span class="vd-offer-badge">${offerBadge}</span>
      <div class="vd-offer-content">
        <span class="vd-offer-title">${offerTitle}</span>
        <span class="vd-offer-sub">${offerSub}</span>
      </div>
      <span class="vd-offer-time">${offerTime}</span>
    </div>

    <div class="vd-bottom">
      <div class="vd-contact">
        <div class="vd-contact-icon">${this._phoneSVG()}</div>
        <div>
          <span class="vd-contact-label">${contactLabel}</span>
          <span class="vd-contact-phone">${contactPhone}</span>
        </div>
      </div>
      <div class="vd-cta">
        <div class="vd-cta-dot"></div>
        <span class="vd-cta-text">${ctaText}</span>
      </div>
    </div>

  </div>
</div>`.trim();
  },

  mount(containerEl, settings = {}) {
    if (!(containerEl instanceof HTMLElement))
      throw new Error(`${this.id}: mount() requires a valid HTMLElement`);
    const styleId = `__tpl-style-${this.id}`;
    if (!document.getElementById(styleId)) {
      const tag = document.createElement('style');
      tag.id = styleId; tag.textContent = this.css;
      document.head.appendChild(tag);
    }
    containerEl.innerHTML = this.render(settings);
  },
};