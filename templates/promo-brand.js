// ─────────────────────────────────────────────
//  TEMPLATE: Brand Promo
//  Category: Promotion
//  Layout:   promo
//  To duplicate: copy this file, change the id,
//                name, and default state values
// ─────────────────────────────────────────────

export default {
  id: 'promo-brand',
  name: 'Brand Promo',
  category: 'Promotion',
  layout: 'promo',
  tags: ['promotion', 'brand', 'dark'],

  // Default content — users can edit all of these via chat
  defaults: {
    headline: 'Elevate Your Style This Season',
    desc: 'Discover our curated collection of premium fashion pieces, handpicked for the modern professional.',
    cta: 'Shop Now',
    brand: 'StyleHouse',
    handle: '@stylehouse',
    tag: 'New Collection',
    accent: '#f72585',
    accent2: '#7209b7',
    bg: 'linear-gradient(135deg,#0d0d1a 0%,#1a0d2e 60%,#0d1a2e 100%)',
    img: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&q=80',
  },

  // CSS injected into the post canvas for this template
  css: `
    .tpl-promo-brand {
      width:100%;height:100%;
      display:flex;flex-direction:column;
      position:relative;overflow:hidden;
    }
    .tpl-promo-brand .deco {
      position:absolute;top:-60px;right:-60px;
      width:220px;height:220px;border-radius:50%;
      filter:blur(80px);opacity:.35;
    }
    .tpl-promo-brand .deco2 {
      position:absolute;bottom:-40px;left:-40px;
      width:160px;height:160px;border-radius:50%;
      filter:blur(60px);opacity:.3;
    }
    .tpl-promo-brand .inner {
      position:relative;z-index:1;padding:36px;
      display:flex;flex-direction:column;height:100%;gap:12px;
    }
    .tpl-promo-brand .ptag {
      display:inline-flex;align-items:center;gap:6px;
      font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;
      padding:5px 14px;border-radius:100px;width:fit-content;
    }
    .tpl-promo-brand .ptitle {
      font-family:'Syne',sans-serif;font-size:38px;font-weight:800;
      line-height:1.1;color:#fff;margin-top:8px;
    }
    .tpl-promo-brand .pdesc {
      font-size:14px;line-height:1.7;color:rgba(255,255,255,.6);max-width:340px;margin-top:4px;
    }
    .tpl-promo-brand .spacer { flex:1; }
    .tpl-promo-brand .pbottom {
      display:flex;align-items:flex-end;justify-content:space-between;
    }
    .tpl-promo-brand .pcta {
      font-family:'Syne',sans-serif;font-size:13px;font-weight:700;
      padding:12px 24px;border-radius:10px;border:none;cursor:default;
      letter-spacing:.5px;color:#fff;
    }
    .tpl-promo-brand .pbrand-name { font-size:15px;font-weight:700;color:#fff;letter-spacing:-.3px; }
    .tpl-promo-brand .pbrand-handle { font-size:12px;color:rgba(255,255,255,.45); }
  `,

  // Render function — receives current state, returns HTML string
  render(s) {
    return `
      <div class="tpl-promo-brand" style="background:${s.bg}">
        <div class="deco" style="background:${s.accent}"></div>
        <div class="deco2" style="background:${s.accent2}"></div>
        <div class="inner">
          <span class="ptag" style="background:${s.accent}22;border:1px solid ${s.accent}55;color:${s.accent}">${s.tag}</span>
          <h1 class="ptitle">${s.headline}</h1>
          <p class="pdesc">${s.desc}</p>
          <div class="spacer"></div>
          <div class="pbottom">
            <button class="pcta" style="background:${s.accent}">${s.cta}</button>
            <div>
              <div class="pbrand-name">${s.brand}</div>
              <div class="pbrand-handle">${s.handle}</div>
            </div>
          </div>
        </div>
      </div>`;
  }
};