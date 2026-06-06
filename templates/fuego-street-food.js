// ═══════════════════════════════════════════════════════════════════
//  TEMPLATE 2: Fuego — Street Food / Fast Casual Promo Poster
//  Category:   Street Food / Fast Casual / Burger / Taco / Pizza
//  Style:      Near-black background, electric red-orange accent,
//              brutalist oversized condensed type, bold diagonal
//              price badge, high-contrast photo in a tilted frame,
//              raw industrial energy.
//  Best for:   Burgers, tacos, pizza, wings, food trucks,
//              fast-casual chains, weekly specials, flash deals
//  Sizes:      4:5 portrait (primary), 1:1, 9:16, 16:9
// ═══════════════════════════════════════════════════════════════════

export default {
  id: 'fuego-street-food',
  name: 'Fuego — Street Food Promo Poster',
  category: 'Street Food / Fast Casual',
  layout: 'promo-poster',
  tags: ['street-food', 'burger', 'tacos', 'pizza', 'fast-casual', 'bold', 'neon', 'red', 'poster'],

  defaults: {
    eyebrow:        'This Week Only',
    headlineLine1:  'Crispy',
    headlineLine2:  'Smash',
    headlineLine3:  'Burger',

    img:            'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&q=90',

    dealLabel:      'Combo Deal',
    dealValue:      '$9',
    dealSuffix:     '.99',
    dealNote:       'Burger + Fries + Drink',

    contactLabel:   'Order Online',
    contactPhone:   '+1 800 555 0199',
    ctaText:        'Order Now',

    brandName:      'Fuego',
    brandTagline:   'Born on the streets',

    accentColor:    '#ff3d1a',
  },

  css: `
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@300;400;500;600;700&family=Barlow:wght@300;400;500&display=swap');

    .tpl-fuego {
      container-type: size;
      container-name: fg;
      width: 100%; height: 100%;
      position: relative;
      overflow: hidden;
      font-family: 'Barlow', sans-serif;
      background: #0a0908;
    }

    /* ── Background ── */
    .fg-bg {
      position: absolute; inset: 0;
      background: radial-gradient(ellipse 80% 60% at 50% 80%, #1a0800 0%, #0a0908 70%);
      z-index: 0;
    }

    /* ── Scan-line texture ── */
    .fg-scanlines {
      position: absolute; inset: 0; z-index: 1; pointer-events: none;
      background-image: repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(255,61,26,0.018) 2px,
        rgba(255,61,26,0.018) 4px
      );
    }

    /* ── Giant faint number watermark ── */
    .fg-watermark {
      position: absolute;
      right: -3cqi; bottom: 10cqb;
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(100px, 45cqi, 360px);
      color: rgba(255,61,26,0.04);
      line-height: 1;
      z-index: 1;
      pointer-events: none;
      user-select: none;
    }

    /* ── Red accent bar — left edge ── */
    .fg-bar {
      position: absolute;
      left: 0; top: 0; bottom: 0;
      width: clamp(4px, 1cqi, 8px);
      background: #ff3d1a;
      z-index: 8;
    }

    /* ── Shell ── */
    .fg-shell {
      position: relative; z-index: 3;
      width: 100%; height: 100%;
      display: flex; flex-direction: column;
      padding-left: clamp(6px, 1.5cqi, 12px);
    }

    /* ── Top row: brand + eyebrow ── */
    .fg-top {
      flex-shrink: 0;
      display: flex; justify-content: space-between; align-items: flex-start;
      padding: clamp(14px, 3.5cqb, 30px) clamp(14px, 4cqi, 28px) 0 clamp(14px, 4cqi, 28px);
      position: relative; z-index: 10;
    }
    .fg-brand { display: flex; flex-direction: column; }
    .fg-brand-name {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(18px, 5.5cqi, 38px);
      letter-spacing: 0.08em;
      color: #ff3d1a;
      line-height: 1;
    }
    .fg-brand-tag {
      font-size: clamp(6px, 1.3cqi, 9px);
      font-weight: 300; letter-spacing: 0.22em;
      text-transform: uppercase; color: rgba(255,255,255,0.28);
    }
    .fg-eyebrow {
      font-size: clamp(7px, 1.5cqi, 10px);
      font-weight: 500; letter-spacing: 0.22em;
      text-transform: uppercase; color: rgba(255,61,26,0.8);
      border: 1px solid rgba(255,61,26,0.4);
      padding: clamp(3px, 0.6cqb, 6px) clamp(8px, 2cqi, 14px);
      border-radius: 2px;
      margin-top: 2px;
    }

    /* ── Headline block ── */
    .fg-headline {
      flex-shrink: 0;
      padding: clamp(6px, 1.5cqb, 14px) clamp(14px, 4cqi, 28px) 0;
      position: relative; z-index: 10;
    }
    .fg-h-line {
      font-family: 'Bebas Neue', sans-serif;
      letter-spacing: 0.02em;
      color: #fff;
      line-height: 0.92;
      display: block;
    }
    .fg-h-line:nth-child(1) { font-size: clamp(28px, 9cqi, 68px); }
    .fg-h-line:nth-child(2) {
      font-size: clamp(44px, 16cqi, 120px);
      color: #ff3d1a;
      line-height: 0.88;
    }
    .fg-h-line:nth-child(3) { font-size: clamp(34px, 11cqi, 82px); color: rgba(255,255,255,0.88); }

    /* ── Photo: tilted frame ── */
    .fg-photo-wrap {
      flex: 1; min-height: 0;
      position: relative;
      margin: clamp(10px, 2.5cqb, 22px) clamp(14px, 4cqi, 28px) 0;
      z-index: 6;
    }
    /* Offset shadow box */
    .fg-photo-wrap::before {
      content: '';
      position: absolute;
      inset: 0;
      border: 2px solid rgba(255,61,26,0.35);
      transform: translate(clamp(5px,1.2cqi,10px), clamp(5px,1.2cqb,10px));
      z-index: -1;
    }
    .fg-photo-wrap img {
      width: 100%; height: 100%;
      object-fit: cover;
      object-position: center 40%;
      display: block;
    }

    /* ── Price badge: diagonal ribbon top-right of photo ── */
    .fg-badge {
      position: absolute;
      top: clamp(-10px,-2.5cqb,-6px);
      right: clamp(-10px,-2.5cqi,-6px);
      z-index: 12;
      background: #ff3d1a;
      width: clamp(60px, 17cqi, 110px);
      height: clamp(60px, 17cqi, 110px);
      border-radius: 50%;
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      box-shadow: 0 0 0 clamp(3px,0.7cqi,6px) rgba(255,61,26,0.25);
    }
    .fg-badge-label {
      font-size: clamp(5px, 1.1cqi, 8px);
      font-weight: 600; letter-spacing: 0.2em;
      text-transform: uppercase; color: rgba(255,255,255,0.8);
    }
    .fg-badge-price {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(22px, 6.5cqi, 46px);
      letter-spacing: 0;
      color: #fff; line-height: 1;
      display: flex; align-items: flex-start;
    }
    .fg-badge-sup {
      font-family: 'Oswald', sans-serif;
      font-size: 0.45em; font-weight: 500;
      margin-top: 0.15em;
    }
    .fg-badge-note {
      font-size: clamp(4px, 0.9cqi, 7px);
      font-weight: 400; letter-spacing: 0.1em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.7);
      text-align: center; padding: 0 4px;
      line-height: 1.3;
    }

    /* ── Bottom strip ── */
    .fg-bottom {
      flex-shrink: 0;
      display: flex; justify-content: space-between; align-items: center;
      padding: clamp(10px, 2cqb, 18px) clamp(14px, 4cqi, 28px) clamp(14px, 3.5cqb, 30px);
      position: relative; z-index: 10;
      border-top: 1px solid rgba(255,255,255,0.06);
      margin-top: clamp(8px, 2cqb, 16px);
    }

    .fg-contact { display: flex; align-items: center; gap: clamp(8px, 1.8cqi, 14px); min-width: 0; }
    .fg-contact-icon {
      flex-shrink: 0;
      width: clamp(26px, 6.5cqi, 40px); height: clamp(26px, 6.5cqi, 40px);
      border-radius: 50%;
      border: 1.5px solid rgba(255,61,26,0.45);
      display: flex; align-items: center; justify-content: center;
      background: rgba(255,61,26,0.06);
    }
    .fg-contact-icon svg { width: 42%; height: 42%; }
    .fg-contact-info { display: flex; flex-direction: column; gap: 1px; min-width: 0; }
    .fg-contact-label {
      font-size: clamp(6px, 1.2cqi, 9px);
      font-weight: 300; letter-spacing: 0.18em;
      text-transform: uppercase; color: rgba(255,255,255,0.32);
      white-space: nowrap;
    }
    .fg-contact-phone {
      font-family: 'Oswald', sans-serif;
      font-size: clamp(11px, 2.8cqi, 20px);
      font-weight: 500; color: #fff;
      letter-spacing: 0.04em; white-space: nowrap;
    }

    .fg-cta {
      display: inline-flex; align-items: center; gap: clamp(6px, 1.2cqi, 10px);
      background: #ff3d1a;
      border-radius: 2px;
      padding: clamp(7px, 1.4cqb, 13px) clamp(14px, 3.5cqi, 26px);
      cursor: pointer; flex-shrink: 0;
      transition: opacity 0.18s;
    }
    .fg-cta:hover { opacity: 0.88; }
    .fg-cta-text {
      font-family: 'Oswald', sans-serif;
      font-size: clamp(9px, 2.2cqi, 14px);
      font-weight: 600; letter-spacing: 0.2em;
      text-transform: uppercase; color: #fff;
    }
    .fg-cta-arrow {
      width: clamp(14px, 3cqi, 20px); height: clamp(14px, 3cqi, 20px);
      border-radius: 50%; background: rgba(255,255,255,0.9);
      display: flex; align-items: center; justify-content: center; flex-shrink: 0;
    }
    .fg-cta-arrow svg { width: 55%; height: 55%; }

    /* ── Container queries ── */
    @container fg (max-aspect-ratio: 1.15/1) and (min-aspect-ratio: 0.82/1) {
      .fg-h-line:nth-child(1) { font-size: clamp(24px, 8cqi, 58px); }
      .fg-h-line:nth-child(2) { font-size: clamp(38px, 14cqi, 104px); }
      .fg-h-line:nth-child(3) { font-size: clamp(28px, 9.5cqi, 70px); }
    }
    @container fg (max-aspect-ratio: 0.65/1) {
      .fg-h-line:nth-child(1) { font-size: clamp(30px, 10cqi, 75px); }
      .fg-h-line:nth-child(2) { font-size: clamp(50px, 18cqi, 135px); }
      .fg-h-line:nth-child(3) { font-size: clamp(38px, 12cqi, 90px); }
      .fg-bottom { padding-bottom: clamp(20px, 5cqb, 46px); }
    }
    @container fg (min-aspect-ratio: 1.55/1) {
      .fg-h-line:nth-child(1) { font-size: clamp(20px, 7cqi, 50px); }
      .fg-h-line:nth-child(2) { font-size: clamp(32px, 12cqi, 90px); }
      .fg-h-line:nth-child(3) { font-size: clamp(24px, 8.5cqi, 64px); }
      .fg-top { padding-top: 2.5cqb; }
    }
  `,

  _phoneSVG() {
    return `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"
        stroke="rgba(255,61,26,0.8)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
  },

  _arrowSVG() {
    return `<svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
        stroke="#0a0908" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
  },

  render(s = {}) {
    const cfg = { ...this.defaults, ...s };
    const {
      eyebrow, headlineLine1, headlineLine2, headlineLine3, img,
      dealLabel, dealValue, dealSuffix, dealNote,
      contactLabel, contactPhone, ctaText,
      brandName, brandTagline,
    } = cfg;

    return `
<div class="tpl-fuego">
  <div class="fg-bg"></div>
  <div class="fg-scanlines"></div>
  <div class="fg-watermark">${dealValue}</div>
  <div class="fg-bar"></div>

  <div class="fg-shell">

    <div class="fg-top">
      <div class="fg-brand">
        <span class="fg-brand-name">${brandName}</span>
        <span class="fg-brand-tag">${brandTagline}</span>
      </div>
      <span class="fg-eyebrow">${eyebrow}</span>
    </div>

    <div class="fg-headline">
      <span class="fg-h-line">${headlineLine1}</span>
      <span class="fg-h-line">${headlineLine2}</span>
      <span class="fg-h-line">${headlineLine3}</span>
    </div>

    <div class="fg-photo-wrap">
      <img src="${img}" alt="${headlineLine2} ${headlineLine3}" />
      <div class="fg-badge">
        <span class="fg-badge-label">${dealLabel}</span>
        <span class="fg-badge-price">${dealValue}<span class="fg-badge-sup">${dealSuffix}</span></span>
        <span class="fg-badge-note">${dealNote}</span>
      </div>
    </div>

    <div class="fg-bottom">
      <div class="fg-contact">
        <div class="fg-contact-icon">${this._phoneSVG()}</div>
        <div class="fg-contact-info">
          <span class="fg-contact-label">${contactLabel}</span>
          <span class="fg-contact-phone">${contactPhone}</span>
        </div>
      </div>
      <div class="fg-cta">
        <span class="fg-cta-text">${ctaText}</span>
        <div class="fg-cta-arrow">${this._arrowSVG()}</div>
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