// ─────────────────────────────────────────────
//  TEMPLATE: Product Launch
//  Category: Product Launch
//  Layout:   launch
// ─────────────────────────────────────────────

export default {
  id: 'launch-product',
  name: 'Product Launch',
  category: 'Product Launch',
  layout: 'launch',
  tags: ['product', 'launch', 'new', 'blue'],

  defaults: {
    headline: 'Introducing the AirMax Pro Series',
    desc: 'Engineered for performance. Designed for style. Available exclusively this Friday.',
    cta: 'Pre-Order',
    price: '₹4,999',
    badge: 'Now Available',
    accent: '#4cc9f0',
    bg: 'linear-gradient(180deg,#001429 0%,#002952 100%)',
    bgEnd: '#002952',
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
  },

  css: `
    .tpl-launch-product {
      width:100%;height:100%;
      display:flex;flex-direction:column;
    }
    .tpl-launch-product .l-img { width:100%;height:260px;position:relative;overflow:hidden;flex-shrink:0; }
    .tpl-launch-product .l-img img { width:100%;height:100%;object-fit:cover; }
    .tpl-launch-product .l-img .overlay { position:absolute;inset:0; }
    .tpl-launch-product .l-body {
      padding:24px 32px;flex:1;
      display:flex;flex-direction:column;gap:10px;
    }
    .tpl-launch-product .l-badge {
      display:inline-flex;gap:6px;align-items:center;
      font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;
      padding:4px 14px;border-radius:100px;width:fit-content;
    }
    .tpl-launch-product .l-title {
      font-family:'Syne',sans-serif;font-size:26px;font-weight:800;line-height:1.15;color:#fff;
    }
    .tpl-launch-product .l-desc { font-size:13px;line-height:1.65;color:rgba(255,255,255,.55); }
    .tpl-launch-product .l-foot {
      display:flex;align-items:center;justify-content:space-between;margin-top:auto;
    }
    .tpl-launch-product .l-price {
      font-family:'Syne',sans-serif;font-size:22px;font-weight:800;
    }
    .tpl-launch-product .l-btn {
      font-family:'Syne',sans-serif;font-size:12px;font-weight:700;
      padding:10px 20px;border-radius:9px;cursor:default;letter-spacing:.3px;color:#000;border:none;
    }
  `,

  render(s) {
    return `
      <div class="tpl-launch-product" style="background:${s.bg}">
        <div class="l-img">
          <img src="${s.img}" alt="product"/>
          <div class="overlay" style="background:linear-gradient(to bottom,transparent 40%,${s.bgEnd||'#002952'})"></div>
        </div>
        <div class="l-body">
          <span class="l-badge" style="background:${s.accent}18;border:1px solid ${s.accent}44;color:${s.accent}">✦ ${s.badge}</span>
          <h2 class="l-title">${s.headline}</h2>
          <p class="l-desc">${s.desc}</p>
          <div class="l-foot">
            <span class="l-price" style="color:${s.accent}">${s.price}</span>
            <button class="l-btn" style="background:${s.accent}">${s.cta}</button>
          </div>
        </div>
      </div>`;
  }
};