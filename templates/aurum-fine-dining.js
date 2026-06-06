// ═══════════════════════════════════════════════════════════════════
//  TEMPLATE 1: Aurum — Luxury Fine Dining Promo Poster
//  Category:   Fine Dining / Upscale Restaurant Marketing
//  Style:      Deep charcoal background, champagne-gold accents,
//              elegant serif display type, centered photo in a
//              decorative gold oval frame, refined bottom strip
//              with reservation CTA and special offer callout.
//  Best for:   Fine dining, steakhouses, wine bars, anniversary
//              promos, tasting menus, special event announcements
//  Sizes:      4:5 portrait (primary), 1:1, 9:16, 16:9
// ═══════════════════════════════════════════════════════════════════

export default {
  id: 'aurum-fine-dining',
  name: 'Aurum — Luxury Fine Dining Poster',
  category: 'Fine Dining / Restaurant Marketing',
  layout: 'promo-poster',
  tags: ['fine-dining', 'luxury', 'gold', 'serif', 'elegant', 'restaurant', 'steak', 'wine', 'poster'],

  defaults: {
    tagline:        'Chef\'s Signature',
    headlineLine1:  'The Art of',
    headlineLine2:  'Fine Dining',

    subtext:        'An extraordinary culinary journey crafted with the finest seasonal ingredients',

    img:            'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=90',

    offerLabel:     'Tonight Only',
    offerValue:     '5-Course',
    offerSuffix:    'Tasting Menu',
    offerPrice:     '$95 per person',

    reserveLabel:   'Reservations',
    reservePhone:   '+1 800 555 0199',
    ctaText:        'Reserve a Table',

    brandName:      'Aurum',
    brandSub:       'Est. 2009 · New York',
  },

  css: `
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Cormorant+SC:wght@300;400;600&family=Jost:wght@200;300;400;500&display=swap');

    .tpl-aurum {
      container-type: size;
      container-name: au;
      width: 100%; height: 100%;
      position: relative;
      overflow: hidden;
      font-family: 'Jost', sans-serif;
    }

    /* ── Background: deep charcoal with warm undertone ── */
    .au-bg {
      position: absolute; inset: 0;
      background: linear-gradient(145deg, #1c1a18 0%, #141210 55%, #0e0c0a 100%);
      z-index: 0;
    }

    /* ── Gold dust texture ── */
    .au-grain {
      position: absolute; inset: 0; z-index: 1; opacity: 0.04;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='f'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23f)'/%3E%3C/svg%3E");
      background-size: 200px 200px;
      mix-blend-mode: screen;
      pointer-events: none;
    }

    /* ── Vignette ── */
    .au-vignette {
      position: absolute; inset: 0; z-index: 2;
      background: radial-gradient(ellipse 90% 90% at 50% 50%, transparent 30%, rgba(0,0,0,0.65) 100%);
      pointer-events: none;
    }

    /* ── Decorative corner ornaments (SVG inline) ── */
    .au-corner {
      position: absolute; z-index: 8;
      width: clamp(36px, 9cqi, 64px);
      height: clamp(36px, 9cqi, 64px);
      opacity: 0.55;
    }
    .au-corner svg { width: 100%; height: 100%; display: block; }
    .au-corner--tl { top: 3cqb; left: 4cqi; }
    .au-corner--tr { top: 3cqb; right: 4cqi; transform: scaleX(-1); }
    .au-corner--bl { bottom: 3cqb; left: 4cqi; transform: scaleY(-1); }
    .au-corner--br { bottom: 3cqb; right: 4cqi; transform: scale(-1); }

    /* ── Thin gold border frame ── */
    .au-frame {
      position: absolute;
      inset: clamp(10px, 2.5cqi, 20px);
      border: 1px solid rgba(212,175,55,0.2);
      z-index: 7;
      pointer-events: none;
    }

    /* ── Shell ── */
    .au-shell {
      position: relative; z-index: 3;
      width: 100%; height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    /* ── Top brand ── */
    .au-brand {
      padding-top: clamp(18px, 4.5cqb, 40px);
      display: flex; flex-direction: column; align-items: center; gap: 4px;
      position: relative; z-index: 10;
    }
    .au-brand-rule {
      display: flex; align-items: center; gap: clamp(8px, 2cqi, 14px);
      width: 100%;
    }
    .au-brand-line {
      flex: 1; height: 1px;
      background: linear-gradient(90deg, transparent, rgba(212,175,55,0.5));
    }
    .au-brand-line:last-child {
      background: linear-gradient(270deg, transparent, rgba(212,175,55,0.5));
    }
    .au-brand-name {
      font-family: 'Cormorant SC', serif;
      font-weight: 400;
      font-size: clamp(14px, 4cqi, 28px);
      letter-spacing: 0.45em;
      text-transform: uppercase;
      color: #d4af37;
      white-space: nowrap;
    }
    .au-brand-sub {
      font-family: 'Jost', sans-serif;
      font-weight: 200;
      font-size: clamp(6px, 1.3cqi, 9px);
      letter-spacing: 0.35em;
      text-transform: uppercase;
      color: rgba(212,175,55,0.45);
      text-align: center;
      margin-top: 2px;
    }

    /* ── Tagline ── */
    .au-tagline {
      font-family: 'Cormorant Garamond', serif;
      font-style: italic;
      font-weight: 300;
      font-size: clamp(9px, 2cqi, 14px);
      letter-spacing: 0.15em;
      color: rgba(212,175,55,0.65);
      text-align: center;
      margin-top: clamp(10px, 2.5cqb, 22px);
      position: relative; z-index: 10;
    }

    /* ── Headline ── */
    .au-headline {
      display: flex; flex-direction: column; align-items: center;
      margin-top: clamp(4px, 1cqb, 10px);
      position: relative; z-index: 10;
      text-align: center;
      padding: 0 5cqi;
    }
    .au-h1 {
      font-family: 'Cormorant Garamond', serif;
      font-weight: 300;
      font-size: clamp(18px, 5.5cqi, 40px);
      line-height: 1.1;
      letter-spacing: 0.06em;
      color: rgba(255,255,255,0.75);
      font-style: italic;
      margin: 0;
    }
    .au-h2 {
      font-family: 'Cormorant Garamond', serif;
      font-weight: 600;
      font-size: clamp(32px, 10cqi, 76px);
      line-height: 0.95;
      letter-spacing: 0.04em;
      color: #ffffff;
      margin: 0;
      text-shadow: 0 4px 32px rgba(212,175,55,0.15);
    }

    /* ── Photo: oval gold frame ── */
    .au-photo-wrap {
      flex: 1;
      min-height: 0;
      position: relative;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: clamp(10px, 2.5cqb, 22px);
      z-index: 9;
    }

    .au-photo-oval {
      position: relative;
      width: clamp(160px, 62cqi, 480px);
      height: clamp(130px, 48cqb, 380px);
      flex-shrink: 0;
    }

    /* Gold ring around photo */
    .au-photo-ring {
      position: absolute;
      inset: -clamp(4px, 1cqi, 8px);
      border-radius: 50%;
      border: 1px solid rgba(212,175,55,0.55);
      z-index: 2;
      pointer-events: none;
    }
    .au-photo-ring-outer {
      position: absolute;
      inset: -clamp(8px, 2cqi, 16px);
      border-radius: 50%;
      border: 1px solid rgba(212,175,55,0.2);
      z-index: 1;
      pointer-events: none;
    }

    .au-photo-oval img {
      position: absolute;
      inset: 0; width: 100%; height: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: 50%;
      display: block;
    }

    /* Subtext */
    .au-subtext {
      font-family: 'Jost', sans-serif;
      font-weight: 300;
      font-size: clamp(8px, 1.7cqi, 12px);
      line-height: 1.6;
      letter-spacing: 0.08em;
      color: rgba(255,255,255,0.38);
      text-align: center;
      padding: 0 10cqi;
      margin-top: clamp(10px, 2cqb, 18px);
      position: relative; z-index: 10;
    }

    /* ── Gold divider ── */
    .au-gold-divider {
      width: clamp(40px, 20cqi, 120px);
      height: 1px;
      background: linear-gradient(90deg, transparent, #d4af37, transparent);
      margin: clamp(8px, 1.8cqb, 16px) auto 0;
      position: relative; z-index: 10;
    }

    /* ── Bottom strip ── */
    .au-bottom {
      flex-shrink: 0;
      width: 100%;
      position: relative; z-index: 10;
      padding: clamp(10px, 2.2cqb, 20px) 6cqi clamp(16px, 4cqb, 36px);
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      gap: 8px;
    }

    /* Left: contact + CTA */
    .au-left {
      display: flex; flex-direction: column;
      gap: clamp(6px, 1.5cqb, 14px);
      min-width: 0;
    }
    .au-contact { display: flex; align-items: center; gap: clamp(7px, 1.5cqi, 12px); }
    .au-contact-icon {
      flex-shrink: 0;
      width: clamp(24px, 6cqi, 38px); height: clamp(24px, 6cqi, 38px);
      border-radius: 50%;
      border: 1px solid rgba(212,175,55,0.4);
      display: flex; align-items: center; justify-content: center;
    }
    .au-contact-icon svg { width: 40%; height: 40%; }
    .au-contact-label {
      font-size: clamp(6px, 1.2cqi, 9px);
      font-weight: 300; letter-spacing: 0.18em;
      text-transform: uppercase;
      color: rgba(212,175,55,0.5);
      display: block;
    }
    .au-contact-phone {
      font-family: 'Cormorant SC', serif;
      font-size: clamp(10px, 2.5cqi, 18px);
      font-weight: 400; color: rgba(255,255,255,0.85);
      letter-spacing: 0.05em;
      display: block;
      white-space: nowrap;
    }
    .au-cta {
      display: inline-flex; align-items: center; gap: clamp(6px, 1.2cqi, 10px);
      border: 1px solid rgba(212,175,55,0.6);
      border-radius: 2px;
      padding: clamp(5px, 1cqb, 10px) clamp(12px, 3cqi, 24px);
      background: rgba(212,175,55,0.06);
      cursor: pointer; width: fit-content;
      transition: background 0.2s;
    }
    .au-cta:hover { background: rgba(212,175,55,0.12); }
    .au-cta-text {
      font-family: 'Jost', sans-serif;
      font-size: clamp(8px, 1.8cqi, 12px);
      font-weight: 400; letter-spacing: 0.3em;
      text-transform: uppercase; color: #d4af37;
    }

    /* Right: offer callout */
    .au-offer {
      display: flex; flex-direction: column; align-items: flex-end; flex-shrink: 0;
    }
    .au-offer-label {
      font-family: 'Jost', sans-serif;
      font-size: clamp(6px, 1.2cqi, 9px);
      font-weight: 300; letter-spacing: 0.28em;
      text-transform: uppercase;
      color: rgba(212,175,55,0.5);
      margin-bottom: 1px;
    }
    .au-offer-value {
      font-family: 'Cormorant Garamond', serif;
      font-weight: 600; font-style: italic;
      font-size: clamp(28px, 9cqi, 68px);
      line-height: 0.9; color: #d4af37;
      letter-spacing: -0.01em; text-align: right;
    }
    .au-offer-suffix {
      font-family: 'Jost', sans-serif;
      font-size: clamp(7px, 1.6cqi, 11px);
      font-weight: 300; letter-spacing: 0.22em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.5); text-align: right;
    }
    .au-offer-price {
      font-family: 'Cormorant SC', serif;
      font-size: clamp(8px, 1.8cqi, 13px);
      font-weight: 400; color: rgba(212,175,55,0.7);
      letter-spacing: 0.1em; text-align: right;
      margin-top: 3px;
    }

    /* ── Container queries ── */
    @container au (max-aspect-ratio: 1.15/1) and (min-aspect-ratio: 0.82/1) {
      .au-h2 { font-size: clamp(28px, 8.5cqi, 62px); }
      .au-photo-oval { width: clamp(140px, 55cqi, 400px); height: clamp(110px, 40cqb, 320px); }
    }
    @container au (max-aspect-ratio: 0.65/1) {
      .au-h2 { font-size: clamp(36px, 11cqi, 82px); }
      .au-photo-oval { width: clamp(180px, 70cqi, 520px); height: clamp(145px, 55cqb, 420px); }
      .au-bottom { padding-bottom: clamp(20px, 5cqb, 48px); }
    }
    @container au (min-aspect-ratio: 1.55/1) {
      .au-h2 { font-size: clamp(24px, 7cqi, 56px); }
      .au-photo-oval { width: clamp(120px, 40cqi, 320px); height: clamp(96px, 35cqb, 280px); }
      .au-brand { padding-top: 3cqb; }
    }
  `,

  _phoneSVG() {
    return `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"
        stroke="rgba(212,175,55,0.7)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
  },

  _cornerSVG() {
    return `<svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4 L4 22 M4 4 L22 4" stroke="#d4af37" stroke-width="1" stroke-linecap="square"/>
      <path d="M4 4 L18 18" stroke="#d4af37" stroke-width="0.5" opacity="0.4"/>
      <circle cx="4" cy="4" r="2" fill="none" stroke="#d4af37" stroke-width="0.8"/>
    </svg>`;
  },

  render(s = {}) {
    const cfg = { ...this.defaults, ...s };
    const {
      tagline, headlineLine1, headlineLine2, subtext, img,
      offerLabel, offerValue, offerSuffix, offerPrice,
      reserveLabel, reservePhone, ctaText,
      brandName, brandSub,
    } = cfg;

    return `
<div class="tpl-aurum">
  <div class="au-bg"></div>
  <div class="au-grain"></div>
  <div class="au-vignette"></div>
  <div class="au-frame"></div>

  <div class="au-corner au-corner--tl">${this._cornerSVG()}</div>
  <div class="au-corner au-corner--tr">${this._cornerSVG()}</div>
  <div class="au-corner au-corner--bl">${this._cornerSVG()}</div>
  <div class="au-corner au-corner--br">${this._cornerSVG()}</div>

  <div class="au-shell">

    <div class="au-brand">
      <div class="au-brand-rule">
        <div class="au-brand-line"></div>
        <span class="au-brand-name">${brandName}</span>
        <div class="au-brand-line"></div>
      </div>
      <span class="au-brand-sub">${brandSub}</span>
    </div>

    <p class="au-tagline">— ${tagline} —</p>

    <div class="au-headline">
      <h2 class="au-h1">${headlineLine1}</h2>
      <h1 class="au-h2">${headlineLine2}</h1>
    </div>

    <div class="au-photo-wrap">
      <div class="au-photo-oval">
        <img src="${img}" alt="${headlineLine2}" />
        <div class="au-photo-ring"></div>
        <div class="au-photo-ring-outer"></div>
      </div>
    </div>

    <p class="au-subtext">${subtext}</p>
    <div class="au-gold-divider"></div>

    <div class="au-bottom">
      <div class="au-left">
        <div class="au-contact">
          <div class="au-contact-icon">${this._phoneSVG()}</div>
          <div>
            <span class="au-contact-label">${reserveLabel}</span>
            <span class="au-contact-phone">${reservePhone}</span>
          </div>
        </div>
        <div class="au-cta">
          <span class="au-cta-text">${ctaText}</span>
        </div>
      </div>
      <div class="au-offer">
        <span class="au-offer-label">${offerLabel}</span>
        <span class="au-offer-value">${offerValue}</span>
        <span class="au-offer-suffix">${offerSuffix}</span>
        <span class="au-offer-price">${offerPrice}</span>
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