// ─────────────────────────────────────────────
//  TEMPLATE: Fashion Drop — Dark Minimal
//  Category: Fashion
//  Layout:   split-diagonal
// ─────────────────────────────────────────────

export default {
  id: 'fashion-drop',
  name: 'Fashion Drop',
  category: 'Fashion',
  layout: 'split-diagonal',
  tags: ['fashion', 'drop', 'streetwear', 'dark', 'minimal', 'luxury', 'editorial'],

  defaults: {
    brand:    'MAISON NOIR',
    drop:     'DROP 07',
    headline: 'The Shadow\nCollection.',
    kicker:   'LIMITED EDITION',
    desc:     'Crafted for those who move in silence. Each piece tells a story of understated power.',
    cta:      'SHOP THE DROP',
    handle:   '@maisonnoir',
    accent:   '#c8a96e',   // muted gold
    bg:       '#0a0a0b',
    text:     '#f5f3ee',
    img:      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
  },

  css: `
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;1,300&family=Space+Mono:wght@400;700&display=swap');

    .tpl-fashion-drop {
      width: 100%; height: 100%;
      background: var(--bg);
      position: relative;
      overflow: hidden;
      font-family: 'DM Sans', sans-serif;
      color: var(--text);
    }

    /* Full-bleed image — right 60% */
    .fd-img {
      position: absolute;
      right: 0; top: 0;
      width: 62%; height: 100%;
      object-fit: cover;
      object-position: center top;
    }

    /* Diagonal mask over image */
    .fd-img-mask {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        105deg,
        var(--bg) 0%,
        var(--bg) 42%,
        rgba(10,10,11,0.7) 58%,
        transparent 72%
      );
    }

    /* Left content column */
    .fd-content {
      position: absolute;
      left: 0; top: 0;
      width: 50%; height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 36px 28px;
      z-index: 5;
    }

    /* TOP: brand + drop number */
    .fd-top {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .fd-brand {
      font-family: 'Space Mono', monospace;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 3px;
      color: var(--accent);
      text-transform: uppercase;
    }
    .fd-drop {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 11px;
      letter-spacing: 6px;
      color: rgba(245,243,238,0.35);
      text-transform: uppercase;
    }

    /* MIDDLE: giant headline */
    .fd-headline-wrap {
      flex: 1;
      display: flex;
      align-items: center;
    }
    .fd-headline {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 74px;
      line-height: 0.9;
      letter-spacing: -1px;
      color: var(--text);
      white-space: pre-line;
      /* Stroke effect on second line */
    }
    .fd-headline span {
      display: block;
      -webkit-text-stroke: 1px var(--text);
      color: transparent;
    }

    /* Accent bar */
    .fd-bar {
      width: 40px;
      height: 2px;
      background: var(--accent);
      margin: 16px 0;
    }

    /* desc */
    .fd-desc {
      font-size: 12px;
      font-weight: 300;
      font-style: italic;
      line-height: 1.75;
      color: rgba(245,243,238,0.6);
      max-width: 200px;
    }

    /* BOTTOM: kicker + cta + handle */
    .fd-bottom {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }
    .fd-kicker {
      font-family: 'Space Mono', monospace;
      font-size: 9px;
      letter-spacing: 3px;
      color: var(--accent);
      text-transform: uppercase;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .fd-kicker::before {
      content: '';
      display: inline-block;
      width: 6px; height: 6px;
      border-radius: 50%;
      background: var(--accent);
      flex-shrink: 0;
    }
    .fd-cta {
      font-family: 'Space Mono', monospace;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 2.5px;
      color: var(--bg);
      background: var(--accent);
      padding: 12px 20px;
      display: inline-block;
      width: fit-content;
      text-transform: uppercase;
    }
    .fd-handle {
      font-size: 11px;
      font-weight: 300;
      color: rgba(245,243,238,0.4);
      letter-spacing: 1px;
    }

    /* Corner number — decorative */
    .fd-corner {
      position: absolute;
      bottom: 32px;
      right: 24px;
      font-family: 'Bebas Neue', sans-serif;
      font-size: 120px;
      line-height: 1;
      color: rgba(245,243,238,0.04);
      pointer-events: none;
      z-index: 4;
      letter-spacing: -4px;
    }

    /* Thin frame line */
    .fd-frame {
      position: absolute;
      inset: 14px;
      border: 1px solid rgba(200,169,110,0.12);
      pointer-events: none;
      z-index: 6;
    }
    /* Corner ticks */
    .fd-frame::before, .fd-frame::after {
      content: '';
      position: absolute;
      width: 16px; height: 16px;
      border-color: var(--accent);
      border-style: solid;
      opacity: 0.5;
    }
    .fd-frame::before {
      top: -1px; left: -1px;
      border-width: 2px 0 0 2px;
    }
    .fd-frame::after {
      bottom: -1px; right: -1px;
      border-width: 0 2px 2px 0;
    }
  `,

  render(s) {
    // Split headline: first word gets hollow stroke treatment
    const lines = (s.headline || '').split('\n');
    const headlineHtml = lines.map((l, i) =>
      i === lines.length - 1
        ? `<span>${l}</span>`
        : l
    ).join('\n');

    return `
      <div class="tpl-fashion-drop" style="
        --bg: ${s.bg};
        --text: ${s.text};
        --accent: ${s.accent};
      ">
        <img src="${s.img}" class="fd-img" alt="" crossorigin="anonymous"/>
        <div class="fd-img-mask"></div>
        <div class="fd-frame"></div>

        <div class="fd-content">
          <div class="fd-top">
            <div class="fd-brand">${s.brand}</div>
            <div class="fd-drop">${s.drop}</div>
          </div>

          <div class="fd-headline-wrap">
            <div>
              <div class="fd-headline">${headlineHtml}</div>
              <div class="fd-bar"></div>
              <div class="fd-desc">${s.desc}</div>
            </div>
          </div>

          <div class="fd-bottom">
            <div class="fd-kicker">${s.kicker}</div>
            <div class="fd-cta">${s.cta}</div>
            <div class="fd-handle">${s.handle}</div>
          </div>
        </div>

        <div class="fd-corner">07</div>
      </div>`;
  }
};