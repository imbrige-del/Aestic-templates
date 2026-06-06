// ═══════════════════════════════════════════════════════════
//  TEMPLATE: Obsidian Sale
//  Category: Sale & Offer
//  Style:    Deep black, electric accent, oversized % number,
//            architectural grid lines, premium feel
//  Best for: High-end sale events, premium D2C brands
// ═══════════════════════════════════════════════════════════

export default {
  id: 'sale-obsidian',
  name: 'Obsidian Sale',
  category: 'Sale & Offer',
  layout: 'sale',
  tags: ['sale', 'discount', 'dark', 'premium', 'bold', 'neon'],

  defaults: {
    pct: '30',
    headline: 'Members\nOnly Sale',
    desc: 'Exclusive access for our most valued customers. Premium pieces, extraordinary prices.',
    cta: 'Unlock Access',
    brand: 'NOIR STUDIO',
    code: 'NOIR30',
    expiry: 'Ends 28 Feb 2026',
    accent: '#00e5ff',
    bg: '#060608',
    img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=90',
  },

  css: `
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Jost:wght@200;300;400;500&display=swap');

    .tpl-sale-obsidian {
      width: 100%; height: 100%;
      background: #060608;
      position: relative;
      overflow: hidden;
      font-family: 'Jost', sans-serif;
    }

    /* BG image faint */
    .obs-bg {
      position: absolute;
      right: 0; top: 0;
      width: 50%; height: 100%;
    }
    .obs-bg img {
      width: 100%; height: 100%;
      object-fit: cover;
      opacity: 0.15;
      filter: saturate(0);
    }
    .obs-bg::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(to right, #060608 30%, transparent);
    }

    /* Horizontal rule lines */
    .obs-line1 {
      position: absolute;
      top: 120px; left: 0; right: 0;
      height: 1px;
      background: rgba(255,255,255,0.06);
    }
    .obs-line2 {
      position: absolute;
      bottom: 100px; left: 0; right: 0;
      height: 1px;
      background: rgba(255,255,255,0.06);
    }

    /* Vertical accent line */
    .obs-vline {
      position: absolute;
      top: 0; left: 42%;
      width: 1px; height: 100%;
      background: linear-gradient(180deg, transparent 0%, currentColor 30%, currentColor 70%, transparent 100%);
      opacity: 0.15;
    }

    .obs-content {
      position: absolute; inset: 0;
      padding: 40px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    /* Top bar */
    .obs-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .obs-brand {
      font-size: 10px;
      letter-spacing: 6px;
      text-transform: uppercase;
      color: rgba(255,255,255,0.4);
      font-weight: 300;
    }
    .obs-expiry {
      font-size: 9px;
      letter-spacing: 2px;
      color: rgba(255,255,255,0.25);
      text-transform: uppercase;
    }

    /* Big % number */
    .obs-pct-wrap {
      display: flex;
      align-items: flex-end;
      gap: 0;
      line-height: 1;
      margin-top: 10px;
    }
    .obs-pct-num {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 140px;
      line-height: 0.9;
      letter-spacing: -4px;
    }
    .obs-pct-sign {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 60px;
      padding-bottom: 16px;
      opacity: 0.6;
    }
    .obs-off {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 40px;
      letter-spacing: 4px;
      color: rgba(255,255,255,0.35);
      margin-left: 16px;
      padding-bottom: 20px;
    }

    /* Headline */
    .obs-headline {
      font-family: 'Jost', sans-serif;
      font-size: 28px;
      font-weight: 200;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: #fff;
      white-space: pre-line;
      line-height: 1.2;
      margin-top: -10px;
    }

    /* Bottom */
    .obs-bottom {}
    .obs-desc {
      font-size: 12px;
      line-height: 1.8;
      color: rgba(255,255,255,0.4);
      font-weight: 300;
      max-width: 280px;
      margin-bottom: 20px;
      letter-spacing: 0.3px;
    }
    .obs-actions {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .obs-cta {
      font-size: 10px;
      letter-spacing: 3px;
      text-transform: uppercase;
      padding: 12px 24px;
      font-weight: 500;
      cursor: default;
    }
    .obs-code {
      font-size: 10px;
      letter-spacing: 4px;
      padding: 11px 16px;
      border: 1px solid rgba(255,255,255,0.15);
      color: rgba(255,255,255,0.4);
      text-transform: uppercase;
    }
  `,

  render(s) {
    const accent = s.accent || '#00e5ff';
    return `
    <div class="tpl-sale-obsidian" style="background:${s.bg}">
      <div class="obs-bg"><img src="${s.img}" alt=""/></div>
      <div class="obs-line1"></div>
      <div class="obs-line2"></div>
      <div class="obs-vline" style="color:${accent}"></div>
      <div class="obs-content">
        <div class="obs-top">
          <div class="obs-brand">${s.brand}</div>
          <div class="obs-expiry">${s.expiry}</div>
        </div>
        <div>
          <div class="obs-pct-wrap">
            <div class="obs-pct-num" style="color:${accent}">${s.pct}</div>
            <div class="obs-pct-sign" style="color:${accent}">%</div>
            <div class="obs-off">OFF</div>
          </div>
          <div class="obs-headline">${s.headline}</div>
        </div>
        <div class="obs-bottom">
          <div class="obs-desc">${s.desc}</div>
          <div class="obs-actions">
            <div class="obs-cta" style="background:${accent};color:#060608">${s.cta}</div>
            <div class="obs-code">${s.code}</div>
          </div>
        </div>
      </div>
    </div>`;
  }
};