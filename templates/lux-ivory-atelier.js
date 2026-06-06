// ═══════════════════════════════════════════════════════════
//  TEMPLATE: Ivory Atelier
//  Category: Luxury & Premium
//  Style:    Warm ivory, asymmetric split layout,
//            oversized italic serif, minimal copper details,
//            architectural negative space, gallery feel
//  Best for: Skincare, fragrance, interior design, jewellery
// ═══════════════════════════════════════════════════════════

export default {
  id: 'lux-ivory-atelier',
  name: 'Ivory Atelier',
  category: 'Luxury & Premium',
  layout: 'luxury',
  tags: ['luxury', 'ivory', 'minimal', 'cream', 'copper', 'editorial', 'gallery'],

  defaults: {
    headline:  'Silence is\nthe Loudest\nLuxury',
    subline:   'No. 12 — Limited Reserve',
    desc:      'A fragrance composed for those who understand that true luxury needs no announcement.',
    cta:       'Request a Sample',
    brand:     'ATELIER SÈVE',
    season:    '2026',
    accent:    '#9e6b3e',
    bg:        '#f5f0e8',
    img:       'https://images.unsplash.com/photo-1541643600914-78b084683702?w=800&q=90',
  },

  css: `
    @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;1,300;1,500;1,700&family=Raleway:wght@200;300;400;500&display=swap');

    .tpl-ivory-atelier {
      width:100%; height:100%;
      display:grid;
      grid-template-columns:1fr 1.1fr;
      font-family:'Raleway',sans-serif;
      overflow:hidden;
    }

    /* LEFT — text column */
    .ia-left {
      padding:36px 28px 36px 36px;
      display:flex; flex-direction:column;
      justify-content:space-between;
      position:relative; z-index:1;
    }

    .ia-brand-col {
      display:flex; flex-direction:column; gap:4px;
    }
    .ia-brand {
      font-size:9px; letter-spacing:6px;
      text-transform:uppercase; font-weight:400;
    }
    .ia-season {
      font-size:8px; letter-spacing:3px;
      opacity:.4; font-weight:300;
    }

    .ia-middle { flex:1; display:flex; align-items:center; padding:20px 0; }

    .ia-subline {
      font-size:8px; letter-spacing:4px;
      text-transform:uppercase; font-weight:400;
      margin-bottom:14px;
      display:flex; align-items:center; gap:8px;
    }
    .ia-subline::before {
      content:''; display:block;
      width:20px; height:1px;
      background:currentColor; opacity:.5;
    }

    .ia-headline {
      font-family:'Cormorant',serif;
      font-size:48px; font-weight:300;
      font-style:italic;
      line-height:1.05;
      white-space:pre-line;
      letter-spacing:-.5px;
    }

    .ia-bottom {}
    .ia-rule { height:1px; margin-bottom:16px; }
    .ia-desc {
      font-size:11px; line-height:1.9;
      font-weight:300; letter-spacing:.2px;
      opacity:.6;
      margin-bottom:20px;
    }
    .ia-cta {
      font-size:8.5px; letter-spacing:4px;
      text-transform:uppercase; font-weight:400;
      padding:10px 18px;
      border:1px solid currentColor;
      display:inline-block; cursor:default;
    }

    /* RIGHT — image column */
    .ia-right {
      position:relative; overflow:hidden;
    }
    .ia-right img {
      width:100%; height:100%;
      object-fit:cover; object-position:center;
      display:block;
    }

    /* Thin copper line overlaying image */
    .ia-img-line {
      position:absolute;
      top:0; left:0;
      width:1px; height:100%;
      opacity:.4;
    }

    /* Rotated label on image */
    .ia-rotated-label {
      position:absolute;
      bottom:60px; right:-20px;
      font-size:8px; letter-spacing:5px;
      text-transform:uppercase; font-weight:300;
      color:rgba(255,255,255,.5);
      transform:rotate(90deg);
      transform-origin:right center;
      white-space:nowrap;
    }

    /* Number corner */
    .ia-num {
      position:absolute;
      top:20px; right:20px;
      font-family:'Cormorant',serif;
      font-size:72px; font-weight:300;
      font-style:italic;
      line-height:1;
      color:rgba(255,255,255,.1);
    }
  `,

  render(s) {
    const a = s.accent || '#9e6b3e';
    const bg = s.bg || '#f5f0e8';
    const isDark = parseInt(bg.slice(1,3),16) < 100;
    const tc = isDark ? '#f0ebe0' : '#1e1912';
    return `
    <div class="tpl-ivory-atelier" style="background:${bg};color:${tc}">
      <div class="ia-left">
        <div class="ia-brand-col">
          <div class="ia-brand" style="color:${a}">${s.brand}</div>
          <div class="ia-season">${s.season}</div>
        </div>
        <div class="ia-middle">
          <div>
            <div class="ia-subline" style="color:${a}">${s.subline}</div>
            <div class="ia-headline" style="color:${tc}">${s.headline}</div>
          </div>
        </div>
        <div class="ia-bottom">
          <div class="ia-rule" style="background:linear-gradient(to right,${a}66,transparent)"></div>
          <div class="ia-desc">${s.desc}</div>
          <div class="ia-cta" style="color:${a};border-color:${a}88">${s.cta}</div>
        </div>
      </div>
      <div class="ia-right">
        <img src="${s.img}" alt=""/>
        <div class="ia-img-line" style="background:${a}"></div>
        <div class="ia-num">01</div>
        <div class="ia-rotated-label">${s.brand}</div>
      </div>
    </div>`;
  }
};