// ═══════════════════════════════════════════════════════════
//  TEMPLATE: Botanica Quote
//  Category: Quote
//  Style:    Deep forest green, aged parchment tones,
//            Playfair Display italic, botanical frame details,
//            layered depth with noise texture feel
//  Best for: Wellness, organic brands, yoga, coaching, tea
// ═══════════════════════════════════════════════════════════

export default {
  id: 'quote-botanica',
  name: 'Botanica Quote',
  category: 'Quote',
  layout: 'quote',
  tags: ['quote', 'green', 'organic', 'wellness', 'botanical', 'forest', 'lush'],

  defaults: {
    quote:  'Slow down. Everything worth having takes root before it blooms.',
    author: 'Ananya Krishnan',
    role:   'Founder, Terra Wellness',
    brand:  'TERRA',
    handle: '@terrawellness',
    tag:    'Daily Ritual',
    accent: '#3d6b47',
    bg:     '#1a2318',
    img:    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=90',
  },

  css: `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Lato:wght@200;300;400&display=swap');

    .tpl-botanica-quote {
      width:100%; height:100%;
      position:relative; overflow:hidden;
      font-family:'Lato',sans-serif;
      display:flex; align-items:center; justify-content:center;
    }

    /* BG image — lush and moody */
    .bq-img {
      position:absolute; inset:0;
    }
    .bq-img img {
      width:100%; height:100%;
      object-fit:cover; object-position:center;
      filter:brightness(.28) saturate(1.4);
    }

    /* Radial glow in center */
    .bq-glow {
      position:absolute; inset:0;
      background:radial-gradient(ellipse 70% 60% at 50% 50%,rgba(61,107,71,.35) 0%,transparent 70%);
    }

    /* Outer border frame */
    .bq-frame-outer {
      position:absolute; inset:18px;
      border:1px solid rgba(255,255,255,.06);
    }
    /* Inner border frame */
    .bq-frame-inner {
      position:absolute; inset:26px;
      border:1px solid rgba(255,255,255,.04);
    }

    /* Corner botanical marks */
    .bq-corner {
      position:absolute;
      width:24px; height:24px;
    }
    .bq-corner.tl { top:22px; left:22px; border-top:1px solid currentColor; border-left:1px solid currentColor; }
    .bq-corner.tr { top:22px; right:22px; border-top:1px solid currentColor; border-right:1px solid currentColor; }
    .bq-corner.bl { bottom:22px; left:22px; border-bottom:1px solid currentColor; border-left:1px solid currentColor; }
    .bq-corner.br { bottom:22px; right:22px; border-bottom:1px solid currentColor; border-right:1px solid currentColor; }

    /* Content */
    .bq-content {
      position:relative; z-index:2;
      display:flex; flex-direction:column;
      align-items:center; text-align:center;
      padding:60px 52px;
      gap:0;
    }

    /* Tag pill */
    .bq-tag {
      font-size:7.5px; letter-spacing:4px;
      text-transform:uppercase; font-weight:400;
      padding:5px 14px;
      border:1px solid currentColor;
      margin-bottom:28px;
      opacity:.7;
    }

    /* Opening quote mark */
    .bq-open {
      font-family:'Playfair Display',serif;
      font-size:80px; line-height:.6;
      margin-bottom:8px;
      opacity:.3;
      font-style:italic;
    }

    .bq-quote {
      font-family:'Playfair Display',serif;
      font-size:26px; font-weight:400;
      font-style:italic;
      line-height:1.5;
      letter-spacing:.3px;
      color:#e8ede5;
      max-width:340px;
      margin-bottom:28px;
    }

    /* Decorative divider */
    .bq-div {
      display:flex; align-items:center; gap:14px;
      margin-bottom:20px; width:55%;
    }
    .bq-div-line { flex:1; height:1px; opacity:.3; }
    .bq-div-symbol { font-size:10px; }

    .bq-author {
      font-size:13px; font-weight:300;
      letter-spacing:1px; color:rgba(232,237,229,.8);
      margin-bottom:4px;
    }
    .bq-role {
      font-size:9px; letter-spacing:3px;
      text-transform:uppercase; font-weight:200;
      opacity:.45; margin-bottom:0;
    }

    /* Bottom brand row */
    .bq-footer {
      position:absolute;
      bottom:36px; left:0; right:0;
      display:flex; align-items:center; justify-content:center; gap:16px;
    }
    .bq-brand {
      font-size:8.5px; letter-spacing:6px;
      text-transform:uppercase; font-weight:300;
      opacity:.35; color:#e8ede5;
    }
    .bq-sep { width:3px; height:3px; border-radius:50%; opacity:.3; }
    .bq-handle { font-size:8.5px; letter-spacing:2px; opacity:.35; color:#e8ede5; }
  `,

  render(s) {
    const a = s.accent || '#3d6b47';
    return `
    <div class="tpl-botanica-quote" style="background:${s.bg}">
      <div class="bq-img"><img src="${s.img}" alt=""/></div>
      <div class="bq-glow"></div>
      <div class="bq-frame-outer"></div>
      <div class="bq-frame-inner"></div>
      <div class="bq-corner tl" style="color:${a}"></div>
      <div class="bq-corner tr" style="color:${a}"></div>
      <div class="bq-corner bl" style="color:${a}"></div>
      <div class="bq-corner br" style="color:${a}"></div>
      <div class="bq-content">
        <div class="bq-tag" style="color:${a};border-color:${a}">${s.tag}</div>
        <div class="bq-open" style="color:${a}">"</div>
        <div class="bq-quote">${s.quote}</div>
        <div class="bq-div">
          <div class="bq-div-line" style="background:${a}"></div>
          <div class="bq-div-symbol" style="color:${a}">✦</div>
          <div class="bq-div-line" style="background:${a}"></div>
        </div>
        <div class="bq-author">${s.author}</div>
        <div class="bq-role">${s.role}</div>
      </div>
      <div class="bq-footer">
        <div class="bq-brand">${s.brand}</div>
        <div class="bq-sep" style="background:${a}"></div>
        <div class="bq-handle">${s.handle}</div>
      </div>
    </div>`;
  }
};