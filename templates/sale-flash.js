// ─────────────────────────────────────────────
//  TEMPLATE: Flash Sale
//  Category: Sale & Offer
//  Layout:   sale
// ─────────────────────────────────────────────

export default {
  id: 'sale-flash',
  name: 'Flash Sale',
  category: 'Sale & Offer',
  layout: 'sale',
  tags: ['sale', 'discount', 'offer', 'orange'],

  defaults: {
    headline: 'Flash Sale',
    desc: "On all premium products. Limited time only. Don't miss out on this exclusive deal!",
    cta: 'Grab Deal',
    brand: 'StyleHouse',
    code: 'SAVE40',
    pct: '40',
    accent: '#ffd60a',
    bg: 'linear-gradient(160deg,#1a0800,#2d1000)',
    bgStart: '#1a0800',
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
  },

  css: `
    .tpl-sale-flash {
      width:100%;height:100%;
      display:flex;position:relative;overflow:hidden;
    }
    .tpl-sale-flash .sale-left {
      flex:1;padding:40px 36px;
      display:flex;flex-direction:column;justify-content:space-between;
      position:relative;z-index:1;
    }
    .tpl-sale-flash .sale-right { width:180px;flex-shrink:0;position:relative; }
    .tpl-sale-flash .sale-right img { width:100%;height:100%;object-fit:cover;opacity:.7; }
    .tpl-sale-flash .sale-right .fade {
      position:absolute;inset:0;
    }
    .tpl-sale-flash .s-eyebrow {
      font-size:10px;letter-spacing:3px;text-transform:uppercase;font-weight:700;
    }
    .tpl-sale-flash .s-pct {
      font-family:'Syne',sans-serif;font-size:72px;font-weight:800;
      line-height:1;letter-spacing:-3px;
    }
    .tpl-sale-flash .s-off {
      font-family:'Syne',sans-serif;font-size:28px;font-weight:700;color:#fff;margin-top:-8px;
    }
    .tpl-sale-flash .s-title {
      font-size:16px;color:rgba(255,255,255,.7);margin-top:8px;line-height:1.5;
    }
    .tpl-sale-flash .s-code-wrap { display:flex;align-items:center;gap:10px;margin-top:4px; }
    .tpl-sale-flash .s-code {
      background:rgba(255,255,255,.1);border:1px dashed rgba(255,255,255,.3);
      color:#fff;font-size:13px;font-weight:700;padding:8px 16px;
      border-radius:8px;letter-spacing:2px;
    }
    .tpl-sale-flash .s-cta {
      font-family:'Syne',sans-serif;font-size:12px;font-weight:700;
      padding:9px 18px;border-radius:8px;cursor:default;letter-spacing:.3px;color:#000;
    }
    .tpl-sale-flash .s-brand { font-size:13px;font-weight:700;color:rgba(255,255,255,.5); }
  `,

  render(s) {
    return `
      <div class="tpl-sale-flash" style="background:${s.bg}">
        <div class="sale-left">
          <div class="s-eyebrow" style="color:${s.accent}">Limited Time Offer</div>
          <div class="s-pct" style="color:${s.accent}">${s.pct}%</div>
          <div class="s-off">OFF</div>
          <div class="s-title">${s.desc}</div>
          <div class="s-code-wrap">
            <div class="s-code">${s.code}</div>
            <div class="s-cta" style="background:${s.accent}">${s.cta}</div>
          </div>
          <div class="s-brand" style="margin-top:auto;padding-top:12px">${s.brand}</div>
        </div>
        <div class="sale-right">
          <img src="${s.img}" alt="sale"/>
          <div class="fade" style="background:linear-gradient(to right,${s.bgStart||'#1a0800'} 0%,transparent 100%)"></div>
        </div>
      </div>`;
  }
};