// ─────────────────────────────────────────────
//  TEMPLATE: Deconstructed Collage
//  Category: Fashion / Lifestyle
//  Layout:   asymmetric-collage
//
//  Design concept: Nothing is aligned.
//  Text blocks rotate slightly. Elements
//  overlap intentionally. One tall photo
//  column, one chaotic text field. Feels
//  like a physical mood board / zine page.
//  Think: Bottega Veneta campaign, A-COLD-WALL.
// ─────────────────────────────────────────────

export default {
  id: 'creative-collage',
  name: 'Deconstructed Collage',
  category: 'Fashion',
  layout: 'asymmetric-collage',
  tags: ['fashion', 'editorial', 'collage', 'zine', 'luxury', 'creative', 'art', 'asymmetric', 'lifestyle'],

  defaults: {
    brand:     'AETHER',
    season:    'SS 25',
    headline:  'UNFORMED.',
    word1:     'TEXTURE',
    word2:     'VOID',
    word3:     'BREATH',
    desc:      'A collection built on restraint. On the weight of silence. On what is left unsaid.',
    material:  '100% Organic Wool · Hand-finished · Limited Run',
    price:     '¥ 48,000',
    cta:       'VIEW COLLECTION',
    handle:    '@aether.studio',
    accent:    '#e8e0d5',    // off-white parchment
    accent2:   '#c4a882',    // warm sand
    bg:        '#111010',    // near-black
    text:      '#e8e0d5',
    img:       'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },

  css: `
    @import url('https://fonts.googleapis.com/css2?family=Tusker+Grotesk:wght@3,700;4,700;6,700;7,900&family=PP+Hatton:wght@400;700&family=Instrument+Serif:ital@0;1&family=Space+Grotesk:wght@300;400&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital,wght@0,400;1,400&family=Space+Grotesk:wght@300;400;500&display=swap');

    .tpl-collage {
      width: 100%; height: 100%;
      background: var(--bg);
      color: var(--parchment);
      position: relative;
      overflow: hidden;
    }

    /* ── PHOTO COLUMN — left 45% ── */
    .col-photo {
      position: absolute;
      left: 0; top: 0;
      width: 46%; height: 100%;
      overflow: hidden;
    }
    .col-photo img {
      width: 100%; height: 100%;
      object-fit: cover;
      object-position: center top;
      display: block;
    }
    /* Gradient fade on right edge */
    .col-photo::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        to right,
        transparent 50%,
        var(--bg) 100%
      );
    }
    /* Gradient fade on top */
    .col-photo::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        to bottom,
        var(--bg) 0%,
        transparent 15%,
        transparent 80%,
        var(--bg) 100%
      );
      z-index: 2;
    }

    /* ── BRAND stamp — top left, rotated ── */
    .col-brand {
      position: absolute;
      top: 32px; left: 28px;
      z-index: 20;
      transform: rotate(-1.5deg);
    }
    .col-brand-name {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 10px;
      font-weight: 500;
      letter-spacing: 6px;
      text-transform: uppercase;
      color: var(--sand);
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .col-brand-name::after {
      content: '';
      width: 20px; height: 1px;
      background: var(--sand);
      opacity: 0.5;
    }
    .col-season {
      font-family: 'Instrument Serif', serif;
      font-style: italic;
      font-size: 11px;
      color: rgba(232,224,213,0.4);
      margin-top: 3px;
      letter-spacing: 2px;
    }

    /* ── TEXT FIELD — right 60%, overlapping photo ── */
    .col-text {
      position: absolute;
      right: 0; top: 0;
      width: 66%; height: 100%;
      display: flex;
      flex-direction: column;
      padding: 28px 28px 28px 20px;
      z-index: 10;
    }

    /* Spacer — pushes content down slightly */
    .col-spacer { flex: 1; }

    /* Huge headline — offset and slightly rotated */
    .col-headline-wrap {
      position: relative;
      margin-bottom: 0;
    }
    .col-headline {
      font-family: 'Instrument Serif', serif;
      font-size: 100px;
      font-weight: 400;
      line-height: 0.85;
      letter-spacing: -4px;
      color: var(--parchment);
      display: block;
      transform: rotate(-0.8deg);
      transform-origin: left top;
    }

    /* floating word stack — overlapping the headline */
    .col-words {
      position: absolute;
      right: 0;
      top: -20px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 2px;
      z-index: 15;
    }
    .col-word {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 8px;
      font-weight: 500;
      letter-spacing: 4px;
      text-transform: uppercase;
      color: var(--sand);
      opacity: 0.5;
      line-height: 1.8;
    }

    /* Thin horizontal rule */
    .col-rule {
      width: 100%;
      height: 1px;
      background: rgba(232,224,213,0.12);
      margin: 20px 0 18px;
    }

    /* desc — angled slightly */
    .col-desc {
      font-family: 'Instrument Serif', serif;
      font-style: italic;
      font-size: 15px;
      line-height: 1.65;
      color: rgba(232,224,213,0.6);
      max-width: 270px;
      transform: rotate(0.5deg);
      margin-bottom: 20px;
    }

    /* material line */
    .col-material {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 9px;
      font-weight: 300;
      letter-spacing: 1.5px;
      color: rgba(232,224,213,0.25);
      margin-bottom: 24px;
    }

    /* price + cta row */
    .col-action {
      display: flex;
      align-items: baseline;
      gap: 20px;
      flex-wrap: wrap;
    }
    .col-price {
      font-family: 'Instrument Serif', serif;
      font-size: 26px;
      color: var(--parchment);
      letter-spacing: -0.5px;
    }
    .col-cta {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 9px;
      font-weight: 500;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: var(--sand);
      border-bottom: 1px solid var(--sand);
      padding-bottom: 2px;
      cursor: default;
    }

    /* handle — bottom right, very subtle */
    .col-handle {
      position: absolute;
      bottom: 28px; right: 28px;
      font-family: 'Space Grotesk', sans-serif;
      font-size: 9px;
      font-weight: 300;
      letter-spacing: 2px;
      color: rgba(232,224,213,0.2);
      z-index: 20;
    }

    /* Decorative corner mark */
    .col-corner {
      position: absolute;
      bottom: 24px; left: 24px;
      z-index: 20;
      width: 20px; height: 20px;
      border-left: 1px solid rgba(196,168,130,0.3);
      border-bottom: 1px solid rgba(196,168,130,0.3);
    }
  `,

  render(s) {
    const initial = (s.brand || 'A')[0];
    return `
      <div class="tpl-collage" style="
        --bg: ${s.bg};
        --parchment: ${s.accent};
        --sand: ${s.accent2 || '#c4a882'};
      ">
        <!-- Photo -->
        <div class="col-photo">
          <img src="${s.img}" alt="" crossorigin="anonymous"/>
        </div>

        <!-- Brand -->
        <div class="col-brand">
          <div class="col-brand-name">${s.brand}</div>
          <div class="col-season">${s.season}</div>
        </div>

        <!-- Text field -->
        <div class="col-text">
          <div class="col-spacer"></div>

          <!-- Giant headline with floating words -->
          <div class="col-headline-wrap">
            <span class="col-headline">${s.headline}</span>
            <div class="col-words">
              <span class="col-word">${s.word1}</span>
              <span class="col-word">${s.word2}</span>
              <span class="col-word">${s.word3}</span>
            </div>
          </div>

          <div class="col-rule"></div>
          <div class="col-desc">${s.desc}</div>
          <div class="col-material">${s.material}</div>

          <div class="col-action">
            <span class="col-price">${s.price}</span>
            <span class="col-cta">${s.cta} ↗</span>
          </div>
        </div>

        <!-- Handle + corner decorations -->
        <div class="col-handle">${s.handle}</div>
        <div class="col-corner"></div>
      </div>`;
  }
};