// ═══════════════════════════════════════════════════════════
//  TEMPLATE: Renoria Hero
//  Category: Interior / Lifestyle
//  Style:    Full-bleed cinematic split-grid photo, giant
//            glass-text brand name, editorial bottom bar
//  Best for: Interior design, architecture, luxury lifestyle,
//            real-estate, hospitality brands
// ═══════════════════════════════════════════════════════════

module.exports = {
  id: 'renoria-hero',
  name: 'Renoria Hero',
  category: 'Interior / Lifestyle',
  layout: 'hero',
  tags: ['hero', 'interior', 'luxury', 'lifestyle', 'dark', 'editorial', 'architecture'],

  defaults: {
    brand:          'RENORIA',
    tagline:        'At Renoria, we craft interiors that go beyond decoration - spaces that tell stories, shape emotions, and redefine the way people live, work, and connect.',
    scrollLabel:    'Scroll left',
    bg:             '#1a110a',
    imgMain:        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80',
    imgTopRight:    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
    imgBottomRight: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80',
  },

  css: `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Jost:wght@300;400&display=swap');

    .tpl-renoria-hero {
      container-type: size;
      container-name: rn;
      width: 100%; height: 100%;
      position: relative;
      overflow: hidden;
      font-family: 'Jost', sans-serif;
    }

    /* ── Split background grid ── */
    .rn-bg {
      position: absolute; inset: 0;
      display: grid;
      grid-template-columns: 55% 45%;
      grid-template-rows: 70% 30%;
      gap: 3px;
      z-index: 0;
    }
    .rn-bg-cell {
      overflow: hidden;
      position: relative;
    }
    .rn-bg-cell img {
      width: 100%; height: 100%;
      object-fit: cover;
      display: block;
      filter: brightness(0.52) saturate(0.85);
    }
    .rn-bg-cell--main {
      grid-column: 1;
      grid-row: 1 / 3;
    }
    .rn-bg-cell--tr {
      grid-column: 2;
      grid-row: 1;
    }
    .rn-bg-cell--br {
      grid-column: 2;
      grid-row: 2;
    }

    /* ── Vignette overlays ── */
    .rn-vignette {
      position: absolute; inset: 0;
      background:
        radial-gradient(ellipse at 30% 60%, transparent 30%, rgba(10,6,2,0.55) 100%),
        linear-gradient(to right, rgba(10,6,2,0.45) 0%, transparent 80%),
        linear-gradient(to top,   rgba(10,6,2,0.55) 0%, transparent 60%);
      z-index: 1;
      pointer-events: none;
    }

    /* ── Content layer ── */
    .rn-content {
      position: absolute; inset: 0;
      z-index: 2;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 5cqb 5cqi 4cqb;
    }

    /* ── Giant brand name ── */
    .rn-brand {
      font-family: 'Playfair Display', Georgia, serif;
      font-weight: 900;
      font-size: clamp(80px, 22cqi, 320px);
      line-height: 0.88;
      letter-spacing: -0.01em;
      margin: 0 auto;
      text-align: center;
      color: transparent;
      -webkit-text-stroke: 1.5px rgba(255,255,255,0.8);
      background: linear-gradient(
        135deg,
        rgb(220, 210, 200) 0%,
        rgba(140, 190, 210, 0.80) 55%,
        rgba(200, 195, 210, 0.90) 80%,
        rgba(240, 230, 220, 0.90) 100%
      );
      -webkit-background-clip: text;
      background-clip: text;
      mix-blend-mode: screen;
      user-select: none;
    }

    /* ── Bottom bar ── */
    .rn-bottom {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      gap: 3cqi;
    }

    /* ── Tagline ── */
    .rn-tagline {
      max-width: 40cqi;
      color: rgba(255,255,255,0.82);
      font-size: clamp(10px, 1.4cqi, 14px);
      font-weight: 300;
      line-height: 1.7;
      letter-spacing: 0.01em;
      margin: 0;
    }

    /* ── Scroll CTA ── */
    .rn-scroll {
      display: flex;
      align-items: center;
      gap: 8px;
      color: rgba(255,255,255,0.6);
      font-size: clamp(9px, 1.1cqi, 11px);
      letter-spacing: 0.14em;
      text-transform: uppercase;
      cursor: default;
      white-space: nowrap;
      flex-shrink: 0;
    }

    /* ════════════════════════════════════════
       CONTAINER QUERIES
    ════════════════════════════════════════ */

    /* 1:1 Square */
    @container rn (max-aspect-ratio: 1.15/1) and (min-aspect-ratio: 0.82/1) {
      .rn-brand   { font-size: clamp(72px, 20cqi, 260px); }
      .rn-tagline { max-width: 50cqi; font-size: clamp(9px, 1.3cqi, 13px); }
    }

    /* Portrait 4:5 / 9:16 */
    @container rn (max-aspect-ratio: 0.82/1) {
      .rn-brand   { font-size: clamp(68px, 22cqi, 260px); }
      .rn-tagline { max-width: 65cqi; font-size: clamp(9px, 1.5cqi, 13px); }
      .rn-bottom  { flex-direction: column; align-items: flex-start; gap: 2cqb; }
    }

    /* Wide 16:9+ */
    @container rn (min-aspect-ratio: 1.55/1) {
      .rn-brand   { font-size: clamp(80px, 18cqi, 300px); }
      .rn-tagline { max-width: 35cqi; }
    }
  `,

  render(s) {
    return `
    <div class="tpl-renoria-hero" style="background:${s.bg}">

      <div class="rn-bg">
        <div class="rn-bg-cell rn-bg-cell--main">
          <img src="${s.imgMain}" alt="" />
        </div>
        <div class="rn-bg-cell rn-bg-cell--tr">
          <img src="${s.imgTopRight}" alt="" />
        </div>
        <div class="rn-bg-cell rn-bg-cell--br">
          <img src="${s.imgBottomRight}" alt="" />
        </div>
      </div>

      <div class="rn-vignette"></div>

      <div class="rn-content">
        <h1 class="rn-brand">${s.brand}</h1>
        <div class="rn-bottom">
          <p class="rn-tagline">${s.tagline}</p>
          <div class="rn-scroll">
            <span>${s.scrollLabel}</span>
            <span>→</span>
          </div>
        </div>
      </div>

    </div>`;
  }
};