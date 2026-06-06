// ─────────────────────────────────────────────
//  TEMPLATE: Brand Quote
//  Category: Quote
//  Layout:   quote
// ─────────────────────────────────────────────

export default {
  id: 'quote-brand',
  name: 'Brand Quote',
  category: 'Quote',
  layout: 'quote',
  tags: ['quote', 'inspire', 'green', 'minimal'],

  defaults: {
    quote: 'Quality is never an accident. It is always the result of intelligent effort.',
    author: 'John Ruskin',
    role: 'Design Philosopher',
    brand: 'StyleHouse',
    accent: '#06d6a0',
    bg: 'linear-gradient(160deg,#061a0c,#0d2e15)',
  },

  css: `
    .tpl-quote-brand {
      width:100%;height:100%;
      display:flex;flex-direction:column;align-items:center;justify-content:center;
      padding:48px;text-align:center;position:relative;overflow:hidden;
    }
    .tpl-quote-brand .q-deco {
      position:absolute;inset:0;pointer-events:none;
    }
    .tpl-quote-brand .q-inner {
      position:relative;z-index:1;
      display:flex;flex-direction:column;align-items:center;gap:20px;
    }
    .tpl-quote-brand .q-mark {
      font-family:'Syne',sans-serif;font-size:80px;line-height:.7;
      opacity:.6;margin-bottom:-10px;
    }
    .tpl-quote-brand .q-text {
      font-family:'Syne',sans-serif;font-size:24px;font-weight:700;
      line-height:1.35;color:#fff;max-width:360px;
    }
    .tpl-quote-brand .q-line { width:40px;height:2px;border-radius:2px; }
    .tpl-quote-brand .q-author { font-size:14px;color:rgba(255,255,255,.6); }
    .tpl-quote-brand .q-role {
      font-size:11px;letter-spacing:1px;text-transform:uppercase;font-weight:700;
    }
    .tpl-quote-brand .q-brand {
      position:absolute;bottom:24px;right:28px;
      font-size:12px;font-weight:700;color:rgba(255,255,255,.3);letter-spacing:.5px;
    }
  `,

  render(s) {
    return `
      <div class="tpl-quote-brand" style="background:${s.bg}">
        <div class="q-deco" style="background:radial-gradient(ellipse 80% 60% at 50% 50%,${s.accent}0a,transparent 70%)"></div>
        <div class="q-inner">
          <div class="q-mark" style="color:${s.accent}">"</div>
          <div class="q-text">${s.quote}</div>
          <div class="q-line" style="background:${s.accent}"></div>
          <div class="q-author">${s.author}</div>
          <div class="q-role" style="color:${s.accent}">${s.role}</div>
        </div>
        <div class="q-brand">${s.brand}</div>
      </div>`;
  }
};