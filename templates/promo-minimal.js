// ─────────────────────────────────────────────
//  TEMPLATE: Minimal Light
//  Category: Promotion
//  Layout:   minimal
//
//  ✅ EXAMPLE of how easy it is to add a new template:
//     1. Copy this file
//     2. Change id, name, category
//     3. Update defaults (colors, text)
//     4. Update render() HTML
//     Done! Server auto-loads it.
// ─────────────────────────────────────────────

export default {
  id: 'promo-minimal',
  name: 'Minimal Light',
  category: 'Promotion',
  layout: 'minimal',
  tags: ['minimal', 'light', 'clean', 'white'],

  defaults: {
    headline: 'Less is More. Always.',
    desc: 'Clean design. Clear message. Maximum impact for your brand.',
    cta: 'Explore Now',
    brand: 'StyleHouse',
    tag: 'New Season',
    accent: '#111111',
    bg: '#f5f0eb',
    img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
  },

  css: `
    .tpl-promo-minimal {
      width:100%;height:100%;
      display:flex;flex-direction:column;
    }
    .tpl-promo-minimal .m-img { width:100%;height:55%;position:relative;overflow:hidden;flex-shrink:0; }
    .tpl-promo-minimal .m-img img { width:100%;height:100%;object-fit:cover; }
    .tpl-promo-minimal .m-body {
      flex:1;padding:24px 28px;
      display:flex;flex-direction:column;gap:10px;
    }
    .tpl-promo-minimal .m-tag {
      font-size:9px;font-weight:800;letter-spacing:3px;text-transform:uppercase;
    }
    .tpl-promo-minimal .m-line { height:2px;width:30px; }
    .tpl-promo-minimal .m-title {
      font-family:'Syne',sans-serif;font-size:28px;font-weight:800;line-height:1.15;
    }
    .tpl-promo-minimal .m-desc { font-size:13px;line-height:1.65;color:#666; }
    .tpl-promo-minimal .m-foot {
      display:flex;align-items:center;justify-content:space-between;margin-top:auto;
    }
    .tpl-promo-minimal .m-brand { font-size:12px;font-weight:700;color:#999; }
    .tpl-promo-minimal .m-cta {
      font-family:'Syne',sans-serif;font-size:12px;font-weight:700;
      padding:9px 20px;border-radius:8px;cursor:default;letter-spacing:.3px;border:none;
    }
  `,

  render(s) {
    const isDark = s.bg.includes('#0') || s.bg.includes('gradient') && s.bg.includes('0d') ;
    const textColor = (s.bg === '#f5f0eb' || s.bg.startsWith('#f') || s.bg.startsWith('#e') || s.bg.startsWith('#d') || s.bg.startsWith('#c')) ? '#111' : '#fff';
    return `
      <div class="tpl-promo-minimal" style="background:${s.bg}">
        <div class="m-img"><img src="${s.img}" alt="post"/></div>
        <div class="m-body">
          <div class="m-tag" style="color:${s.accent}">${s.tag}</div>
          <div class="m-line" style="background:${s.accent}"></div>
          <h2 class="m-title" style="color:${textColor}">${s.headline}</h2>
          <p class="m-desc">${s.desc}</p>
          <div class="m-foot">
            <span class="m-brand">${s.brand}</span>
            <button class="m-cta" style="background:${s.accent};color:${s.bg}">${s.cta}</button>
          </div>
        </div>
      </div>`;
  }
};