// ─────────────────────────────────────────────
//  TEMPLATE: Minimalist Quote
//  Category: Thought Leadership
//  Layout:   swiss-minimal
// ─────────────────────────────────────────────

export default {
  id: 'quote-minimal',
  name: 'Swiss Typography Quote',
  category: 'Insight',
  layout: 'quote',
  tags: ['quote', 'minimalist', 'clean', 'agency', 'typography'],

  defaults: {
    quote: "Design is not just what it looks like and feels like. Design is how it works.",
    author: "Steve Jobs",
    role: "Co-founder, Apple",
    brand: "STUDIO . DESIGN",
    bg: '#f4f4f0',     // Warm off-white
    text: '#111111',   // Off-black
    accent: '#ff4500', // Vibrant Orange
  },

  css: `
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&family=Work+Sans:wght@400;600&display=swap');
    
    .tpl-quote {
      width: 100%; height: 100%; padding: 48px; box-sizing: border-box;
      display: flex; flex-direction: column; justify-content: space-between;
      font-family: 'Work Sans', sans-serif;
    }
    
    .tpl-quote .q-top {
      display: flex; justify-content: space-between; align-items: flex-start;
    }
    .tpl-quote .q-brand {
      font-family: 'Space Grotesk', sans-serif; font-size: 14px; font-weight: 700;
      letter-spacing: -0.5px;
    }
    .tpl-quote .q-mark {
      font-family: 'Space Grotesk', sans-serif; font-size: 120px; line-height: 0.7;
      margin-top: -10px;
    }
    
    .tpl-quote .q-body {
      font-size: 42px; font-weight: 600; line-height: 1.15; letter-spacing: -1px;
      margin: 40px 0; max-width: 95%;
    }
    
    .tpl-quote .q-author-box {
      border-left: 4px solid; padding-left: 16px;
    }
    .tpl-quote .q-author {
      font-size: 18px; font-weight: 700; margin-bottom: 4px;
    }
    .tpl-quote .q-role {
      font-size: 14px; opacity: 0.6;
    }
  `,

  render(s) {
    return `
      <div class="tpl-quote" style="background-color:${s.bg}; color:${s.text}">
        <div class="q-top">
          <div class="q-brand">${s.brand}</div>
          <div class="q-mark" style="color:${s.accent}">"</div>
        </div>
        
        <div class="q-body">${s.quote}</div>
        
        <div class="q-author-box" style="border-color:${s.accent}">
          <div class="q-author">${s.author}</div>
          <div class="q-role">${s.role}</div>
        </div>
      </div>`;
  }
};