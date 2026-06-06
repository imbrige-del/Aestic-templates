// ═══════════════════════════════════════════════════════════
//  TEMPLATE: Atelier Lumière — Luxury Interior Hero
//  Category: Interior / Lifestyle
//  Style:    Split-canvas composition — left dark editorial
//            panel with stacked type, right raw photography
//            panel with floating metadata. Art-deco rule
//            system. Grain texture. Film counter aesthetic.
//  Best for: Interior design studios, luxury real estate,
//            architecture firms, high-end hospitality brands
//  Sizes:    Fully responsive — 1:1, 4:5, 9:16, 16:9, wide
// ═══════════════════════════════════════════════════════════

export default {
  id: 'atelier-lumiere-hero',
  name: 'Atelier Lumière — Luxury Interior Hero',
  category: 'Interior / Lifestyle',
  layout: 'hero',
  tags: ['hero', 'interior', 'luxury', 'split', 'editorial', 'dark', 'architecture', 'premium', 'artdeco'],

  defaults: {
    collectionLabel: 'Collection 01',
    brand:           'ATELIER',
    brandAccent:     'LUMIÈRE',
    tagline:         'Crafting spaces\nthat breathe.',
    descriptor:      'Every room is a composition. We design with silence, with shadow, and with the quiet confidence of materials chosen for a lifetime.',
    ctaLabel:        'Explore Spaces',
    season:          'SS 2025',
    locationTag:     'Paris · Milan · Mumbai',
    accent:          '#c9a96e',
    bg:              '#0a0908',
    img:             'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=90',
  },

  css: `
    @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Outfit:wght@200;300;400&display=swap');

    /* ── Root ── */
    .tpl-atelier {
      container-type: size;
      container-name: at;
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;
      font-family: 'Outfit', sans-serif;
      background: #0a0908;
    }

    /* ════════════════════════════════════════
       SPLIT CANVAS — left panel + right panel
    ════════════════════════════════════════ */
    .at-canvas {
      position: absolute; inset: 0;
      display: grid;
      grid-template-columns: 48% 52%;
    }

    /* ── Left: dark editorial panel ── */
    .at-left {
      position: relative;
      background: #0a0908;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 5cqb 5cqi 5cqb 7.5cqi;
      z-index: 2;
    }

    /* Grain texture overlay on left panel */
    .at-left::after {
      content: '';
      position: absolute; inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
      pointer-events: none;
      z-index: 0;
    }

    /* ── Right: raw photo panel ── */
    .at-right {
      position: relative;
      overflow: hidden;
    }
    .at-right img {
      position: absolute; inset: 0;
      width: 100%; height: 100%;
      object-fit: cover;
      object-position: center 30%;
      filter: brightness(0.62) saturate(0.75) contrast(1.05);
    }

    /* Subtle dark vignette on photo edges */
    .at-right::after {
      content: '';
      position: absolute; inset: 0;
      background:
        linear-gradient(to left,  transparent 60%, rgba(10,9,8,0.55) 100%),
        linear-gradient(to top,   rgba(10,9,8,0.5) 0%, transparent 30%),
        linear-gradient(to bottom,rgba(10,9,8,0.4) 0%, transparent 25%);
      z-index: 1;
    }

    /* Thin gold seam between panels */
    .at-seam {
      position: absolute;
      top: 0;
      left: 48%;
      width: 1px;
      height: 100%;
      background: linear-gradient(
        180deg,
        transparent       0%,
        rgba(201,169,110,0.5) 15%,
        rgba(201,169,110,0.5) 85%,
        transparent       100%
      );
      z-index: 10;
      pointer-events: none;
    }

    /* ════════════════════════════════════════
       LEFT PANEL ZONES
    ════════════════════════════════════════ */

    /* — Top meta bar — */
    .at-top {
      position: relative; z-index: 1;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    .at-collection {
      display: flex;
      flex-direction: column;
      gap: 0.8cqb;
    }

    .at-collection-label {
      font-weight: 200;
      font-size: clamp(7px, 1.1cqi, 11px);
      letter-spacing: 0.45em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.35);
      line-height: 1;
    }

    /* Art-deco double rule */
    .at-deco-rule {
      display: flex;
      flex-direction: column;
      gap: 2px;
      width: clamp(28px, 4cqi, 52px);
    }
    .at-deco-rule span {
      display: block;
      height: 1px;
      background: rgba(201,169,110,0.55);
    }
    .at-deco-rule span:last-child {
      width: 50%;
      opacity: 0.5;
    }

    .at-season {
      font-weight: 200;
      font-size: clamp(7px, 1cqi, 10px);
      letter-spacing: 0.38em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.22);
      text-align: right;
    }

    /* — Middle: stacked headline — */
    .at-mid {
      position: relative; z-index: 1;
      display: flex;
      flex-direction: column;
      gap: 0;
    }

    /* Eyebrow */
    .at-eyebrow {
      display: flex;
      align-items: center;
      gap: 1.4cqi;
      margin-bottom: 2.2cqb;
    }
    .at-eyebrow-pip {
      width: clamp(5px, 0.7cqi, 8px);
      height: clamp(5px, 0.7cqi, 8px);
      border: 1px solid;
      transform: rotate(45deg);
      flex-shrink: 0;
    }
    .at-eyebrow-text {
      font-weight: 200;
      font-size: clamp(7px, 1.1cqi, 11px);
      letter-spacing: 0.46em;
      text-transform: uppercase;
    }

    /* Brand name — stacked, alternating weight */
    .at-brand-stack {
      display: flex;
      flex-direction: column;
      gap: 0;
      margin-bottom: 2.8cqb;
    }

    .at-brand-main {
      font-family: 'Libre Baskerville', Georgia, serif;
      font-weight: 400;
      font-size: clamp(38px, 8.5cqi, 110px);
      line-height: 0.88;
      letter-spacing: 0.12em;
      color: #f0ebe2;
      margin: 0;
    }

    /* Accent word — italic, offset right, outlined */
    .at-brand-accent {
      font-family: 'Libre Baskerville', Georgia, serif;
      font-weight: 400;
      font-style: italic;
      font-size: clamp(26px, 5.8cqi, 76px);
      line-height: 1;
      letter-spacing: 0.18em;
      color: transparent;
      -webkit-text-stroke: 1px rgba(201,169,110,0.7);
      margin: 0;
      padding-left: 0.12em;   /* optical offset — feels intentional */
    }

    /* Thin full-width rule */
    .at-brand-divider {
      width: 100%;
      height: 1px;
      background: linear-gradient(to right, rgba(201,169,110,0.3), transparent);
      margin: 2.2cqb 0;
    }

    /* Tagline */
    .at-tagline {
      font-family: 'Libre Baskerville', Georgia, serif;
      font-style: italic;
      font-weight: 400;
      font-size: clamp(13px, 2.2cqi, 24px);
      color: rgba(240,235,226,0.5);
      line-height: 1.5;
      margin: 0;
      white-space: pre-line;
      letter-spacing: 0.01em;
    }

    /* — Bottom: descriptor + CTA — */
    .at-bottom {
      position: relative; z-index: 1;
      display: flex;
      flex-direction: column;
      gap: 1.6cqb;
    }

    .at-bottom-rule {
      width: 100%;
      height: 1px;
      background: rgba(255,255,255,0.07);
    }

    .at-descriptor {
      font-weight: 300;
      font-size: clamp(9px, 1.2cqi, 12px);
      color: rgba(255,255,255,0.28);
      line-height: 1.95;
      letter-spacing: 0.025em;
      margin: 0;
    }

    .at-cta {
      display: inline-flex;
      align-items: center;
      gap: 1.2cqi;
      cursor: default;
    }
    .at-cta-text {
      font-weight: 200;
      font-size: clamp(8px, 1.05cqi, 11px);
      letter-spacing: 0.42em;
      text-transform: uppercase;
    }
    .at-cta-arrow {
      display: flex;
      align-items: center;
      gap: 0.5cqi;
    }
    .at-cta-arrow-line {
      height: 1px;
      width: clamp(16px, 2.5cqi, 30px);
    }
    .at-cta-arrow-head {
      width: clamp(4px, 0.6cqi, 7px);
      height: clamp(4px, 0.6cqi, 7px);
      border-top: 1px solid;
      border-right: 1px solid;
      transform: rotate(45deg);
      margin-left: -0.4cqi;
    }

    /* ════════════════════════════════════════
       RIGHT PANEL OVERLAYS
    ════════════════════════════════════════ */

    /* Film-style counter strip — top right */
    .at-film-strip {
      position: absolute;
      top: 4cqb;
      right: 3cqi;
      z-index: 3;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 0.7cqb;
    }

    .at-film-num {
      font-family: 'Libre Baskerville', Georgia, serif;
      font-weight: 400;
      font-size: clamp(28px, 5.5cqi, 68px);
      color: rgba(255,255,255,0.06);
      line-height: 1;
      letter-spacing: -0.02em;
    }

    .at-film-label {
      font-weight: 200;
      font-size: clamp(6px, 0.9cqi, 9px);
      letter-spacing: 0.4em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.22);
    }

    /* Location tag — bottom right of photo */
    .at-location-tag {
      position: absolute;
      bottom: 4.5cqb;
      right: 3cqi;
      z-index: 3;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 0.6cqb;
    }

    .at-location-pip {
      width: clamp(4px, 0.55cqi, 6px);
      height: clamp(4px, 0.55cqi, 6px);
      border-radius: 50%;
      align-self: flex-end;
    }

    .at-location-text {
      font-weight: 200;
      font-size: clamp(7px, 1cqi, 10px);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.3);
      text-align: right;
    }

    /* ════════════════════════════════════════
       CONTAINER QUERIES — per-format
    ════════════════════════════════════════ */

    /* Square 1:1 — stack vertical, single panel */
    @container at (max-aspect-ratio: 1.1/1) and (min-aspect-ratio: 0.82/1) {
      .at-canvas       { grid-template-columns: 52% 48%; }
      .at-descriptor   { display: none; }
      .at-season       { display: none; }
      .at-brand-main   { font-size: clamp(34px, 8cqi, 90px); }
      .at-brand-accent { font-size: clamp(24px, 5.5cqi, 64px); }
      .at-tagline      { font-size: clamp(12px, 2cqi, 20px); }
    }

    /* Portrait 4:5 */
    @container at (max-aspect-ratio: 0.82/1) {
      .at-canvas {
        grid-template-columns: 1fr;
        grid-template-rows: 55% 45%;
      }
      .at-seam {
        top: 55%; left: 0;
        width: 100%; height: 1px;
        background: linear-gradient(90deg, transparent, rgba(201,169,110,0.5), transparent);
      }
      .at-right { order: -1; }
      .at-left  {
        padding: 4cqb 6cqi 4cqb 6cqi;
        justify-content: space-between;
      }
      .at-brand-main   { font-size: clamp(36px, 9cqi, 100px); }
      .at-brand-accent { font-size: clamp(24px, 6.2cqi, 70px); }
      .at-tagline      { font-size: clamp(13px, 2.4cqi, 22px); }
      .at-film-strip   { top: 3cqb; right: 4cqi; }
    }

    /* Wide 16:9+ */
    @container at (min-aspect-ratio: 1.6/1) {
      .at-canvas       { grid-template-columns: 44% 56%; }
      .at-brand-main   { font-size: clamp(40px, 7.5cqi, 100px); }
      .at-brand-accent { font-size: clamp(28px, 5.2cqi, 68px); }
      .at-descriptor   { display: block; }
    }
  `,

  render(s) {
    const accent     = s.accent || '#c9a96e';
    const accentDim  = `${accent}55`;
    const accentMid  = `${accent}88`;
    const accentBold = `${accent}bb`;
    const accentFull = `${accent}ee`;

    return `
    <div class="tpl-atelier" style="background:${s.bg}">

      <!-- Split canvas -->
      <div class="at-canvas">

        <!-- ══ LEFT PANEL ══ -->
        <div class="at-left">

          <!-- Top meta -->
          <div class="at-top">
            <div class="at-collection">
              <div class="at-collection-label">${s.collectionLabel}</div>
              <div class="at-deco-rule">
                <span style="background:${accentBold}"></span>
                <span style="background:${accentMid}"></span>
              </div>
            </div>
            <div class="at-season">${s.season}</div>
          </div>

          <!-- Headline block -->
          <div class="at-mid">
            <div class="at-eyebrow">
              <div class="at-eyebrow-pip" style="border-color:${accentBold}"></div>
              <div class="at-eyebrow-text" style="color:${accentFull}">${s.collectionLabel}</div>
            </div>

            <div class="at-brand-stack">
              <span class="at-brand-main">${s.brand}</span>
              <span class="at-brand-accent" style="-webkit-text-stroke:1px ${accentBold}">${s.brandAccent}</span>
            </div>

            <div class="at-brand-divider" style="background:linear-gradient(to right,${accentDim},transparent)"></div>

            <p class="at-tagline">${s.tagline}</p>
          </div>

          <!-- Bottom -->
          <div class="at-bottom">
            <div class="at-bottom-rule"></div>
            <p class="at-descriptor">${s.descriptor}</p>
            <div class="at-cta" style="color:${accentFull}">
              <span class="at-cta-text">${s.ctaLabel}</span>
              <div class="at-cta-arrow">
                <div class="at-cta-arrow-line" style="background:${accentBold}"></div>
                <div class="at-cta-arrow-head" style="border-color:${accentBold}"></div>
              </div>
            </div>
          </div>

        </div>

        <!-- ══ RIGHT PANEL ══ -->
        <div class="at-right">
          <img src="${s.img}" alt="" />

          <!-- Film counter — top right -->
          <div class="at-film-strip">
            <div class="at-film-num">01</div>
            <div class="at-film-label">${s.season}</div>
          </div>

          <!-- Location tag — bottom right -->
          <div class="at-location-tag">
            <div class="at-location-pip" style="background:${accentMid}"></div>
            <div class="at-location-text">${s.locationTag}</div>
          </div>
        </div>

      </div>

      <!-- Gold panel seam -->
      <div class="at-seam"></div>

    </div>`;
  }
};