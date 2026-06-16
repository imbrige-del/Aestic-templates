// ═══════════════════════════════════════════════════════════
//  TEMPLATE: Versum — Tech Editorial Hero
//  Category: Technology / Business
//  Style:    Clean white editorial with centered bold serif
//            headline, centered subline, full-bleed B&W
//            photo bleeding from bottom, logo top-right.
//            Inspired by tech-meets-humanity brand campaigns.
//  Best for: AI, robotics, SaaS, innovation brands,
//            thought-leadership content, LinkedIn posts
//  Sizes:    Fully responsive — 1:1, 4:5, 16:9, wide
// ═══════════════════════════════════════════════════════════

module.exports = {
  id: 'versum-tech-hero',
  name: 'Versum — Tech Editorial Hero',
  category: 'Technology / Business',
  layout: 'hero',
  tags: ['tech', 'editorial', 'white', 'minimal', 'ai', 'business', 'bold', 'professional', 'robotics'],

  defaults: {
    logo:        'versum',
    logoIcon:    '❖',
    headline:    'How Robots Will Help\nShape Our Future Work',
    subline:     'Where Artificial Intelligence meets Robotics to create smarter innovations',
    accent:      '#111111',
    bg:          '#f5f5f3',
    cardBg:      '#ffffff',
    img:         'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1000&q=90',
  },

  css: `
    @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=DM+Serif+Display:ital@0;1&display=swap');

    /* ── Root wrapper ── */
    .tpl-versum {
      container-type: size;
      container-name: vs;
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;
      font-family: 'Sora', sans-serif;
      background: #f5f5f3;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* ── Outer bg texture — very subtle grid ── */
    .vs-bg-grid {
      position: absolute; inset: 0;
      background-image:
        linear-gradient(rgba(0,0,0,0.028) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,0,0,0.028) 1px, transparent 1px);
      background-size: clamp(24px, 4cqi, 48px) clamp(24px, 4cqi, 48px);
      z-index: 0;
    }

    /* ── Card ── */
    .vs-card {
      position: relative;
      z-index: 1;
      width: 90cqi;
      height: 90cqb;
      max-width: 90cqi;
      background: #ffffff;
      border-radius: clamp(8px, 1.2cqi, 18px);
      overflow: hidden;
      display: flex;
      flex-direction: column;

      /* Layered shadow — premium depth */
      box-shadow:
        0 2px 4px rgba(0,0,0,0.04),
        0 8px 24px rgba(0,0,0,0.08),
        0 32px 64px rgba(0,0,0,0.10),
        inset 0 0 0 1px rgba(0,0,0,0.06);
    }

    /* ════════════════════════════════════
       TOP SECTION — logo + headline area
    ════════════════════════════════════ */
    .vs-top {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 4cqb 6cqi 2cqb;
      flex-shrink: 0;
    }

    /* ── Logo row ── */
    .vs-logo-row {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-bottom: 3cqb;
    }

    .vs-logo {
      display: flex;
      align-items: center;
      gap: 0.6cqi;
    }

    .vs-logo-icon {
      font-size: clamp(10px, 1.6cqi, 16px);
      color: #111;
      line-height: 1;
    }

    .vs-logo-name {
      font-family: 'Sora', sans-serif;
      font-weight: 600;
      font-size: clamp(11px, 1.7cqi, 17px);
      letter-spacing: 0.04em;
      color: #111;
    }

    /* ── Eyebrow tag ── */
    .vs-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 0.8cqi;
      margin-bottom: 2cqb;
    }
    .vs-eyebrow-dot {
      width: clamp(5px, 0.7cqi, 8px);
      height: clamp(5px, 0.7cqi, 8px);
      border-radius: 50%;
      background: #111;
      flex-shrink: 0;
    }
    .vs-eyebrow-text {
      font-size: clamp(7px, 1.05cqi, 11px);
      font-weight: 400;
      letter-spacing: 0.38em;
      text-transform: uppercase;
      color: rgba(0,0,0,0.4);
    }

    /* ── Main headline ── */
    .vs-headline {
      font-family: 'DM Serif Display', Georgia, serif;
      font-weight: 400;
      font-size: clamp(22px, 5.8cqi, 72px);
      line-height: 1.1;
      letter-spacing: -0.01em;
      color: #0d0d0d;
      text-align: center;
      white-space: pre-line;
      margin: 0 0 2.2cqb 0;
      max-width: 88%;
    }

    /* ── Thin rule between headline and subline ── */
    .vs-mid-divider {
      display: flex;
      align-items: center;
      gap: 1.5cqi;
      width: 60%;
      margin-bottom: 2cqb;
    }
    .vs-mid-divider-line {
      flex: 1;
      height: 1px;
      background: rgba(0,0,0,0.1);
    }
    .vs-mid-divider-pip {
      width: clamp(4px, 0.6cqi, 7px);
      height: clamp(4px, 0.6cqi, 7px);
      border: 1px solid rgba(0,0,0,0.25);
      transform: rotate(45deg);
      flex-shrink: 0;
    }

    /* ── Subline ── */
    .vs-subline {
      font-family: 'Sora', sans-serif;
      font-weight: 300;
      font-size: clamp(10px, 1.55cqi, 17px);
      line-height: 1.65;
      color: rgba(0,0,0,0.45);
      text-align: center;
      max-width: 62%;
      margin: 0;
      letter-spacing: 0.01em;
    }

    /* ════════════════════════════════════
       BOTTOM SECTION — photo
    ════════════════════════════════════ */
    .vs-photo {
      position: relative;
      flex: 1;
      overflow: hidden;
      min-height: 0;
    }

    .vs-photo img {
      position: absolute;
      bottom: 0; left: 0; right: 0;
      width: 100%;
      height: 115%; /* bleeds up slightly */
      object-fit: cover;
      object-position: center top;
      filter: grayscale(100%) contrast(1.05) brightness(0.97);
    }

    /* Fade photo into white card at the top */
    .vs-photo-fade {
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 45%;
      background: linear-gradient(to bottom, #ffffff 0%, transparent 100%);
      z-index: 1;
      pointer-events: none;
    }

    /* Subtle bottom vignette */
    .vs-photo-vignette {
      position: absolute;
      bottom: 0; left: 0; right: 0;
      height: 30%;
      background: linear-gradient(to top, rgba(0,0,0,0.18) 0%, transparent 100%);
      z-index: 1;
      pointer-events: none;
    }

    /* ── Bottom bar overlaid on photo ── */
    .vs-bottom-bar {
      position: absolute;
      bottom: 0; left: 0; right: 0;
      z-index: 2;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding: 0 4cqi 3cqb;
    }

    .vs-bottom-label {
      font-size: clamp(7px, 1cqi, 10px);
      font-weight: 300;
      letter-spacing: 0.36em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.5);
    }

    .vs-bottom-cta {
      display: inline-flex;
      align-items: center;
      gap: 0.9cqi;
      background: #0d0d0d;
      color: #ffffff;
      padding: 0.9cqb 2.2cqi;
      border-radius: 999px;
      cursor: default;
    }
    .vs-bottom-cta-text {
      font-size: clamp(7px, 1.05cqi, 11px);
      font-weight: 400;
      letter-spacing: 0.2em;
      text-transform: uppercase;
    }
    .vs-bottom-cta-arrow {
      font-size: clamp(8px, 1.1cqi, 12px);
      line-height: 1;
    }

    /* ════════════════════════════════════
       CONTAINER QUERIES
    ════════════════════════════════════ */

    /* 1:1 Square */
    @container vs (max-aspect-ratio: 1.15/1) and (min-aspect-ratio: 0.82/1) {
      .vs-headline  { font-size: clamp(20px, 5.5cqi, 58px); max-width: 92%; }
      .vs-subline   { font-size: clamp(9px, 1.4cqi, 15px); max-width: 72%; }
      .vs-mid-divider { width: 70%; }
      .vs-top       { padding: 3.5cqb 5cqi 1.5cqb; }
    }

    /* Portrait 4:5 */
    @container vs (max-aspect-ratio: 0.82/1) {
      .vs-headline  { font-size: clamp(22px, 6cqi, 66px); max-width: 90%; }
      .vs-subline   { font-size: clamp(10px, 1.65cqi, 18px); max-width: 75%; }
      .vs-mid-divider { width: 65%; }
      .vs-top       { padding: 3.5cqb 5cqi 2cqb; }
    }

    /* Wide 16:9+ */
    @container vs (min-aspect-ratio: 1.55/1) {
      .vs-headline  { font-size: clamp(24px, 5cqi, 68px); }
      .vs-subline   { max-width: 52%; font-size: clamp(10px, 1.4cqi, 16px); }
      .vs-top       { padding: 3cqb 8cqi 1.5cqb; }
      .vs-mid-divider { width: 50%; }
    }
  `,

  render(s) {
    const accent = s.accent || '#111111';
    return `
    <div class="tpl-versum" style="background:${s.bg}">

      <!-- Subtle grid bg -->
      <div class="vs-bg-grid"></div>

      <!-- Main card -->
      <div class="vs-card" style="background:${s.cardBg}">

        <!-- Top content -->
        <div class="vs-top">

          <!-- Logo -->
          <div class="vs-logo-row">
            <div class="vs-logo">
              <span class="vs-logo-icon" style="color:${accent}">${s.logoIcon}</span>
              <span class="vs-logo-name" style="color:${accent}">${s.logo}</span>
            </div>
          </div>

          <!-- Eyebrow -->
          <div class="vs-eyebrow">
            <div class="vs-eyebrow-dot" style="background:${accent}"></div>
            <span class="vs-eyebrow-text">Future of Work</span>
          </div>

          <!-- Headline -->
          <h1 class="vs-headline" style="color:${accent}">${s.headline}</h1>

          <!-- Divider pip -->
          <div class="vs-mid-divider">
            <div class="vs-mid-divider-line"></div>
            <div class="vs-mid-divider-pip" style="border-color:${accent}44"></div>
            <div class="vs-mid-divider-line"></div>
          </div>

          <!-- Subline -->
          <p class="vs-subline">${s.subline}</p>

        </div>

        <!-- Photo area -->
        <div class="vs-photo">
          <img src="${s.img}" alt="" />
          <div class="vs-photo-fade" style="background:linear-gradient(to bottom,${s.cardBg} 0%,transparent 100%)"></div>
          <div class="vs-photo-vignette"></div>

          <!-- Overlaid bottom bar -->
          <div class="vs-bottom-bar">
            <span class="vs-bottom-label">${s.logo} — Innovation Series</span>
            <div class="vs-bottom-cta" style="background:${accent}">
              <span class="vs-bottom-cta-text">Learn More</span>
              <span class="vs-bottom-cta-arrow">→</span>
            </div>
          </div>
        </div>

      </div>
    </div>`;
  }
};