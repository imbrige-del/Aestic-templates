// ═══════════════════════════════════════════════════════════
//  TEMPLATE: Dusk Gradient
//  Category: Promotion
//  Style:    Warm sunset ombre from terracotta to deep plum,
//            centered layout, Fraunces display font,
//            delicate star/dot motifs, soft luxury mood
//  Best for: Lifestyle, D2C, food & bev, beauty, wellness
// ═══════════════════════════════════════════════════════════

export default {
  id: 'promo-dusk',
  name: 'Dusk Gradient',
  category: 'Promotion',
  layout: 'promo',
  tags: ['promo', 'gradient', 'warm', 'dusk', 'sunset', 'lifestyle', 'beauty'],

  defaults: {
    headline:  'Golden\nHour\nCollection',
    subline:   'Crafted at the Edge of Day',
    desc:      'When the light turns amber and the world exhales — that\'s when you shine.',
    cta:       'Explore Now',
    brand:     'GLOW & CO.',
    handle:    '@glowandco',
    tag:       'New Drop',
    accent:    '#ffd4a3',
    bg:        'linear-gradient(160deg,#3d1a54 0%,#8b2e2e 45%,#e06b2b 100%)',
    img:       'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=90',
  },

  css: `
    @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,200;0,300;1,200;1,300;1,700&family=Outfit:wght@200;300;400&display=swap');

    .tpl-promo-dusk {
      width:100%; height:100%;
      position:relative; overflow:hidden;
      font-family:'Outfit',sans-serif;
      display:flex; flex-direction:column;
      align-items:center; justify-content:center;
    }

    /* BG image subtle */
    .pd-img {
      position:absolute; inset:0;
    }
    .pd-img img {
      width:100%; height:100%;
      object-fit:cover; opacity:.12;
      filter:saturate(0.8) brightness(.8);
    }

    /* Decorative dots pattern */
    .pd-dots {
      position:absolute; inset:0;
      background-image:radial-gradient(circle,rgba(255,255,255,.08) 1px,transparent 1px);
      background-size:28px 28px;
    }

    /* Glow orb */
    .pd-orb {
      position:absolute;
      width:300px; height:300px;
      border-radius:50%;
      background:rgba(255,200,120,.12);
      filter:blur(60px);
      top:50%; left:50%;
      transform:translate(-50%,-50%);
    }

    /* Content */
    .pd-content {
      position:relative; z-index:2;
      display:flex; flex-direction:column;
      align-items:center; text-align:center;
      padding:44px 40px;
      width:100%;
    }

    /* Top brand row */
    .pd-top {
      display:flex; align-items:center;
      justify-content:space-between;
      width:100%; margin-bottom:auto;
      position:absolute; top:28px; left:28px; right:28px;
    }
    .pd-brand {
      font-size:9px; letter-spacing:5px;
      text-transform:uppercase; font-weight:300;
      color:rgba(255,255,255,.55);
    }
    .pd-tag {
      font-size:8.5px; letter-spacing:3px;
      text-transform:uppercase; font-weight:300;
      padding:5px 12px;
      border:1px solid rgba(255,255,255,.2);
      color:rgba(255,255,255,.55);
    }

    /* Central star motif */
    .pd-star {
      font-size:14px; color:rgba(255,255,255,.3);
      margin-bottom:16px; letter-spacing:12px;
    }

    /* Subline */
    .pd-subline {
      font-size:9px; letter-spacing:5px;
      text-transform:uppercase; font-weight:300;
      color:rgba(255,255,255,.45);
      margin-bottom:16px;
    }

    /* Big headline */
    .pd-headline {
      font-family:'Fraunces',serif;
      font-size:72px; font-weight:200;
      font-style:italic;
      line-height:.95; letter-spacing:-1px;
      color:#fff;
      white-space:pre-line;
      margin-bottom:24px;
      text-shadow:0 8px 40px rgba(0,0,0,.3);
    }

    /* Fine rule */
    .pd-rule {
      display:flex; align-items:center; gap:12px;
      width:60%; margin-bottom:18px;
    }
    .pd-rule-line { flex:1; height:1px; background:rgba(255,255,255,.2); }
    .pd-rule-dot { width:3px; height:3px; border-radius:50%; background:rgba(255,255,255,.4); }

    .pd-desc {
      font-size:12.5px; line-height:1.85;
      font-weight:200; letter-spacing:.3px;
      color:rgba(255,255,255,.5);
      max-width:300px; margin-bottom:28px;
    }

    .pd-cta {
      font-size:9px; letter-spacing:5px;
      text-transform:uppercase; font-weight:400;
      padding:13px 30px;
      background:rgba(255,255,255,.12);
      border:1px solid rgba(255,255,255,.25);
      color:rgba(255,255,255,.85);
      cursor:default;
      backdrop-filter:blur(8px);
    }

    /* Bottom handle */
    .pd-bottom {
      position:absolute; bottom:24px;
      left:0; right:0; text-align:center;
    }
    .pd-handle {
      font-size:9px; letter-spacing:3px;
      color:rgba(255,255,255,.25); font-weight:300;
    }
  `,

  render(s) {
    const a = s.accent || '#ffd4a3';
    return `
    <div class="tpl-promo-dusk" style="background:${s.bg}">
      <div class="pd-img"><img src="${s.img}" alt=""/></div>
      <div class="pd-dots"></div>
      <div class="pd-orb" style="background:${a}20"></div>
      <div class="pd-top">
        <div class="pd-brand">${s.brand}</div>
        <div class="pd-tag">${s.tag}</div>
      </div>
      <div class="pd-content">
        <div class="pd-star">✦ ✦ ✦</div>
        <div class="pd-subline">${s.subline}</div>
        <div class="pd-headline" style="color:${a}">${s.headline}</div>
        <div class="pd-rule">
          <div class="pd-rule-line"></div>
          <div class="pd-rule-dot"></div>
          <div class="pd-rule-line"></div>
        </div>
        <div class="pd-desc">${s.desc}</div>
        <div class="pd-cta">${s.cta}</div>
      </div>
      <div class="pd-bottom">
        <div class="pd-handle">${s.handle}</div>
      </div>
    </div>`;
  }
};