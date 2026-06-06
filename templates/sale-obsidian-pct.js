// ═══════════════════════════════════════════════════════════
//  TEMPLATE: Obsidian Percent
//  Category: Sale & Offer
//  Style:    Near-black canvas, electric accent, Bebas Neue
//            oversized % number that bleeds off screen,
//            razor-thin grid lines, brutally premium feel
//  Best for: Premium flash sales, exclusive member offers
// ═══════════════════════════════════════════════════════════

export default {
  id: 'sale-obsidian-pct',
  name: 'Obsidian Percent',
  category: 'Sale & Offer',
  layout: 'sale',
  tags: ['sale', 'dark', 'bold', 'premium', 'electric', 'discount', 'members'],

  defaults: {
    pct:     '40',
    label:   'OFF — MEMBERS ONLY',
    headline:'The Privilege\nof Less',
    desc:    'An exclusive window for those who understand that true value never announces itself loudly.',
    cta:     'Claim Your Access',
    brand:   'ONYX',
    code:    'ONYX40',
    expiry:  'Valid till 28 Feb',
    accent:  '#7fff6b',
    bg:      '#080808',
    img:     'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=90',
  },

  css: `
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@200;300;400;500&display=swap');

    .tpl-sale-obsidian-pct {
      width:100%; height:100%;
      position:relative; overflow:hidden;
      font-family:'DM Sans',sans-serif;
    }

    /* faint bg image */
    .op-bg {
      position:absolute; inset:0;
    }
    .op-bg img {
      width:100%; height:100%;
      object-fit:cover;
      opacity:.07; filter:saturate(0);
    }

    /* Horizontal thin rules */
    .op-hline {
      position:absolute; left:0; right:0;
      height:1px;
      background:rgba(255,255,255,.05);
    }

    /* HUGE bleed number — sits behind content */
    .op-big-num {
      position:absolute;
      right:-12px; top:-10px;
      font-family:'Bebas Neue',sans-serif;
      font-size:340px;
      line-height:.85;
      letter-spacing:-10px;
      pointer-events:none;
      user-select:none;
    }

    /* Thin vertical line left */
    .op-vline {
      position:absolute;
      top:0; left:52px;
      width:1px; height:100%;
      background:rgba(255,255,255,.06);
    }

    /* Content layout */
    .op-content {
      position:relative; z-index:2;
      height:100%;
      display:flex; flex-direction:column;
      padding:32px 36px 36px;
      justify-content:space-between;
    }

    /* Top row */
    .op-top {
      display:flex; align-items:center;
      justify-content:space-between;
    }
    .op-brand {
      font-size:10px; letter-spacing:7px;
      text-transform:uppercase; font-weight:300;
      color:rgba(255,255,255,.7);
    }
    .op-expiry {
      font-size:8.5px; letter-spacing:2px;
      color:rgba(255,255,255,.2);
      text-transform:uppercase; font-weight:300;
    }

    /* Percent label strip */
    .op-label-strip {
      font-size:8.5px; letter-spacing:5px;
      text-transform:uppercase; font-weight:300;
      color:rgba(255,255,255,.3);
      margin-bottom:6px;
    }

    /* Main headline */
    .op-headline {
      font-family:'DM Sans',sans-serif;
      font-size:36px; font-weight:200;
      letter-spacing:1px;
      line-height:1.15;
      color:#fff;
      white-space:pre-line;
      max-width:260px;
    }

    /* Bottom block */
    .op-bottom {}
    .op-desc {
      font-size:11.5px; line-height:1.85;
      font-weight:300; letter-spacing:.2px;
      color:rgba(255,255,255,.35);
      max-width:260px; margin-bottom:22px;
    }

    /* Action row */
    .op-actions {
      display:flex; align-items:stretch; gap:10px;
    }
    .op-cta {
      font-size:9px; letter-spacing:3px;
      text-transform:uppercase; font-weight:500;
      padding:13px 22px; cursor:default;
      display:flex; align-items:center;
    }
    .op-code-wrap {
      display:flex; align-items:center;
      border:1px solid rgba(255,255,255,.1);
      padding:0 16px; gap:8px;
    }
    .op-code-label {
      font-size:7.5px; letter-spacing:2px;
      text-transform:uppercase;
      color:rgba(255,255,255,.3);
    }
    .op-code {
      font-size:11px; letter-spacing:4px;
      font-weight:500; color:rgba(255,255,255,.6);
    }
  `,

  render(s) {
    const a = s.accent || '#7fff6b';
    return `
    <div class="tpl-sale-obsidian-pct" style="background:${s.bg}">
      <div class="op-bg"><img src="${s.img}" alt=""/></div>
      <div class="op-hline" style="top:100px"></div>
      <div class="op-hline" style="top:52%"></div>
      <div class="op-hline" style="bottom:110px"></div>
      <div class="op-vline"></div>
      <div class="op-big-num" style="color:${a}11">${s.pct}%</div>
      <div class="op-content">
        <div class="op-top">
          <div class="op-brand">${s.brand}</div>
          <div class="op-expiry">${s.expiry}</div>
        </div>
        <div>
          <div class="op-label-strip" style="color:${a}88">${s.pct}% — ${s.label}</div>
          <div class="op-headline">${s.headline}</div>
        </div>
        <div class="op-bottom">
          <div class="op-desc">${s.desc}</div>
          <div class="op-actions">
            <div class="op-cta" style="background:${a};color:#080808">${s.cta}</div>
            <div class="op-code-wrap">
              <div class="op-code-label">Code</div>
              <div class="op-code">${s.code}</div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  }
};