// ═══════════════════════════════════════════════════════════
//  TEMPLATE: Galerie — Art Marketplace Hero
//  Category: Creative / Marketplace
//  Style:    Light editorial, oversized centered headline,
//            fanned artwork card stack, floating user badges,
//            minimal nav with icon actions, dual CTA
//  Best for: Art platforms, NFT marketplaces, creative tools,
//            portfolio showcases, design communities
//  Sizes:    Fully responsive — 1:1, 4:5, 16:9, wide
//
//  FONTS:    Uses CSS variables from global fonts.css
// ═══════════════════════════════════════════════════════════

module.exports = {
  id: 'galerie-art-hero',
  name: 'Galerie — Art Marketplace Hero',
  category: 'Creative / Marketplace',
  layout: 'hero',
  tags: ['art', 'marketplace', 'light', 'editorial', 'cards', 'creative', 'gallery', 'nft', 'portfolio'],

  defaults: {
    logo:         'Galerie',
    logoIcon:     '✦',
    navLinks:     'Discover · Artists · Pricing · Collections · Sell',
    headline:     'A place to display\nyour masterpiece.',
    subline:      'Artists share their finest work. Collectors find what moves them. Everyone belongs here.',
    ctaPrimary:   'Join for $9.99/m',
    ctaSecondary: 'Explore free',
    accent:       '#111111',
    bg:           '#f0efed',

    // Six artwork card images — replace with your own
    card1: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&q=85',
    card2: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=400&q=85',
    card3: 'https://images.unsplash.com/photo-1531913764164-f85c52e6e654?w=400&q=85',
    card4: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=400&q=85',
    card5: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=400&q=85',
    card6: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=400&q=85',
  },

  css: `
    /* ── Root ── */
    .tpl-galerie {
      container-type: size;
      container-name: gl;
      width: 100%; height: 100%;
      position: relative;
      overflow: hidden;
      font-family: var(--font-body, 'DM Sans', sans-serif);
      background: #f0efed;
    }

    /* ════════════════════════════════════════
       BACKGROUND — paper texture + radial light
    ════════════════════════════════════════ */
    .gl-bg {
      position: absolute; inset: 0; z-index: 0;
      /* Warm off-white radial — light source from center */
      background:
        radial-gradient(ellipse 70% 55% at 50% 42%,
          rgba(255,255,255,0.92) 0%,
          rgba(240,239,237,0.0) 100%
        ),
        /* Subtle paper grain */
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.028'/%3E%3C/svg%3E");
    }

    /* ════════════════════════════════════════
       CONTENT SHELL — three rows
    ════════════════════════════════════════ */
    .gl-shell {
      position: absolute; inset: 0; z-index: 2;
      display: grid;
      grid-template-rows: auto 1fr auto;
    }

    /* ════════════════════════════════════════
       NAV
    ════════════════════════════════════════ */
    .gl-nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 2.8cqb 4.5cqi 0;
      gap: 2cqi;
    }

    .gl-logo {
      display: flex;
      align-items: center;
      gap: 0.6cqi;
      flex-shrink: 0;
    }
    .gl-logo-icon {
      font-size: clamp(11px, 1.5cqi, 17px);
      color: #111;
      line-height: 1;
    }
    .gl-logo-name {
      font-family: var(--font-display, 'Bricolage Grotesque', sans-serif);
      font-weight: 700;
      font-size: clamp(12px, 1.6cqi, 18px);
      letter-spacing: -0.02em;
      color: #111;
    }

    .gl-nav-links {
      display: flex;
      align-items: center;
      gap: 2.5cqi;
      flex: 1;
      justify-content: center;
    }
    .gl-nav-link {
      font-size: clamp(9px, 1.1cqi, 12px);
      font-weight: 400;
      color: rgba(0,0,0,0.5);
      letter-spacing: 0.01em;
      white-space: nowrap;
    }

    .gl-nav-actions {
      display: flex;
      align-items: center;
      gap: 1cqi;
      flex-shrink: 0;
    }
    .gl-nav-icon {
      width: clamp(26px, 3.2cqi, 36px);
      height: clamp(26px, 3.2cqi, 36px);
      border-radius: 50%;
      border: 1px solid rgba(0,0,0,0.12);
      background: rgba(255,255,255,0.7);
      display: flex; align-items: center; justify-content: center;
      font-size: clamp(10px, 1.2cqi, 13px);
      color: rgba(0,0,0,0.5);
      cursor: default;
      backdrop-filter: blur(4px);
    }

    /* ════════════════════════════════════════
       HERO CENTER — headline + card fan + badges
    ════════════════════════════════════════ */
    .gl-hero {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 0 4cqi;
      gap: 0;
      overflow: visible;
    }

    /* ── Headline ── */
    .gl-headline {
      font-family: var(--font-playfair);
      font-weight: 800;
      font-size: clamp(28px, 7.8cqi, 100px);
      line-height: 1.06;
      letter-spacing: -0.04em;
      color: #0d0d0d;
      margin: 0 0 0 0;
      white-space: pre-line;
      max-width: 80%;
      position: relative;
      z-index: 5;
    }

    /* ── Card fan stage ── */
    .gl-stage {
      position: relative;
      width: 75cqi;
      height: 19cqb;
      margin: 0 0 5cqb 0;
      flex-shrink: 0;
    }

    /* Individual card */
    .gl-card {
      position: absolute;
      bottom: 0;
      left: 58%;
      width: clamp(80px, 13cqi, 160px);
      height: clamp(80px, 13cqi, 160px);
      border-radius: clamp(10px, 1.4cqi, 18px);
      overflow: hidden;
      box-shadow:
        0 4px 12px rgba(0,0,0,0.10),
        0 12px 32px rgba(0,0,0,0.10),
        0 0 0 1px rgba(0,0,0,0.06);
      transform-origin: bottom center;
      transition: transform 0.3s ease;
    }
    .gl-card img {
      width: 100%; height: 100%;
      object-fit: cover;
      display: block;
    }

    /* Fan angles — each card offset and rotated */
    .gl-card:nth-child(1) {
      transform: translateX(-250%) translateY(10%) rotate(-10deg);
      z-index: 1;
    }
    .gl-card:nth-child(2) {
      transform: translateX(-190%) translateY(3%) rotate(-3deg);
      z-index: 2;
    }
    .gl-card:nth-child(3) {
      transform: translateX(-110%) translateY(1%) rotate(-3deg);
      z-index: 3;
    }
    .gl-card:nth-child(4) {
      transform: translateX(-25%) translateY(1%) rotate(3deg);
      z-index: 3;
    }
    .gl-card:nth-child(5) {
      transform: translateX(50%) translateY(8%) rotate(7deg);
      z-index: 2;
    }
    

    /* ── Subline ── */
    .gl-subline {
      font-size: clamp(10px, 1.35cqi, 15px);
      font-weight: 400;
      color: rgba(0,0,0,0.42);
      line-height: 1.65;
      max-width: 48%;
      margin: 0;
      letter-spacing: 0.01em;
      position: relative;
      z-index: 5;
    }

    /* ════════════════════════════════════════
       BOTTOM — dual CTA
    ════════════════════════════════════════ */
    .gl-bottom {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.4cqi;
      padding: 0 4.5cqi 3.5cqb;
      flex-wrap: wrap;
    }

    .gl-cta-primary {
      padding: 1.05cqb 3cqi;
      border-radius: 999px;
      background: #0d0d0d;
      color: #ffffff;
      font-family: var(--font-playfair);
      font-weight: 400;
      font-size: clamp(10px, 1.2cqi, 14px);
      letter-spacing: 0.03em;
      cursor: default;
      white-space: nowrap;
      box-shadow:
        0 2px 6px rgba(0,0,0,0.15),
        0 6px 20px rgba(0,0,0,0.12);
    }

    .gl-cta-secondary {
      padding: 1.05cqb 2.5cqi;
      border-radius: 999px;
      background: transparent;
      border: 1px solid rgba(0,0,0,0.18);
      color: rgba(0,0,0,0.65);
      font-family: var(--font-body, 'DM Sans', sans-serif);
      font-weight: 400;
      font-size: clamp(10px, 1.2cqi, 14px);
      letter-spacing: 0.01em;
      cursor: default;
      white-space: nowrap;
      backdrop-filter: blur(4px);
    }

    /* ════════════════════════════════════════
       CONTAINER QUERIES
    ════════════════════════════════════════ */

    /* 1:1 Square */
    @container gl (max-aspect-ratio: 1.15/1) and (min-aspect-ratio: 0.82/1) {
      .gl-nav-links  { display: none; }
      .gl-headline   { font-size: clamp(24px, 7.2cqi, 80px); max-width: 92%; }
      .gl-subline    { max-width: 75%; }
      .gl-stage      { width: 88cqi; height: 18cqb; }
      .gl-card:nth-child(1) { transform: translateX(-255%) translateY(10%) rotate(-8deg); }
      .gl-card:nth-child(6) { transform: translateX(150%) translateY(10%) rotate(18deg); }
    }

    /* Portrait 4:5 */
    @container gl (max-aspect-ratio: 0.82/1) {
      .gl-nav-links  { display: none; }
      .gl-headline   { font-size: clamp(26px, 8cqi, 90px); max-width: 95%; }
      .gl-subline    { max-width: 85%; }
      .gl-stage      { width: 92cqi; height: 21cqb; }
    }

    /* Wide 16:9+ */
    @container gl (min-aspect-ratio: 1.55/1) {
      .gl-headline { font-size: clamp(28px, 6.8cqi, 92px); max-width: 72%; }
      .gl-subline  { max-width: 40%; }
      .gl-stage    { width: 65cqi; height: 18cqb; }
    }
  `,

  render(s) {
    const accent = s.accent || '#111111';

    const links = (s.navLinks || '').split('·').map(l =>
      `<span class="gl-nav-link">${l.trim()}</span>`
    ).join('');

    return `
    <div class="tpl-galerie" style="background:${s.bg}">

      <!-- Background -->
      <div class="gl-bg"></div>

      <!-- Shell -->
      <div class="gl-shell">

        <!-- Nav -->
        <nav class="gl-nav">
          <div class="gl-logo">
            <span class="gl-logo-icon">${s.logoIcon}</span>
            <span class="gl-logo-name">${s.logo}</span>
          </div>
          <div class="gl-nav-links">${links}</div>
          <div class="gl-nav-actions">
            <div class="gl-nav-icon">☺</div>
            <div class="gl-nav-icon">✦</div>
          </div>
        </nav>

        <!-- Hero -->
        <div class="gl-hero">

          <!-- Headline -->
          <h1 class="gl-headline">${s.headline}</h1>

          <!-- Card fan -->
          <div class="gl-stage">
            <div class="gl-card"><img src="${s.card1}" alt="" /></div>
            <div class="gl-card"><img src="${s.card2}" alt="" /></div>
            <div class="gl-card"><img src="${s.card3}" alt="" /></div>
            <div class="gl-card"><img src="${s.card4}" alt="" /></div>
            <div class="gl-card"><img src="${s.card5}" alt="" /></div>
          </div>

          <!-- Subline -->
          <p class="gl-subline">${s.subline}</p>

        </div>

        <!-- CTAs -->
        <div class="gl-bottom">
          <div class="gl-cta-primary" style="background:${accent}">${s.ctaPrimary}</div>
          <div class="gl-cta-secondary">${s.ctaSecondary}</div>
        </div>

      </div>
    </div>`;
  }
};