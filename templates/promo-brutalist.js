// ═══════════════════════════════════════════════════════════
//  TEMPLATE: Brutalist Editorial
//  Category: Promotion
//  Style:    Raw black & white, oversized condensed type,
//            newspaper column grid, bold rule lines,
//            anti-luxury but hyper-premium feel
//  Best for: Streetwear, music, art, bold D2C brands
// ═══════════════════════════════════════════════════════════

export default {
  id: 'promo-brutalist',
  name: 'Brutalist Editorial',
  category: 'Promotion',
  layout: 'promo',
  tags: ['promo', 'brutal', 'editorial', 'magazine', 'newspaper', 'bold', 'street'],

  defaults: {
    headline:  'THE ONLY\nOPINION\nTHAT\nMATTERS',
    issue:     'VOL. 01 — ISSUE 12',
    kicker:    'Uncompromising design for an uncompromising generation.',
    desc:      'We don\'t follow trends. We set them, then abandon them.',
    cta:       'SHOP NOW',
    brand:     'BLOC',
    date:      'FEB 2026',
    accent:    '#ff2d2d',
    bg:        '#f0ede8',
    img:       'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=90',
  },

  css: `
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=IBM+Plex+Mono:wght@300;400;500&family=Barlow+Condensed:wght@400;700;800;900&display=swap');

    .tpl-brutalist-edit {
      width:100%; height:100%;
      display:grid;
      grid-template-rows:auto 1fr auto;
      font-family:'IBM Plex Mono',monospace;
      overflow:hidden;
    }

    /* TOP MASTHEAD */
    .be-masthead {
      border-bottom:4px solid #111;
      padding:14px 20px 12px;
      display:flex; align-items:baseline;
      justify-content:space-between;
    }
    .be-brand-big {
      font-family:'Bebas Neue',sans-serif;
      font-size:52px; line-height:1;
      letter-spacing:4px; color:#111;
    }
    .be-masthead-right {
      text-align:right;
      display:flex; flex-direction:column; gap:2px;
    }
    .be-issue {
      font-size:7px; letter-spacing:2px;
      text-transform:uppercase; color:#444;
    }
    .be-date {
      font-size:7px; letter-spacing:2px;
      color:#888;
    }

    /* BODY — newspaper columns */
    .be-body {
      display:grid;
      grid-template-columns:1.2fr 1fr;
      border-bottom:2px solid #111;
    }

    /* Left col — headline */
    .be-left {
      border-right:2px solid #111;
      padding:16px 18px;
      display:flex; flex-direction:column;
      justify-content:space-between;
    }
    .be-kicker {
      font-size:8px; letter-spacing:2px;
      text-transform:uppercase;
      padding-bottom:10px;
      border-bottom:1px solid #ccc;
      margin-bottom:14px;
      color:#555;
    }
    .be-headline {
      font-family:'Bebas Neue',sans-serif;
      font-size:64px; line-height:.95;
      letter-spacing:1px; color:#111;
      white-space:pre-line;
      flex:1;
    }
    .be-desc {
      font-size:9.5px; line-height:1.8;
      color:#444; font-weight:300;
      margin-top:12px;
      padding-top:12px;
      border-top:1px solid #ddd;
    }

    /* Right col — image + accent */
    .be-right {
      display:flex; flex-direction:column;
    }
    .be-img-wrap {
      flex:1; overflow:hidden; position:relative;
    }
    .be-img-wrap img {
      width:100%; height:100%;
      object-fit:cover; object-position:center top;
      filter:saturate(0) contrast(1.1);
    }
    /* Accent color overlay strip */
    .be-img-strip {
      position:absolute;
      bottom:0; left:0; right:0;
      height:5px;
    }

    /* Category pills */
    .be-pills {
      padding:10px 14px;
      display:flex; gap:6px;
      flex-wrap:wrap;
      border-top:1px solid #ddd;
    }
    .be-pill {
      font-size:7px; letter-spacing:2px;
      text-transform:uppercase;
      padding:4px 8px;
      border:1px solid currentColor;
    }

    /* BOTTOM FOOTER */
    .be-footer {
      padding:12px 20px;
      display:flex; align-items:center;
      justify-content:space-between;
    }
    .be-cta {
      font-family:'Bebas Neue',sans-serif;
      font-size:22px; letter-spacing:4px;
      cursor:default;
      display:flex; align-items:center; gap:10px;
    }
    .be-cta-arrow { font-size:20px; }
    .be-tagline {
      font-size:7.5px; letter-spacing:1.5px;
      color:#888; max-width:200px;
      text-align:right; line-height:1.6;
    }
  `,

  render(s) {
    const a = s.accent || '#ff2d2d';
    const bg = s.bg || '#f0ede8';
    const isDark = parseInt(bg.slice(1,3),16) < 100;
    const tc = isDark ? '#f0ede8' : '#111111';
    const tcMid = isDark ? '#aaa' : '#555';
    return `
    <div class="tpl-brutalist-edit" style="background:${bg};color:${tc}">
      <div class="be-masthead" style="border-color:${tc}">
        <div class="be-brand-big" style="color:${a}">${s.brand}</div>
        <div class="be-masthead-right">
          <div class="be-issue" style="color:${tcMid}">${s.issue}</div>
          <div class="be-date" style="color:${tcMid}99">${s.date}</div>
        </div>
      </div>
      <div class="be-body">
        <div class="be-left" style="border-color:${tc}">
          <div>
            <div class="be-kicker" style="color:${tcMid};border-color:${tc}22">${s.kicker}</div>
            <div class="be-headline" style="color:${tc}">${s.headline}</div>
          </div>
          <div class="be-desc" style="color:${tcMid};border-color:${tc}22">${s.desc}</div>
        </div>
        <div class="be-right">
          <div class="be-img-wrap">
            <img src="${s.img}" alt=""/>
            <div class="be-img-strip" style="background:${a}"></div>
          </div>
          <div class="be-pills" style="border-color:${tc}22">
            <div class="be-pill" style="color:${a};border-color:${a}">NEW IN</div>
            <div class="be-pill" style="color:${tcMid};border-color:${tcMid}55">EXCLUSIVE</div>
          </div>
        </div>
      </div>
      <div class="be-footer">
        <div class="be-cta" style="color:${tc}">
          ${s.cta}
          <span class="be-cta-arrow" style="color:${a}">→</span>
        </div>
        <div class="be-tagline" style="color:${tcMid}">${s.brand} — EST. 2020</div>
      </div>
    </div>`;
  }
};