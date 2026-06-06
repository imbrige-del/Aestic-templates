// ═══════════════════════════════════════════════════════════
//  TEMPLATE: Glass Morphism
//  Category: Promotion
//  Style:    Vivid mesh gradient background, frosted glass
//            panel, floating stats/badges, ultra-modern UI,
//            soft shadows, premium tech-brand aesthetic
//  Best for: SaaS, fintech, premium apps, modern D2C
// ═══════════════════════════════════════════════════════════

export default {
  id: 'promo-glassmorphism',
  name: 'Glass Morphism',
  category: 'Promotion',
  layout: 'promo',
  tags: ['promo', 'glass', 'modern', 'gradient', 'tech', 'saas', 'fintech', 'ui'],

  defaults: {
    headline:  'The Future\nof Finance',
    subline:   'Now in your pocket.',
    desc:      'Intelligent money management. Zero fees. Infinite possibilities.',
    cta:       'Get Early Access',
    brand:     'NOVA',
    handle:    '@novafinance',
    stat1:     '2M+',
    stat1label:'Users',
    stat2:     '₹0',
    stat2label:'Zero Fees',
    stat3:     '4.9★',
    stat3label:'App Rating',
    accent:    '#6ee7f7',
    accent2:   '#a78bfa',
    bg:        'linear-gradient(135deg,#0f0c29 0%,#1a1060 40%,#24243e 100%)',
    img:       'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=90',
  },

  css: `
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap');

    .tpl-glass-morphism {
      width:100%; height:100%;
      position:relative; overflow:hidden;
      font-family:'Plus Jakarta Sans',sans-serif;
    }

    /* BG image very faint */
    .gm-img {
      position:absolute; inset:0;
    }
    .gm-img img {
      width:100%; height:100%;
      object-fit:cover; opacity:.06;
      filter:saturate(0);
    }

    /* Mesh gradient blobs */
    .gm-blob {
      position:absolute;
      border-radius:50%;
      filter:blur(70px);
    }

    /* Content */
    .gm-content {
      position:relative; z-index:2;
      height:100%; padding:32px;
      display:flex; flex-direction:column;
      justify-content:space-between;
    }

    /* Top */
    .gm-top {
      display:flex; align-items:center;
      justify-content:space-between;
    }
    .gm-brand {
      font-size:18px; font-weight:700;
      letter-spacing:-0.3px;
      color:#fff;
    }
    .gm-brand span { font-weight:200; opacity:.6; }
    .gm-live-badge {
      display:flex; align-items:center; gap:6px;
      background:rgba(255,255,255,.08);
      border:1px solid rgba(255,255,255,.12);
      backdrop-filter:blur(8px);
      padding:6px 12px; border-radius:100px;
    }
    .gm-live-dot {
      width:6px; height:6px; border-radius:50%;
      animation:pulse 2s ease infinite;
    }
    @keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}
    .gm-live-text {
      font-size:9px; letter-spacing:2px;
      text-transform:uppercase; font-weight:500;
      color:rgba(255,255,255,.6);
    }

    /* Middle — glass panel */
    .gm-glass-panel {
      background:rgba(255,255,255,.07);
      border:1px solid rgba(255,255,255,.1);
      backdrop-filter:blur(20px);
      -webkit-backdrop-filter:blur(20px);
      border-radius:20px;
      padding:28px;
    }
    .gm-subline {
      font-size:10px; letter-spacing:3px;
      text-transform:uppercase; font-weight:400;
      margin-bottom:12px;
    }
    .gm-headline {
      font-size:52px; font-weight:700;
      line-height:.95; letter-spacing:-2px;
      color:#fff; white-space:pre-line;
      margin-bottom:8px;
    }
    .gm-headline-sub {
      font-size:20px; font-weight:200;
      color:rgba(255,255,255,.5);
      letter-spacing:-.3px;
      margin-bottom:18px;
    }
    .gm-desc {
      font-size:12px; line-height:1.75;
      font-weight:300; color:rgba(255,255,255,.45);
      letter-spacing:.2px; margin-bottom:22px;
    }
    .gm-cta {
      font-size:10px; letter-spacing:1px;
      font-weight:600; padding:13px 24px;
      border-radius:10px; cursor:default;
      display:inline-block;
    }

    /* Stats row */
    .gm-stats {
      display:grid; grid-template-columns:1fr 1fr 1fr;
      gap:10px;
    }
    .gm-stat {
      background:rgba(255,255,255,.06);
      border:1px solid rgba(255,255,255,.08);
      border-radius:12px; padding:14px 12px;
      text-align:center;
    }
    .gm-stat-num {
      font-size:22px; font-weight:700;
      letter-spacing:-.5px; color:#fff;
      line-height:1; margin-bottom:4px;
    }
    .gm-stat-label {
      font-size:9px; letter-spacing:1px;
      text-transform:uppercase; font-weight:300;
      color:rgba(255,255,255,.35);
    }

    /* Handle */
    .gm-handle {
      text-align:center;
      font-size:9px; letter-spacing:2px;
      color:rgba(255,255,255,.2); font-weight:300;
    }
  `,

  render(s) {
    const a = s.accent || '#6ee7f7';
    const a2 = s.accent2 || '#a78bfa';
    return `
    <div class="tpl-glass-morphism" style="background:${s.bg}">
      <div class="gm-img"><img src="${s.img}" alt=""/></div>
      <div class="gm-blob" style="width:280px;height:280px;top:-80px;left:-60px;background:${a};opacity:.18"></div>
      <div class="gm-blob" style="width:220px;height:220px;bottom:-60px;right:-40px;background:${a2};opacity:.2"></div>
      <div class="gm-blob" style="width:160px;height:160px;top:40%;left:40%;background:${a}44;opacity:.15"></div>
      <div class="gm-content">
        <div class="gm-top">
          <div class="gm-brand">${s.brand}<span>™</span></div>
          <div class="gm-live-badge">
            <div class="gm-live-dot" style="background:${a}"></div>
            <div class="gm-live-text">Live</div>
          </div>
        </div>
        <div class="gm-glass-panel">
          <div class="gm-subline" style="color:${a}">${s.subline}</div>
          <div class="gm-headline">${s.headline}</div>
          <div class="gm-desc">${s.desc}</div>
          <div class="gm-cta" style="background:${a};color:#0f0c29">${s.cta}</div>
        </div>
        <div class="gm-stats">
          <div class="gm-stat">
            <div class="gm-stat-num" style="color:${a}">${s.stat1}</div>
            <div class="gm-stat-label">${s.stat1label}</div>
          </div>
          <div class="gm-stat">
            <div class="gm-stat-num" style="color:${a}">${s.stat2}</div>
            <div class="gm-stat-label">${s.stat2label}</div>
          </div>
          <div class="gm-stat">
            <div class="gm-stat-num" style="color:${a}">${s.stat3}</div>
            <div class="gm-stat-label">${s.stat3label}</div>
          </div>
        </div>
        <div class="gm-handle">${s.handle}</div>
      </div>
    </div>`;
  }
};