// ═══════════════════════════════════════════════════════════
//  TEMPLATE: Xume — AI Editorial Card
//  Category: AI / Technology
//  Style:    Split vertical card — dark full-bleed abstract
//            image top half, cream editorial text bottom half,
//            brand + arrow CTA on bottom bar. Clean Swiss
//            editorial typgraphy, zero decoration.
//  Best for: AI brands, tech posters, social creatives,
//            product announcements, LinkedIn cards
//  Sizes:    Fully responsive — 1:1, 4:5, 9:16, 16:9
//
//  FONTS:    Uses CSS variables from global fonts.css
// ═══════════════════════════════════════════════════════════

module.exports = {
  id: 'xume-ai-editorial-card',
  name: 'Xume — AI Editorial Card',
  category: 'AI / Technology',
  layout: 'card',
  tags: ['ai', 'editorial', 'minimal', 'split', 'dark', 'cream', 'poster', 'swiss', 'tech'],

  defaults: {
    headline:    'Unlock limitless\npossibilities with\nxume.ai.',
    brand:       'xume.ai',
    ctaArrow:    '→',
    imageSplit:  '52',
    bg:          '#f0ece6',
    cardBg:      '#f5f0e8',
    textColor:   '#0d0d0d',
    img:         'https://images.unsplash.com/photo-1617791160536-598cf32026fb?w=800&q=90',
  },

  css: `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap');

    /* ── Root ── */
    .tpl-xume {
      container-type: size;
      container-name: xm;
      width: 100%; height: 100%;
      position: relative;
      overflow: hidden;
      font-family: 'Inter', sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #c8c4be;
    }

    /* ════════════════════════════════════════
       OUTER BG — neutral gray like reference
    ════════════════════════════════════════ */
    .xm-outer {
      position: absolute; inset: 0;
      background: #c8c4be;
    }

    /* ════════════════════════════════════════
       CARD — vertical split
    ════════════════════════════════════════ */
    .xm-card {
      position: relative;
      z-index: 2;
      width: clamp(220px, 64cqi, 480px);
      height: clamp(340px, 88cqb, 700px);
      border-radius: clamp(4px, 0.6cqi, 8px);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      box-shadow:
        0 2px 4px rgba(0,0,0,0.08),
        0 12px 32px rgba(0,0,0,0.14),
        0 32px 64px rgba(0,0,0,0.10);
    }

    /* ── TOP — dark image block ── */
    .xm-img-block {
      position: relative;
      flex: 0 0 52%;
      overflow: hidden;
      background: #000000;
    }

    .xm-img-block img {
      width: 100%; height: 100%;
      object-fit: cover;
      object-position: center center;
      display: block;
      filter: grayscale(100%) brightness(0.88) contrast(1.05);
    }

    /* Subtle bottom fade into card */
    .xm-img-fade {
      position: absolute;
      bottom: 0; left: 0; right: 0;
      height: 28%;
      background: linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 100%);
      pointer-events: none;
    }

    /* ── BOTTOM — cream editorial block ── */
    .xm-text-block {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: clamp(16px, 3.2cqb, 32px) clamp(16px, 3cqi, 28px) clamp(14px, 2.8cqb, 28px);
    }

    /* Headline */
    .xm-headline {
      font-weight: 400;
      font-size: clamp(16px, 4.2cqi, 36px);
      line-height: 1.18;
      letter-spacing: -0.02em;
      color: #0d0d0d;
      margin: 0;
      white-space: pre-line;
    }

    /* Bottom bar — brand + arrow */
    .xm-bottom-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .xm-brand {
      font-weight: 400;
      font-size: clamp(11px, 2cqi, 16px);
      color: #0d0d0d;
      letter-spacing: 0.01em;
    }

    .xm-arrow {
      font-size: clamp(14px, 2.8cqi, 22px);
      color: #0d0d0d;
      line-height: 1;
      font-weight: 300;
    }

    /* ════════════════════════════════════════
       CONTAINER QUERIES
    ════════════════════════════════════════ */

    /* 1:1 Square */
    @container xm (max-aspect-ratio: 1.15/1) and (min-aspect-ratio: 0.82/1) {
      .xm-card     { width: clamp(200px, 58cqi, 420px); height: clamp(300px, 80cqb, 600px); }
      .xm-headline { font-size: clamp(15px, 4cqi, 32px); }
    }

    /* Portrait 4:5 / 9:16 */
    @container xm (max-aspect-ratio: 0.82/1) {
      .xm-card     { width: clamp(220px, 78cqi, 460px); height: clamp(340px, 84cqb, 680px); }
      .xm-headline { font-size: clamp(16px, 5cqi, 36px); }
    }

    /* Wide 16:9+ */
    @container xm (min-aspect-ratio: 1.55/1) {
      .xm-card     { width: clamp(220px, 40cqi, 420px); height: clamp(320px, 82cqb, 640px); }
      .xm-headline { font-size: clamp(14px, 3.2cqi, 30px); }
    }
  `,

  render(s) {
    return `
    <div class="tpl-xume">

      <!-- Outer bg -->
      <div class="xm-outer" style="background:${s.bg}"></div>

      <!-- Card -->
      <div class="xm-card">

        <!-- Dark image top -->
        <div class="xm-img-block">
          <img src="${s.img}" alt="" />
          <div class="xm-img-fade"></div>
        </div>

        <!-- Cream text bottom -->
        <div class="xm-text-block" style="background:${s.cardBg}">
          <h1 class="xm-headline" style="color:${s.textColor}">${s.headline}</h1>
          <div class="xm-bottom-bar">
            <span class="xm-brand" style="color:${s.textColor}">${s.brand}</span>
            <span class="xm-arrow" style="color:${s.textColor}">${s.ctaArrow}</span>
          </div>
        </div>

      </div>
    </div>`;
  }
};
