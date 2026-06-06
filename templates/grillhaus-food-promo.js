// ═══════════════════════════════════════════════════════════════════
//  TEMPLATE: Grillhaus — Extreme Food Promo Poster  v3
//  Category: Food & Beverage / Restaurant Marketing
//  Style:    Dark olive-green, bold condensed type ABOVE the photo,
//            arch-masked hero image, glowing accent details,
//            professional contact + discount strip at bottom.
//  Best for: Restaurants, BBQ brands, Instagram / Facebook promos
//  Sizes:    Fully responsive via container queries
//            4:5 portrait (primary), 1:1, 9:16, 16:9
// ═══════════════════════════════════════════════════════════════════

export default {
  id: 'grillhaus-food-promo',
  name: 'Grillhaus — Extreme Food Promo Poster',
  category: 'Food & Beverage / Restaurant Marketing',
  layout: 'promo-poster',
  tags: ['food', 'restaurant', 'promo', 'poster', 'dark', 'bold', 'steak', 'discount', 'social', 'instagram'],

  defaults: {
    eyebrow:        'Take',
    eyebrowBold:    'Extra 20%',
    eyebrowSuffix:  'off entire site',

    brandName:      'Grillhaus',
    brandSub:       'Since 1998',

    headlineLine1:  'Extreme Level',
    headlineLine2:  'Steak',

    img:            'https://images.unsplash.com/photo-1544025162-d76694265947?w=900&q=90',

    contactLabel:   'For Online Order',
    contactPhone:   '+123 456 789 0123',

    ctaText:        'Order Now',

    discountLabel:  'Get Our Discount',
    discountValue:  '75%',
    discountSuffix: 'Extra Off',
  },

  css: `
    @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=Barlow:wght@300;400;500;600&display=swap');

    /* ── Root ── */
    .tpl-gh {
      container-type: size;
      container-name: gh;
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;
      font-family: 'Barlow', sans-serif;
    }

    /* ── Background ── */
    .gh-bg {
      position: absolute;
      inset: 0;
      background: linear-gradient(160deg, #3e5118 0%, #2b3c0e 50%, #161f06 100%);
      z-index: 0;
    }

    /* Grain texture */
    .gh-grain {
      position: absolute;
      inset: 0;
      z-index: 1;
      opacity: 0.055;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='f'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23f)'/%3E%3C/svg%3E");
      background-size: 180px 180px;
      mix-blend-mode: overlay;
      pointer-events: none;
    }

    /* Radial vignette */
    .gh-vignette {
      position: absolute;
      inset: 0;
      z-index: 2;
      background: radial-gradient(ellipse 100% 100% at 50% 50%, transparent 20%, rgba(0,0,0,0.6) 100%);
      pointer-events: none;
    }

    /* Diagonal light streaks */
    .gh-streaks { position: absolute; inset: 0; z-index: 1; overflow: hidden; pointer-events: none; }
    .gh-streak  { position: absolute; background: rgba(255,255,255,0.022); }
    .gh-streak:nth-child(1) { width: 1px; height: 140%; top: -20%; left: 18%; transform: rotate(-8deg); }
    .gh-streak:nth-child(2) { width: 1px; height: 120%; top: -10%; left: 62%; transform: rotate(13deg); }
    .gh-streak:nth-child(3) { width: 2px; height: 70%;  top: 15%;  left: 80%; transform: rotate(-5deg); opacity: 0.4; }

    /* ── Shell: full-size flex column ── */
    .gh-shell {
      position: relative;
      z-index: 3;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    /* ════════════════
       BRAND — top right
    ════════════════ */
    .gh-brand {
      position: absolute;
      top: 4cqb;
      right: 5cqi;
      z-index: 10;
      text-align: right;
    }
    .gh-brand-name {
      display: block;
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 900;
      font-size: clamp(11px, 3cqi, 18px);
      letter-spacing: 0.28em;
      text-transform: uppercase;
      color: #fff;
      line-height: 1;
    }
    .gh-brand-sub {
      display: block;
      font-size: clamp(6px, 1.3cqi, 8px);
      font-weight: 400;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.38);
      margin-top: 3px;
    }

    /* ════════════════════════════════
       TOP — eyebrow + headline
       Text is ALWAYS above the photo
    ════════════════════════════════ */
    .gh-top {
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 4cqb 5cqi 0;
      position: relative;
      z-index: 10;
    }

    /* Eyebrow pill */
    .gh-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      background: rgba(255,255,255,0.09);
      border: 1px solid rgba(255,255,255,0.2);
      border-radius: 100px;
      padding: clamp(3px, 0.7cqb, 7px) clamp(10px, 2.5cqi, 20px);
      margin-bottom: clamp(6px, 1.8cqb, 16px);
    }
    .gh-eyebrow span {
      font-size: clamp(7px, 1.5cqi, 11px);
      font-weight: 400;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.55);
    }
    .gh-eyebrow strong {
      font-size: clamp(7px, 1.5cqi, 11px);
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #fff;
    }

    /* "EXTREME LEVEL" */
    .gh-h1 {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 800;
      font-size: clamp(18px, 6.5cqi, 46px);
      line-height: 1;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.78);
      text-align: center;
      margin: 0;
    }

    /* "STEAK" — large, fully visible, above photo */
    .gh-h2 {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 900;
      font-size: clamp(60px, 22cqi, 160px);
      line-height: 0.9;
      letter-spacing: -0.01em;
      text-transform: uppercase;
      color: #ffffff;
      text-align: center;
      margin: 0;
      paint-order: stroke fill;
      -webkit-text-stroke: clamp(1.5px, 0.25cqi, 3px) rgba(255,255,255,0.2);
      text-shadow:
        0 0 clamp(20px, 4cqi, 60px) rgba(120,180,60,0.2),
        0 4px 0 rgba(0,0,0,0.3);
    }

    /* ════════════════════════════════
       PHOTO BLOCK
       flex: 1 so it fills space below
       arch shape via clip-path
    ════════════════════════════════ */
    .gh-photo-block {
      flex: 1;
      min-height: 0;
      position: relative;
      overflow: hidden;
      clip-path: ellipse(54% 100% at 50% 100%);
      margin: 0 -2%;
    }
    .gh-photo-block img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center 25%;
      display: block;
    }
    /* Fade top edge of photo into background */
    .gh-photo-block::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(to bottom, rgba(35,52,10,0.6) 0%, transparent 32%);
      z-index: 1;
      pointer-events: none;
    }

    /* ════════════════════════════════
       BOTTOM STRIP
    ════════════════════════════════ */
    .gh-bottom {
      flex-shrink: 0;
      position: relative;
      z-index: 10;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding: clamp(10px, 2cqb, 20px) 5cqi clamp(14px, 4cqb, 36px);
      gap: 8px;
      border-top: 1px solid rgba(255,255,255,0.07);
    }

    /* Left */
    .gh-left {
      display: flex;
      flex-direction: column;
      gap: clamp(8px, 1.8cqb, 18px);
      min-width: 0;
    }

    .gh-contact {
      display: flex;
      align-items: center;
      gap: clamp(8px, 1.8cqi, 14px);
    }
    .gh-contact-icon {
      flex-shrink: 0;
      width: clamp(28px, 7cqi, 44px);
      height: clamp(28px, 7cqi, 44px);
      border-radius: 50%;
      border: 1.5px solid rgba(255,255,255,0.25);
      background: rgba(255,255,255,0.05);
      display: flex; align-items: center; justify-content: center;
    }
    .gh-contact-icon svg { width: 42%; height: 42%; display: block; }
    .gh-contact-info { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
    .gh-contact-label {
      font-size: clamp(6px, 1.3cqi, 10px);
      font-weight: 400;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.38);
      white-space: nowrap;
    }
    .gh-contact-phone {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: clamp(11px, 3cqi, 22px);
      font-weight: 700;
      color: #fff;
      letter-spacing: 0.03em;
      white-space: nowrap;
    }

    /* CTA */
    .gh-cta {
      display: inline-flex;
      align-items: center;
      gap: clamp(7px, 1.5cqi, 12px);
      border: 1.5px solid rgba(255,255,255,0.75);
      border-radius: 100px;
      padding: clamp(5px, 1.1cqb, 11px) clamp(14px, 3.5cqi, 28px);
      background: rgba(255,255,255,0.06);
      cursor: pointer;
      width: fit-content;
      transition: background 0.18s;
    }
    .gh-cta:hover { background: rgba(255,255,255,0.13); }
    .gh-cta-text {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: clamp(9px, 2.3cqi, 15px);
      font-weight: 700;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: #fff;
    }
    .gh-cta-badge {
      width: clamp(16px, 3.5cqi, 22px);
      height: clamp(16px, 3.5cqi, 22px);
      border-radius: 50%;
      background: #fff;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
    }
    .gh-cta-badge svg { width: 55%; height: 55%; display: block; }

    /* Right: discount */
    .gh-discount {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      flex-shrink: 0;
    }
    .gh-discount-label {
      font-size: clamp(6px, 1.3cqi, 10px);
      font-weight: 400;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.38);
      margin-bottom: 1px;
      text-align: right;
    }
    .gh-discount-label strong { font-weight: 700; color: rgba(255,255,255,0.65); }
    .gh-discount-value {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 900;
      font-size: clamp(46px, 14cqi, 100px);
      line-height: 0.88;
      color: #fff;
      letter-spacing: -0.03em;
      text-align: right;
      text-shadow: 0 4px 24px rgba(0,0,0,0.45);
    }
    .gh-discount-suffix {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 700;
      font-size: clamp(8px, 2cqi, 13px);
      letter-spacing: 0.24em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.42);
      text-align: right;
      margin-top: 2px;
    }

    /* ════════════════
       CONTAINER QUERIES
    ════════════════ */

    /* Square 1:1 */
    @container gh (max-aspect-ratio: 1.15/1) and (min-aspect-ratio: 0.82/1) {
      .gh-h1 { font-size: clamp(16px, 6cqi, 40px); }
      .gh-h2 { font-size: clamp(52px, 19cqi, 140px); }
      .gh-photo-block { clip-path: ellipse(56% 100% at 50% 100%); }
      .gh-discount-value { font-size: clamp(40px, 12cqi, 88px); }
    }

    /* Tall 9:16 */
    @container gh (max-aspect-ratio: 0.65/1) {
      .gh-h1 { font-size: clamp(20px, 7.5cqi, 52px); }
      .gh-h2 { font-size: clamp(72px, 25cqi, 180px); }
      .gh-photo-block { clip-path: ellipse(56% 100% at 50% 100%); }
      .gh-bottom { padding-bottom: clamp(18px, 5.5cqb, 50px); }
      .gh-discount-value { font-size: clamp(52px, 15cqi, 110px); }
    }

    /* Wide 16:9 */
    @container gh (min-aspect-ratio: 1.55/1) {
      .gh-h1 { font-size: clamp(14px, 5cqi, 36px); }
      .gh-h2 { font-size: clamp(48px, 17cqi, 130px); }
      .gh-top { padding-top: 3cqb; }
      .gh-photo-block { clip-path: ellipse(52% 100% at 50% 100%); }
      .gh-discount-value { font-size: clamp(34px, 10cqi, 80px); }
    }
  `,

  /* ── SVG helpers ── */

  _phoneSVG() {
    return `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"
        stroke="rgba(255,255,255,0.7)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
  },

  _arrowSVG() {
    return `<svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
        stroke="#192208" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
  },

  /* ── render(settings) → HTML string ── */

  render(s = {}) {
    const cfg = { ...this.defaults, ...s };
    const {
      eyebrow, eyebrowBold, eyebrowSuffix,
      brandName, brandSub,
      headlineLine1, headlineLine2,
      img,
      contactLabel, contactPhone,
      ctaText,
      discountLabel, discountValue, discountSuffix,
    } = cfg;

    const discountInner = discountLabel.startsWith('Get Our ')
      ? `Get Our <strong>${discountLabel.replace('Get Our ', '')}</strong>`
      : discountLabel;

    return `
<div class="tpl-gh">

  <div class="gh-bg"></div>
  <div class="gh-grain"></div>
  <div class="gh-vignette"></div>
  <div class="gh-streaks">
    <div class="gh-streak"></div>
    <div class="gh-streak"></div>
    <div class="gh-streak"></div>
  </div>

  <div class="gh-shell">

    <!-- Brand mark -->
    <div class="gh-brand">
      <span class="gh-brand-name">${brandName}</span>
      <span class="gh-brand-sub">${brandSub}</span>
    </div>

    <!-- Top: eyebrow + headline — all text above the photo -->
    <div class="gh-top">
      <div class="gh-eyebrow">
        <span>${eyebrow}</span>
        <strong>${eyebrowBold}</strong>
        <span>${eyebrowSuffix}</span>
      </div>
      <h2 class="gh-h1">${headlineLine1}</h2>
      <h1 class="gh-h2">${headlineLine2}</h1>
    </div>

    <!-- Photo block: fills remaining height, arch-clipped -->
    <div class="gh-photo-block">
      <img src="${img}" alt="${headlineLine2}" />
    </div>

    <!-- Bottom strip -->
    <div class="gh-bottom">

      <div class="gh-left">
        <div class="gh-contact">
          <div class="gh-contact-icon">${this._phoneSVG()}</div>
          <div class="gh-contact-info">
            <span class="gh-contact-label">${contactLabel}</span>
            <span class="gh-contact-phone">${contactPhone}</span>
          </div>
        </div>
        <div class="gh-cta">
          <span class="gh-cta-text">${ctaText}</span>
          <div class="gh-cta-badge">${this._arrowSVG()}</div>
        </div>
      </div>

      <div class="gh-discount">
        <span class="gh-discount-label">${discountInner}</span>
        <span class="gh-discount-value">${discountValue}</span>
        <span class="gh-discount-suffix">${discountSuffix}</span>
      </div>

    </div>

  </div>
</div>`.trim();
  },

  /* ── mount(containerEl, settings?) ── */

  mount(containerEl, settings = {}) {
    if (!(containerEl instanceof HTMLElement)) {
      throw new Error(`${this.id}: mount() requires a valid HTMLElement`);
    }
    const styleId = `__tpl-style-${this.id}`;
    if (!document.getElementById(styleId)) {
      const tag = document.createElement('style');
      tag.id = styleId;
      tag.textContent = this.css;
      document.head.appendChild(tag);
    }
    containerEl.innerHTML = this.render(settings);
  },
};