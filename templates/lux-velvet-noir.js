// ═══════════════════════════════════════════════════════════
//  TEMPLATE: Velvet Noir
//  Category: Luxury & Premium
//  Style:    Deep charcoal, rose gold accents, full-bleed
//            image with glass-morphism text panel,
//            haute couture editorial feel
//  Best for: Fashion, jewellery, perfume, luxury retail
// ═══════════════════════════════════════════════════════════

export default {
  id: 'lux-velvet-noir',
  name: 'Velvet Noir',
  category: 'Luxury & Premium',
  layout: 'luxury',
  tags: ['luxury', 'fashion', 'dark', 'editorial', 'rosegold', 'premium', 'noir'],

  defaults: {
    headline:  'Where Desire\nBecomes Art',
    subline:   'Haute Couture — S/S 2026',
    desc:      'Each silhouette is a love letter to the extraordinary woman who wears it.',
    cta:       'Enter the World',
    brand:     'MAISON VOSS',
    handle:    '@maisonvoss',
    accent:    '#c8977a',
    bg:        '#0c0b0a',
    img:       'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=90',
  },

  css: `
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400;1,600&family=Montserrat:wght@200;300;400;500&display=swap');

    .tpl-velvet-noir {
      width:100%; height:100%;
      position:relative; overflow:hidden;
      font-family:'Montserrat',sans-serif;
      background:#0c0b0a;
    }

    /* Full bleed image */
    .vn-img {
      position:absolute; inset:0;
    }
    .vn-img img {
      width:100%; height:100%;
      object-fit:cover; object-position:center top;
      filter:brightness(.55) saturate(.85);
    }

    /* Gradient vignette bottom */
    .vn-vignette {
      position:absolute; bottom:0; left:0; right:0;
      height:65%;
      background:linear-gradient(to top, #0c0b0a 0%, #0c0b0a55 60%, transparent 100%);
    }

    /* Thin rose-gold horizontal rule at 38% from top */
    .vn-rule {
      position:absolute;
      top:38%; left:0; right:0;
      height:1px;
      opacity:.35;
    }

    /* Top strip */
    .vn-top {
      position:absolute;
      top:28px; left:32px; right:32px;
      display:flex; align-items:center; justify-content:space-between;
    }
    .vn-brand {
      font-size:10px; letter-spacing:7px;
      text-transform:uppercase; font-weight:300;
      color:rgba(255,255,255,.9);
    }
    .vn-handle {
      font-size:9px; letter-spacing:3px;
      color:rgba(255,255,255,.35); font-weight:300;
    }

    /* Centered subline below rule */
    .vn-subline-wrap {
      position:absolute;
      top:calc(38% + 14px);
      left:0; right:0;
      display:flex; align-items:center; justify-content:center; gap:16px;
    }
    .vn-subline-line { flex:1; max-width:80px; height:1px; }
    .vn-subline-text {
      font-size:8.5px; letter-spacing:4px;
      text-transform:uppercase; font-weight:300;
      color:rgba(255,255,255,.5);
      white-space:nowrap;
    }

    /* Bottom content block */
    .vn-bottom {
      position:absolute;
      bottom:36px; left:32px; right:32px;
    }

    /* Glass panel behind text */
    .vn-glass {
      background:rgba(12,11,10,.55);
      backdrop-filter:blur(14px);
      -webkit-backdrop-filter:blur(14px);
      border:1px solid rgba(255,255,255,.07);
      border-radius:2px;
      padding:28px 28px 24px;
    }

    .vn-headline {
      font-family:'Cormorant Garamond',serif;
      font-size:52px; font-weight:300;
      font-style:italic;
      line-height:1.05;
      color:#fff;
      white-space:pre-line;
      margin-bottom:16px;
      letter-spacing:-.3px;
    }

    .vn-divider {
      display:flex; align-items:center; gap:12px;
      margin-bottom:14px;
    }
    .vn-divider-line { flex:1; height:1px; }
    .vn-divider-diamond { font-size:9px; }

    .vn-desc {
      font-size:11.5px; line-height:1.85;
      color:rgba(255,255,255,.45);
      font-weight:300; letter-spacing:.3px;
      margin-bottom:22px;
      font-family:'Cormorant Garamond',serif;
      font-style:italic;
    }

    .vn-cta-row {
      display:flex; align-items:center;
      justify-content:space-between;
    }
    .vn-cta {
      font-size:9px; letter-spacing:5px;
      text-transform:uppercase; font-weight:400;
      display:flex; align-items:center; gap:12px;
      cursor:default;
    }
    .vn-cta-line { width:28px; height:1px; }
    .vn-dot-row {
      display:flex; gap:5px; align-items:center;
    }
    .vn-dot {
      width:4px; height:4px; border-radius:50%;
    }
    .vn-dot.active { width:16px; border-radius:2px; }
  `,

  render(s) {
    const a = s.accent || '#c8977a';
    return `
    <div class="tpl-velvet-noir" style="background:${s.bg}">
      <div class="vn-img"><img src="${s.img}" alt=""/></div>
      <div class="vn-vignette"></div>
      <div class="vn-rule" style="background:linear-gradient(to right,transparent,${a},transparent)"></div>
      <div class="vn-top">
        <div class="vn-brand">${s.brand}</div>
        <div class="vn-handle">${s.handle}</div>
      </div>
      <div class="vn-subline-wrap">
        <div class="vn-subline-line" style="background:rgba(255,255,255,.2)"></div>
        <div class="vn-subline-text">${s.subline}</div>
        <div class="vn-subline-line" style="background:rgba(255,255,255,.2)"></div>
      </div>
      <div class="vn-bottom">
        <div class="vn-glass">
          <div class="vn-headline">${s.headline}</div>
          <div class="vn-divider">
            <div class="vn-divider-line" style="background:linear-gradient(to right,${a},transparent)"></div>
            <div class="vn-divider-diamond" style="color:${a}">◆</div>
          </div>
          <div class="vn-desc">${s.desc}</div>
          <div class="vn-cta-row">
            <div class="vn-cta" style="color:${a}">
              <div class="vn-cta-line" style="background:${a}"></div>
              ${s.cta}
            </div>
            <div class="vn-dot-row">
              <div class="vn-dot active" style="background:${a}"></div>
              <div class="vn-dot" style="background:rgba(255,255,255,.25)"></div>
              <div class="vn-dot" style="background:rgba(255,255,255,.25)"></div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  }
};