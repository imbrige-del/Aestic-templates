// ═══════════════════════════════════════════════════════════════════
//  TEMPLATE 4: Slash — Bold Discount Promo Poster
//  Category:   Restaurant Promotions / Flash Sales / Discount Events
//  Style:      Deep burgundy + warm cream. A giant diagonal "SLASH"
//              price-cut band cuts across the full poster. Oversized
//              discount percentage dominates the upper-left. Photo
//              bleeds into the right side inside a torn-edge mask.
//              Raw editorial energy — like a luxury brand going on sale.
//  Best for:   50% OFF nights, happy hour, weekend specials,
//              loyalty promos, seasonal clearance menus
//  Sizes:      4:5 portrait (primary), 1:1, 9:16, 16:9
// ═══════════════════════════════════════════════════════════════════

export default {
  id: 'slash-promo',
  name: 'Slash — Bold Discount Promo Poster',
  category: 'Restaurant Promotions / Flash Sales',
  layout: 'promo-poster',
  tags: ['promo', 'discount', 'off', 'sale', 'bold', 'diagonal', 'burgundy', 'editorial', 'restaurant'],

  defaults: {
    // Brand
    brandName:       'Velvet',
    brandSub:        'Kitchen & Bar',

    // Promo label above % number
    promoEyebrow:    'Limited Time',

    // The big OFF number
    discountNum:     '50',
    discountUnit:    '%',
    discountLabel:   'OFF',

    // Slash band text (repeating marquee feel)
    bandText:        'TODAY ONLY  ·  DINE IN  ·  ALL MAINS  ·',

    // Right side content
    headlineLine1:   'Signature',
    headlineLine2:   'Ribs & Wings',
    descriptor:      'Slow-smoked 12 hours · House dry rub · Served with loaded fries',

    // Hero image
    img:             'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=900&q=90',

    // Offer detail
    validLabel:      'Valid',
    validDate:       'Fri — Sun',
    validTime:       '5pm to 10pm',

    // Contact + CTA
    contactLabel:    'Reservations',
    contactPhone:    '+1 800 555 0177',
    ctaText:         'Book Now',

    // Original price crossed out
    originalPrice:   '$38',
    newPrice:        '$19',
  },

  css: `
    @import url('https://fonts.googleapis.com/css2?family=Anton&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Outfit:wght@200;300;400;500;600&display=swap');

    .tpl-slash {
      container-type: size;
      container-name: sl;
      width: 100%; height: 100%;
      position: relative;
      overflow: hidden;
      font-family: 'Outfit', sans-serif;
      background: #1e0a0f;
    }

    /* ── Background ── */
    .sl-bg {
      position: absolute; inset: 0;
      background: linear-gradient(135deg, #2a0d14 0%, #1a0809 50%, #120508 100%);
      z-index: 0;
    }

    /* ── Grain ── */
    .sl-grain {
      position: absolute; inset: 0; z-index: 1; opacity: 0.06; pointer-events: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='f'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23f)'/%3E%3C/svg%3E");
      background-size: 180px 180px;
      mix-blend-mode: overlay;
    }

    /* ── Shell ── */
    .sl-shell {
      position: relative; z-index: 4;
      width: 100%; height: 100%;
      display: flex; flex-direction: column;
    }

    /* ══════════════════════════════
       TOP SECTION: discount + photo
    ══════════════════════════════ */
    .sl-top {
      flex: 1; min-height: 0;
      position: relative;
      display: flex;
    }

    /* ── Left column: discount number ── */
    .sl-left {
      position: relative; z-index: 6;
      display: flex; flex-direction: column;
      justify-content: flex-start;
      padding: clamp(14px, 3.5cqb, 30px) 0 0 clamp(14px, 4cqi, 28px);
      width: 58%;
      flex-shrink: 0;
    }

    /* Brand */
    .sl-brand {
      display: flex; flex-direction: column; gap: 1px;
      margin-bottom: clamp(10px, 2.5cqb, 22px);
    }
    .sl-brand-name {
      font-family: 'Libre Baskerville', serif;
      font-weight: 700; font-style: italic;
      font-size: clamp(13px, 3.5cqi, 22px);
      color: #f0e6d0;
      letter-spacing: 0.02em;
      line-height: 1;
    }
    .sl-brand-sub {
      font-size: clamp(7px, 1.4cqi, 10px);
      font-weight: 300; letter-spacing: 0.28em;
      text-transform: uppercase; color: rgba(240,230,208,0.38);
    }

    /* Promo eyebrow */
    .sl-promo-eyebrow {
      font-size: clamp(7px, 1.5cqi, 10px);
      font-weight: 500; letter-spacing: 0.3em;
      text-transform: uppercase;
      color: #c9986a;
      margin-bottom: clamp(2px, 0.5cqb, 6px);
    }

    /* BIG discount number */
    .sl-discount-wrap {
      display: flex; align-items: flex-start; line-height: 1;
    }
    .sl-discount-num {
      font-family: 'Anton', sans-serif;
      font-size: clamp(80px, 28cqi, 210px);
      color: #f0e6d0;
      line-height: 0.88;
      letter-spacing: -0.02em;
    }
    .sl-discount-unit {
      font-family: 'Anton', sans-serif;
      font-size: clamp(40px, 14cqi, 100px);
      color: #c9986a;
      line-height: 1;
      margin-top: clamp(8px, 2cqb, 18px);
      letter-spacing: -0.02em;
    }
    .sl-discount-label {
      font-family: 'Anton', sans-serif;
      font-size: clamp(36px, 12cqi, 90px);
      color: #f0e6d0;
      line-height: 0.88;
      letter-spacing: 0.05em;
      margin-top: clamp(-6px, -1.5cqb, -2px);
    }

    /* ── Right column: photo ── */
    .sl-photo-col {
      position: absolute;
      top: 0; right: 0;
      width: 52%;
      height: 100%;
      z-index: 5;
      overflow: hidden;
      /* Jagged left edge using clip-path */
      clip-path: polygon(
        18% 0%, 100% 0%,
        100% 100%, 8% 100%,
        22% 75%, 6% 50%, 20% 25%
      );
    }
    .sl-photo-col img {
      width: 100%; height: 100%;
      object-fit: cover;
      object-position: center 30%;
      display: block;
    }
    /* Dark gradient on left edge of photo */
    .sl-photo-col::after {
      content: '';
      position: absolute; inset: 0;
      background: linear-gradient(90deg, rgba(26,8,9,0.75) 0%, transparent 40%);
      pointer-events: none;
    }

    /* ══════════════════════════════
       DIAGONAL SLASH BAND
    ══════════════════════════════ */
    .sl-band {
      position: absolute;
      left: -5%;
      right: -5%;
      z-index: 10;
      /* vertical center around 55% of the top section */
      top: 54%;
      transform: translateY(-50%) rotate(-4deg);
      background: #c9986a;
      padding: clamp(6px, 1.5cqb, 12px) 0;
      overflow: hidden;
      pointer-events: none;
    }
    .sl-band-track {
      display: flex; gap: clamp(16px, 4cqi, 32px);
      white-space: nowrap;
      /* Infinite scroll animation */
      animation: sl-marquee 14s linear infinite;
    }
    @keyframes sl-marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .sl-band-item {
      font-family: 'Anton', sans-serif;
      font-size: clamp(10px, 2.5cqi, 18px);
      letter-spacing: 0.18em;
      color: #1a0809;
      flex-shrink: 0;
    }

    /* ══════════════════════════════
       MIDDLE SECTION: dish info
    ══════════════════════════════ */
    .sl-mid {
      flex-shrink: 0;
      padding: clamp(40px, 10cqb, 70px) clamp(14px, 4cqi, 28px) 0;
      position: relative; z-index: 6;
      display: flex; flex-direction: column; gap: clamp(4px, 1cqb, 8px);
    }
    .sl-dish-h1 {
      font-family: 'Libre Baskerville', serif;
      font-weight: 400; font-style: italic;
      font-size: clamp(11px, 2.8cqi, 20px);
      color: rgba(240,230,208,0.5);
      line-height: 1; margin: 0;
    }
    .sl-dish-h2 {
      font-family: 'Libre Baskerville', serif;
      font-weight: 700;
      font-size: clamp(18px, 5.5cqi, 40px);
      color: #f0e6d0;
      line-height: 1; margin: 0;
      letter-spacing: -0.01em;
    }
    .sl-descriptor {
      font-size: clamp(7px, 1.5cqi, 10px);
      font-weight: 300; letter-spacing: 0.12em;
      color: rgba(240,230,208,0.38);
      margin-top: clamp(2px, 0.5cqb, 6px);
    }

    /* Price row */
    .sl-price-row {
      display: flex; align-items: center;
      gap: clamp(8px, 2cqi, 14px);
      margin-top: clamp(4px, 1cqb, 10px);
    }
    .sl-price-original {
      font-family: 'Outfit', sans-serif;
      font-size: clamp(12px, 3cqi, 22px);
      font-weight: 300; color: rgba(240,230,208,0.3);
      text-decoration: line-through;
      text-decoration-color: #c9986a;
      text-decoration-thickness: 2px;
    }
    .sl-price-new {
      font-family: 'Anton', sans-serif;
      font-size: clamp(20px, 6cqi, 44px);
      color: #c9986a; line-height: 1;
      letter-spacing: 0.02em;
    }
    .sl-price-tag {
      font-size: clamp(7px, 1.4cqi, 10px);
      font-weight: 400; letter-spacing: 0.2em;
      text-transform: uppercase; color: rgba(240,230,208,0.4);
      border: 1px solid rgba(201,152,106,0.3);
      padding: 3px 8px; border-radius: 2px;
    }

    /* ══════════════════════════════
       BOTTOM STRIP
    ══════════════════════════════ */
    .sl-bottom {
      flex-shrink: 0;
      display: flex; justify-content: space-between; align-items: flex-end;
      padding: clamp(10px, 2cqb, 16px) clamp(14px, 4cqi, 28px) clamp(14px, 3.5cqb, 28px);
      border-top: 1px solid rgba(240,230,208,0.08);
      position: relative; z-index: 6;
      gap: 8px;
    }

    /* Left: contact */
    .sl-contact { display: flex; align-items: center; gap: clamp(8px, 2cqi, 14px); min-width: 0; }
    .sl-contact-icon {
      flex-shrink: 0;
      width: clamp(26px, 6.5cqi, 40px); height: clamp(26px, 6.5cqi, 40px);
      border-radius: 50%;
      border: 1.5px solid rgba(201,152,106,0.35);
      background: rgba(201,152,106,0.06);
      display: flex; align-items: center; justify-content: center;
    }
    .sl-contact-icon svg { width: 42%; height: 42%; }
    .sl-contact-label {
      font-size: clamp(6px, 1.2cqi, 9px); font-weight: 300;
      letter-spacing: 0.18em; text-transform: uppercase;
      color: rgba(240,230,208,0.35); display: block;
    }
    .sl-contact-phone {
      font-family: 'Outfit', sans-serif;
      font-size: clamp(10px, 2.6cqi, 18px); font-weight: 500;
      color: #f0e6d0; letter-spacing: 0.03em; white-space: nowrap;
    }

    /* Center: valid dates */
    .sl-valid {
      display: flex; flex-direction: column; align-items: center; gap: 1px;
    }
    .sl-valid-label {
      font-size: clamp(6px, 1.2cqi, 9px); font-weight: 300;
      letter-spacing: 0.22em; text-transform: uppercase;
      color: rgba(240,230,208,0.3);
    }
    .sl-valid-date {
      font-family: 'Libre Baskerville', serif;
      font-size: clamp(9px, 2.2cqi, 15px); font-weight: 700;
      color: #c9986a; letter-spacing: 0.06em;
    }
    .sl-valid-time {
      font-size: clamp(7px, 1.4cqi, 10px); font-weight: 300;
      letter-spacing: 0.15em; color: rgba(240,230,208,0.4);
    }

    /* Right: CTA */
    .sl-cta {
      display: inline-flex; align-items: center; gap: clamp(7px, 1.5cqi, 12px);
      background: #c9986a;
      border-radius: 2px;
      padding: clamp(7px, 1.5cqb, 13px) clamp(14px, 3.5cqi, 26px);
      cursor: pointer; flex-shrink: 0; transition: opacity 0.18s;
    }
    .sl-cta:hover { opacity: 0.88; }
    .sl-cta-text {
      font-family: 'Outfit', sans-serif;
      font-size: clamp(9px, 2.2cqi, 14px); font-weight: 600;
      letter-spacing: 0.2em; text-transform: uppercase; color: #1a0809;
    }
    .sl-cta-arrow {
      width: clamp(14px, 3cqi, 20px); height: clamp(14px, 3cqi, 20px);
      border-radius: 50%; background: rgba(26,8,9,0.25);
      display: flex; align-items: center; justify-content: center; flex-shrink: 0;
    }
    .sl-cta-arrow svg { width: 55%; height: 55%; }

    /* ── Container queries ── */
    @container sl (max-aspect-ratio: 1.15/1) and (min-aspect-ratio: 0.82/1) {
      .sl-discount-num { font-size: clamp(70px, 24cqi, 180px); }
      .sl-discount-label { font-size: clamp(30px, 10cqi, 76px); }
      .sl-dish-h2 { font-size: clamp(16px, 4.8cqi, 34px); }
    }
    @container sl (max-aspect-ratio: 0.65/1) {
      .sl-discount-num { font-size: clamp(88px, 30cqi, 220px); }
      .sl-discount-label { font-size: clamp(40px, 13cqi, 95px); }
      .sl-dish-h2 { font-size: clamp(20px, 6cqi, 44px); }
      .sl-bottom { padding-bottom: clamp(20px, 5cqb, 44px); }
    }
    @container sl (min-aspect-ratio: 1.55/1) {
      .sl-discount-num { font-size: clamp(60px, 20cqi, 160px); }
      .sl-discount-label { font-size: clamp(26px, 9cqi, 70px); }
      .sl-dish-h2 { font-size: clamp(14px, 4cqi, 30px); }
      .sl-left { padding-top: 3cqb; }
    }
  `,

  _phoneSVG() {
    return `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"
        stroke="rgba(201,152,106,0.75)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
  },

  _arrowSVG() {
    return `<svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
        stroke="rgba(26,8,9,0.8)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
  },

  render(s = {}) {
    const cfg = { ...this.defaults, ...s };
    const {
      brandName, brandSub, promoEyebrow,
      discountNum, discountUnit, discountLabel,
      bandText,
      headlineLine1, headlineLine2, descriptor,
      img,
      validLabel, validDate, validTime,
      contactLabel, contactPhone, ctaText,
      originalPrice, newPrice,
    } = cfg;

    // repeat band text enough times to fill any width
    const band = Array(12).fill(bandText).join('  ');
    const band2 = Array(12).fill(bandText).join('  ');

    return `
<div class="tpl-slash">
  <div class="sl-bg"></div>
  <div class="sl-grain"></div>

  <div class="sl-shell">

    <!-- ── Top: discount left + photo right ── -->
    <div class="sl-top">

      <div class="sl-left">
        <div class="sl-brand">
          <span class="sl-brand-name">${brandName}</span>
          <span class="sl-brand-sub">${brandSub}</span>
        </div>
        <span class="sl-promo-eyebrow">${promoEyebrow}</span>
        <div class="sl-discount-wrap">
          <span class="sl-discount-num">${discountNum}</span>
          <span class="sl-discount-unit">${discountUnit}</span>
        </div>
        <span class="sl-discount-label">${discountLabel}</span>
      </div>

      <div class="sl-photo-col">
        <img src="${img}" alt="${headlineLine2}" />
      </div>

      <!-- Diagonal band overlaps both columns -->
      <div class="sl-band">
        <div class="sl-band-track">
          <span class="sl-band-item">${band}</span>
          <span class="sl-band-item">${band2}</span>
        </div>
      </div>

    </div>

    <!-- ── Middle: dish info ── -->
    <div class="sl-mid">
      <h2 class="sl-dish-h1">${headlineLine1}</h2>
      <h1 class="sl-dish-h2">${headlineLine2}</h1>
      <p class="sl-descriptor">${descriptor}</p>
      <div class="sl-price-row">
        <span class="sl-price-original">${originalPrice}</span>
        <span class="sl-price-new">${newPrice}</span>
        <span class="sl-price-tag">per person</span>
      </div>
    </div>

    <!-- ── Bottom strip ── -->
    <div class="sl-bottom">
      <div class="sl-contact">
        <div class="sl-contact-icon">${this._phoneSVG()}</div>
        <div>
          <span class="sl-contact-label">${contactLabel}</span>
          <span class="sl-contact-phone">${contactPhone}</span>
        </div>
      </div>
      <div class="sl-valid">
        <span class="sl-valid-label">${validLabel}</span>
        <span class="sl-valid-date">${validDate}</span>
        <span class="sl-valid-time">${validTime}</span>
      </div>
      <div class="sl-cta">
        <span class="sl-cta-text">${ctaText}</span>
        <div class="sl-cta-arrow">${this._arrowSVG()}</div>
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