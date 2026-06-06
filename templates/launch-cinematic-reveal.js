// ═══════════════════════════════════════════════════════════
//  TEMPLATE: Cinematic Reveal
//  Category: Product Launch
//  Style:    Film-noir aesthetic, full-bleed product hero,
//            split price badge, Barlow Condensed headline,
//            side text rotated, cinematic crop bars
//  Best for: Sneakers, tech, luxury watches, premium FMCG
// ═══════════════════════════════════════════════════════════

export default {
  id: 'launch-cinematic-reveal',
  name: 'Cinematic Reveal',
  category: 'Product Launch',
  layout: 'launch',
  tags: ['launch', 'product', 'cinematic', 'dark', 'film', 'bold', 'hero'],

  defaults: {
    headline:  'REDEFINE\nPOSSIBLE',
    subline:   'Limited First Edition',
    desc:      'Precision-engineered to exceed every expectation. Born from obsession with perfection.',
    cta:       'Reserve Yours',
    brand:     'APEX LABS',
    price:     '₹24,999',
    badge:     'WORLD FIRST',
    accent:    '#e8c547',
    bg:        '#070708',
    img:       'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=90',
  },

  css: `
    @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@200;300;400;600;700;800;900&family=Barlow:wght@200;300;400&display=swap');

    .tpl-cinematic-reveal {
      width:100%; height:100%;
      position:relative; overflow:hidden;
      font-family:'Barlow',sans-serif;
    }

    /* Full bleed image */
    .cr-img {
      position:absolute; inset:0;
    }
    .cr-img img {
      width:100%; height:100%;
      object-fit:cover; object-position:center 40%;
      filter:brightness(.38) saturate(1.1) contrast(1.1);
    }

    /* Top & bottom cinematic bars */
    .cr-bar {
      position:absolute; left:0; right:0;
      height:72px;
    }
    .cr-bar.top { top:0; background:linear-gradient(180deg,#070708 0%,transparent 100%); }
    .cr-bar.bottom { bottom:0; background:linear-gradient(0deg,#070708 0%,transparent 100%); }

    /* Side rotated brand label */
    .cr-side-brand {
      position:absolute;
      left:16px; top:50%;
      transform:translateY(-50%) rotate(-90deg);
      font-family:'Barlow Condensed',sans-serif;
      font-size:8px; letter-spacing:8px;
      text-transform:uppercase; font-weight:300;
      color:rgba(255,255,255,.2);
      white-space:nowrap;
    }

    /* Top strip */
    .cr-top {
      position:absolute;
      top:24px; left:40px; right:24px;
      display:flex; align-items:center; justify-content:space-between;
    }
    .cr-brand {
      font-family:'Barlow Condensed',sans-serif;
      font-size:11px; letter-spacing:7px;
      text-transform:uppercase; font-weight:400;
      color:rgba(255,255,255,.8);
    }
    .cr-badge {
      font-size:7.5px; letter-spacing:3px;
      text-transform:uppercase; font-weight:600;
      padding:5px 12px;
    }

    /* Center — big headline */
    .cr-center {
      position:absolute;
      top:50%; left:40px; right:24px;
      transform:translateY(-52%);
    }
    .cr-subline {
      font-family:'Barlow Condensed',sans-serif;
      font-size:9px; letter-spacing:5px;
      text-transform:uppercase; font-weight:300;
      color:rgba(255,255,255,.35);
      margin-bottom:8px;
      display:flex; align-items:center; gap:10px;
    }
    .cr-subline::before {
      content:''; width:20px; height:1px;
      background:currentColor;
    }
    .cr-headline {
      font-family:'Barlow Condensed',sans-serif;
      font-size:96px; font-weight:900;
      line-height:.88; letter-spacing:-2px;
      text-transform:uppercase;
      color:#fff;
      white-space:pre-line;
    }

    /* Bottom content */
    .cr-bottom {
      position:absolute;
      bottom:28px; left:40px; right:24px;
      display:flex; align-items:flex-end; justify-content:space-between;
    }
    .cr-bottom-left {}
    .cr-desc {
      font-size:11.5px; line-height:1.75;
      font-weight:300; letter-spacing:.2px;
      color:rgba(255,255,255,.38);
      max-width:220px; margin-bottom:16px;
    }
    .cr-cta {
      font-family:'Barlow Condensed',sans-serif;
      font-size:10px; font-weight:600;
      letter-spacing:3px; text-transform:uppercase;
      padding:11px 24px; cursor:default;
      display:inline-block;
    }

    /* Price badge */
    .cr-price-block {
      text-align:right;
      padding:16px 20px;
      background:rgba(255,255,255,.05);
      border:1px solid rgba(255,255,255,.08);
      backdrop-filter:blur(8px);
    }
    .cr-price-label {
      font-size:7.5px; letter-spacing:3px;
      text-transform:uppercase;
      color:rgba(255,255,255,.3); margin-bottom:4px;
    }
    .cr-price {
      font-family:'Barlow Condensed',sans-serif;
      font-size:30px; font-weight:700;
      line-height:1; color:#fff;
    }
  `,

  render(s) {
    const a = s.accent || '#e8c547';
    return `
    <div class="tpl-cinematic-reveal" style="background:${s.bg}">
      <div class="cr-img"><img src="${s.img}" alt=""/></div>
      <div class="cr-bar top"></div>
      <div class="cr-bar bottom"></div>
      <div class="cr-side-brand">${s.brand}</div>
      <div class="cr-top">
        <div class="cr-brand">${s.brand}</div>
        <div class="cr-badge" style="background:${a};color:#070708">${s.badge}</div>
      </div>
      <div class="cr-center">
        <div class="cr-subline">${s.subline}</div>
        <div class="cr-headline" style="color:#fff">${s.headline}</div>
      </div>
      <div class="cr-bottom">
        <div class="cr-bottom-left">
          <div class="cr-desc">${s.desc}</div>
          <div class="cr-cta" style="background:${a};color:#070708">${s.cta}</div>
        </div>
        <div class="cr-price-block">
          <div class="cr-price-label">From</div>
          <div class="cr-price" style="color:${a}">${s.price}</div>
        </div>
      </div>
    </div>`;
  }
};